import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Education as EducationType } from '../types/portfolio';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
}

export const Education = ({ education }: EducationProps) => {
  return (
    <section className="py-20 bg-white" id="education">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Education</h2>
        </AnimatedSection>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-200/50 hover:border-slate-300/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <GraduationCap size={24} className="text-blue-500 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                      <p className="text-lg text-slate-600">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-500">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                <div className="ml-9">
                  <p className="text-slate-600 mb-2 font-medium">Grade: {edu.grade}</p>
                  {edu.achievements && (
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};