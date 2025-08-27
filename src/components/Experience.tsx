import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Experience as ExperienceType } from '../types/portfolio';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  experience: ExperienceType[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        </AnimatedSection>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-lg text-gray-700">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end text-gray-600">
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
                <ul className="list-disc list-inside space-y-2 text-gray-600">
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