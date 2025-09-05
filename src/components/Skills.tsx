import { AnimatedSection } from './AnimatedSection';
import { Skill } from '../types/portfolio';
import { motion } from 'framer-motion';

interface SkillsProps {
  skills: Skill[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="py-20 bg-white" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Skills</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="p-6 bg-slate-50 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-200/50 hover:border-slate-300/50">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-slate-800">{skill.name}</h3>
                </div>
                <div className="bg-slate-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full shadow-sm"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <div className="mt-2 text-right text-sm text-slate-600 font-medium">
                  {skill.level}%
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};