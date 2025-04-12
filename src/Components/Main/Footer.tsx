import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex mt-20 bg-blue-700 text-white dark:bg-gray-900 py-8 z-10">
        <div className="w-full px-4 sm:px-8 flex flex-row justify-between items-center z-20">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>

          <div className="flex gap-4 z-10">
            <a
              href="https://www.linkedin.com/in/aniyajuwon-pelumi-a8168a296"
              target="_blank"
              className="text-white dark:text-blue-500"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/sm_art_n_interiors?igsh=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              className="text-white dark:text-blue-500"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://x.com/aniya_juwon"
              target="_blank"
              className="text-white dark:text-blue-500"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
