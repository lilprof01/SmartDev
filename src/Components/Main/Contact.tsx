import axios from "axios";
import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resetTimeout = setTimeout(() => {
      setFormStatus("");
    }, 5000);

    try {
      const response = await axios.post(
        "https://formspree.io/f/mnnqplbn",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status >= 200 && response.status < 300) {
        setFormStatus(
          "Thank you for reaching out! We'll get back to you soon."
        );
        resetTimeout;
        formRef.current?.reset();

        return () => clearTimeout(resetTimeout);
      } else {
        console.error("Unexpected response:", response);
        setFormStatus("Something went wrong. Please try again.");
        resetTimeout;

        return () => clearTimeout(resetTimeout);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("Something went wrong. Please try again.");
      resetTimeout;

      return () => clearTimeout(resetTimeout);
    }
  };
  return (
    // Contact Section
    <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-8 z-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We'd love to hear from you! Reach out to us using the form or the
            contact details below.
          </p>
          <a
            href="tel:+2348141745050"
            className="text-blue-700 dark:text-blue-500 hover:underline"
          >
            <strong>Phone:</strong> +234 8141745050
          </a>
          <a
            href="mailto:adewumime@gmail.com?subject=Hello&body=I would like to get in touch with you."
            className="text-blue-700 dark:text-blue-500 hover:underline"
          >
            <strong>Email:</strong> adewumime@gmail.com
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-4 w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="px-4 py-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-full shadow-lg bg-blue-700 text-white dark:bg-transparent hover:dark:bg-blue-700 dark:border dark:border-gray-300 transition-all duration-300 w-[50%] lg:w-[30%] ml-auto cursor-pointer send"
          >
            Send Message
          </button>
          {formStatus && (
            <p className="text-center text-sm mt-4 text-blue-700 dark:text-blue-500">
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
