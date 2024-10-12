import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationItem: React.FC<{ degree: string; institution: string; year: string }> = ({ degree, institution, year }) => (
  <div className="mb-4">
    <div className="flex items-center mb-2">
      <GraduationCap size={20} className="mr-2" />
      <h3 className="text-xl font-semibold">{degree}</h3>
    </div>
    <p>{institution}</p>
    <p className="text-gray-600">{year}</p>
  </div>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <EducationItem
        degree="Master's in Data Science"
        institution="University of Debrecen, Hungary"
        year="Starting February 2025"
      />
      <EducationItem
        degree="B.Sc. in Computer Science and Artificial Intelligence"
        institution="Benha University, Egypt"
        year="Completed"
      />
    </section>
  );
};

export default Education;