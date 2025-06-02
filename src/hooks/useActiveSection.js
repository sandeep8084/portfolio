import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          
          if (scrollPosition >= sectionTop) {
            if (activeSection !== sectionIds[i]) {
              setActiveSection(sectionIds[i]);
            }
            break;
          }
        }
      }
      
      if (scrollPosition < offset && activeSection !== sectionIds[0]) {
        setActiveSection(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, activeSection, offset]);

  return activeSection;
}