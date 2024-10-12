import React from 'react';
import { Code, Database, Cloud, Users, BookOpen, MessageSquare } from 'lucide-react';

const SkillCategory: React.FC<{ title: string; skills: string[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold mb-2 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h3>
    <ul className="list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Key Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCategory
          title="Data Science & Analytics"
          skills={["Data preprocessing", "Feature engineering", "Model selection", "Hyperparameter optimization"]}
          icon={<Database size={24} className="mr-2" />}
        />
        <SkillCategory
          title="Machine Learning"
          skills={["Supervised learning", "Unsupervised learning", "Text classification", "Natural Language Processing (NLP)"]}
          icon={<Code size={24} className="mr-2" />}
        />
        <SkillCategory
          title="Python Programming"
          skills={["pandas", "numpy", "scikit-learn", "TensorFlow", "SQLAlchemy"]}
          icon={<Code size={24} className="mr-2" />}
        />
        <SkillCategory
          title="MLOps"
          skills={["Docker", "Flask", "Celery", "MongoDB", "ML pipelines"]}
          icon={<Cloud size={24} className="mr-2" />}
        />
        <SkillCategory
          title="Cloud Technologies"
          skills={["AWS S3", "AWS EC2", "AWS Lambda", "ML model deployment on AWS"]}
          icon={<Cloud size={24} className="mr-2" />}
        />
        <SkillCategory
          title="Leadership & Communication"
          skills={["Team mentoring", "Technical presentations", "Research publication"]}
          icon={<Users size={24} className="mr-2" />}
        />
      </div>
    </section>
  );
};

export default Skills;