import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, Download } from "lucide-react";



const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          About Me
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Get to know me better - my background, experience, and what drives me
          as a developer.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/About.webp"
                alt="About Me"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary-100 rounded-lg -z-10"></div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I'm a passionate Full Stack Developer with a strong foundation
                in both front-end and back-end technologies. I enjoy creating
                seamless, user-friendly experiences that solve real problems.
              </p>
              <p className="text-gray-600 mb-4">
                With 6+ Months of hands-on experience as a Full Stack Developer
                Intern at Eimples Lab, I played a key role in developing a
                real-time typing application. I worked on building and enhancing
                full-stack features for the Admin Panel using React.js, Node.js,
                Express.js, and MS SQL. My responsibilities included creating
                reusable React components to manage users, organizations, and
                trainers efficiently, as well as designing RESTful APIs for
                authentication, test creation, result tracking, and data
                handling. I also integrated MS SQL for structured data storage
                and implemented role-based access control (RBAC) to ensure
                secure and authorized admin operations.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Briefcase className="w-10 h-10 text-primary-600" />
                </div>
                <h4 className="font-bold">6+ Months</h4>
                <p className="text-sm text-gray-600">Experience</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-10 h-10 text-primary-600" />
                </div>
                <h4 className="font-bold">10+</h4>
                <p className="text-sm text-gray-600">Projects</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="w-10 h-10 text-primary-600" />
                </div>
                <h4 className="font-bold">15+</h4>
                <p className="text-sm text-gray-600">Technologies</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="/SandeepResumeUpdated.pdf "
                target="_blank"
                className="btn btn-primary mt-8 inline-flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
