import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Social } from '../types/portfolio';
import { Mail, Send } from 'lucide-react';

interface ContactProps {
  email: string;
  socials: Social[];
}

export const Contact = ({ email, socials }: ContactProps) => {
  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Get in Touch</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200/50">
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Mail size={20} className="mr-3" />
                  {email}
                </a>
                <div className="flex space-x-6 mt-6">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-500 transition-colors duration-200"
                    >
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200/50">
              <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center font-medium shadow-lg hover:shadow-xl"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};