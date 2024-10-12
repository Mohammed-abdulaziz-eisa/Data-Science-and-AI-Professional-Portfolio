import React from 'react';
import { Briefcase, Award } from 'lucide-react';

const ExperienceItem: React.FC<{ title: string; company: string; description: string }> = ({ title, company, description }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <Briefcase size={20} className="mr-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="font-medium">{company}</p>
    <p>{description}</p>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
      <ExperienceItem
        title="Data Analyst & Machine Learning Engineer"
        company="Egypt"
        description="Worked on projects in various sectors, from healthcare to real estate, developing data-driven solutions and deploying machine learning models."
      />
      <ExperienceItem
        title="AWS Machine Learning Engineer (Internship)"
        company="Digital Egypt Pioneers"
        description="Gained experience in AWS machine learning services, completed multiple labs, and developed models using AWS Sagemaker."
      />
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Certifications</h3>
        <div className="flex items-center mb-2">
          <Award size={20} className="mr-2" />
          <p>AWS Machine Learning Engineer – Digital Egypt Pioneers Initiative</p>
        </div>
        <div className="flex items-center">
          <Award size={20} className="mr-2" />
          <p>Certified Data Scientist Professional - Epsilon AI</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;