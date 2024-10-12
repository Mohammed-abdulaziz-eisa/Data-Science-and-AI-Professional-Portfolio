import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactItem: React.FC<{ icon: React.ReactNode; text: string; link: string }> = ({ icon, text, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center mb-2 hover:text-blue-600">
    {icon}
    <span className="ml-2">{text}</span>
  </a>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
      <div className="flex flex-col">
        <ContactItem
          icon={<Mail size={20} />}
          text="mohamed.abdulaziz.eisa@gmail.com"
          link="mailto:mohamed.abdulaziz.eisa@gmail.com"
        />
        <ContactItem
          icon={<Linkedin size={20} />}
          text="LinkedIn Profile"
          link="https://www.linkedin.com/in/mohamedeisa100/"
        />
        <ContactItem
          icon={<Github size={20} />}
          text="GitHub Profile"
          link="https://github.com/Mohammed-abdulaziz-eisa"
        />
      </div>
    </section>
  );
};

export default Contact;