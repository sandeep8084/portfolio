import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-gradient-to-br from-primary-50 to-gray-50 overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="mb-6 leading-tight mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I'm{" "}
              <span className="text-primary-600">Sandeep Kumar Mahto</span>
              <br />
              <span className="text-gray-800">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I build beautiful, responsive, and user-friendly web applications
              using modern technologies. Let's work together to bring your ideas
              to life.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                className="btn btn-primary cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                className="btn btn-outline cursor-pointer"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="https://github.com/sandeep8084"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/sandeep8084"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            
              <img
                src="/sandeep.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div> */}

            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-2 ring-primary-500">
              <img
                src="/sandeep.jpg"
                alt="Profile Picture"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.span
          className="text-sm text-gray-500 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Scroll Down
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className="cursor-pointer text-primary-600"
          >
            <ChevronDown size={24} />
          </Link>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Home;
