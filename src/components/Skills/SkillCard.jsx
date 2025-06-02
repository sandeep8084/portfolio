import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-primary-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
        ></motion.div>
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-sm text-gray-600">{skill.level}%</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
