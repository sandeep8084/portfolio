import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

const EducationCard = ({ education, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-1">{education.degree}</h3>
      <h4 className="text-lg font-medium text-primary-600 mb-3">{education.institution}</h4>
      
      <div className="flex items-center text-gray-500 mb-4">
        <CalendarDays className="w-4 h-4 mr-2" />
        <span>{education.startDate} - {education.endDate}</span>
      </div>
      
      <p className="text-gray-600">{education.description}</p>
    </motion.div>
  );
};

export default EducationCard;