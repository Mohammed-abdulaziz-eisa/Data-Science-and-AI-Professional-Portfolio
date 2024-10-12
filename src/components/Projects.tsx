import React from 'react';
import { Dna, Home, FileText, Users } from 'lucide-react';

const ProjectCard: React.FC<{ title: string; description: string; tools: string[]; icon: React.ReactNode }> = ({ title, description, tools, icon }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <p className="mb-4">{description}</p>
    <div className="flex flex-wrap">
      {tools.map((tool, index) => (
        <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tool}
        </span>
      ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>
      <ProjectCard
        title="Paternity DNA Classifier"
        description="Developed a machine learning-based classifier to determine biological relationships using DNA sequences. Utilized dynamic programming and machine learning algorithms."
        tools={["Python", "pandas", "numpy", "scikit-learn", "MongoDB", "Flask", "Celery", "Docker"]}
        icon={<Dna size={24} className="mr-2" />}
      />
      <ProjectCard
        title="End-to-End Rental Price Prediction"
        description="Built a full pipeline for rental price prediction using a Random Forest model. Developed data preprocessing, model training, and API deployment via Flask and Docker."
        tools={["Python", "pandas", "numpy", "scikit-learn", "MongoDB", "Loguru", "Docker", "Streamlit"]}
        icon={<Home size={24} className="mr-2" />}
      />
      <ProjectCard
        title="Text Classification Model"
        description="Implemented a text classification model to analyze and categorize text data. Designed a data preprocessing pipeline with tokenization, stopword removal, and padding."
        tools={["Python", "TensorFlow", "NLP"]}
        icon={<FileText size={24} className="mr-2" />}
      />
      <ProjectCard
        title="Data Science Workshops"
        description="Led workshops teaching 50+ students the fundamentals of data science, covering Python programming, SQL, data analysis, and machine learning basics."
        tools={["Python", "SQL", "Data Analysis", "Machine Learning"]}
        icon={<Users size={24} className="mr-2" />}
      />
    </section>
  );
};

export default Projects;