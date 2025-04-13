import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const location = useLocation()
  const isInView = useInView(sectionRef, { once: false });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    if (location.hash === "#contact") {
      // Wait a little if needed to ensure the DOM is rendered
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  // formspree form handler
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resetTimeout = setTimeout(() => {
      setFormStatus("");
    }, 8000);

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
    <motion.section
    id="contact"
      ref={sectionRef}
      className="flex flex-col mt-20 max-w-7xl mx-auto px-4 sm:px-8 z-10"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 z-10">
        Contact
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Got an idea you want to build, or you want us to collaborate on a
            project! Reach out to me using the form or the contact details
            below.
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
          <button type="submit" className="send-btn w-[45%] lg:w-[25%] ml-auto">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>

          {formStatus && (
            <p className="text-center text-sm mt-4 text-blue-700 dark:text-blue-500">
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
