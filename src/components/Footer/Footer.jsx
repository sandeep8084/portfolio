import React from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-2xl font-bold mb-6">Portfolio</h4>
            <p className="text-gray-400 mb-6">
              I'm a passionate Full Stack Developer with a strong foundation in
              both front-end and back-end technologies. I enjoy creating
              seamless, user-friendly experiences that solve real problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sandeep8084"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sandeep8084"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "home",
                "about",
                "skills",
                "education",
                "projects",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer capitalize"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Ranchi, jharkhand</li>
              <li>sandeep808493@gmail.com</li>
              <li>+91 8084938188</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            &copy; {currentYear} Personal Portfolio. Made with{" "}
            <Heart className="text-red-500 w-4 h-4 mx-1" fill="currentColor" />{" "}
            sandeep kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
