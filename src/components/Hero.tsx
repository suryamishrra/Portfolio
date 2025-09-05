import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface HeroProps {
  data: PortfolioData;
}

export const Hero = ({ data }: HeroProps) => {
  const socialIcons = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Twitter: Twitter
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative z-10"
        >
          <img
            src={data.avatar}
            alt={data.name}
            className="w-32 h-32 rounded-full mx-auto border-4 border-slate-700/50 shadow-2xl"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-4 relative z-10"
        >
          {data.name}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 relative z-10"
        >
          {data.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto relative z-10"
        >
          {data.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-6 relative z-10"
        >
          {data.socials.map((social, index) => {
            const Icon = socialIcons[social.platform as keyof typeof socialIcons];
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Icon size={24} />
              </a>
            );
          })}
          <a
            href={`mailto:${data.email}`}
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};