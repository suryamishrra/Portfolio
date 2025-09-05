import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Experience as ExperienceType } from '../types/portfolio';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  experience: ExperienceType[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section className="py-20 bg-slate-50" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Experience</h2>
        </AnimatedSection>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-200/50 hover:border-slate-300/50">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                    <p className="text-lg text-slate-600">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end text-slate-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin size={16} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};