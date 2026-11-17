'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { Code2, Database, Server, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background Decorators */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-accent/10 dark:bg-brand-accent/10 blur-[120px] pointer-events-none -z-10"></div>
      
      <Navbar />
      
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-16 sm:space-y-24 w-full">
        {/* Intro Section */}
        <section className="text-center space-y-6 sm:space-y-8 animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hey there! I&apos;m <span className="text-gradient">Daisy</span> 👋
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
            I am a <span className="font-semibold text-brand-text-light dark:text-brand-text-dark">software engineer</span> based in Nairobi, Kenya. I build responsive web applications and reliable digital products using modern frontend and backend technologies.
          </p>
        </section>

        {/* Skills & Expertise */}
        <section className="relative">
          <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-primary/10 dark:bg-brand-secondary/20 rounded-full blur-2xl -z-10"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">💡 My Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-brand-muted-light dark:text-brand-muted-dark">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark">
              <div className="w-12 h-12 bg-brand-primary/5 dark:bg-brand-surface-dark rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Code2 className="text-brand-secondary dark:text-brand-accent w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Frontend Engineering</h3>
              <p className="text-sm sm:text-base leading-relaxed">I build responsive, accessible user interfaces with React, Next.js, and TypeScript, with attention to performance and maintainable components.</p>
            </div>
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark">
              <div className="w-12 h-12 bg-brand-primary/5 dark:bg-brand-surface-dark rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Server className="text-brand-secondary dark:text-brand-accent w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Backend &amp; API Development</h3>
              <p className="text-sm sm:text-base leading-relaxed">I develop application logic and API integrations with technologies including Django, .NET, and PostgreSQL to support useful, data-backed products.</p>
            </div>
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark">
              <div className="w-12 h-12 bg-brand-primary/5 dark:bg-brand-surface-dark rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Database className="text-brand-secondary dark:text-brand-accent w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Database-Driven Applications</h3>
              <p className="text-sm sm:text-base leading-relaxed">I work with relational data and application backends to build web experiences that are practical, consistent, and ready to grow.</p>
            </div>
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark">
              <div className="w-12 h-12 bg-brand-primary/5 dark:bg-brand-surface-dark rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Zap className="text-brand-secondary dark:text-brand-accent w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Product Engineering</h3>
              <p className="text-sm sm:text-base leading-relaxed">I collaborate from requirements through delivery, balancing user needs, clear interfaces, and dependable implementation.</p>
            </div>
          </div>
        </section>

        {/* Personal Vibe */}
        <section className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-brand-border-light dark:border-brand-border-dark">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-light dark:text-brand-text-dark">✨ A Bit More About Me</h2>
          <p className="text-base sm:text-lg text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new tools and ideas in software engineering. I value clean design, readable code, and clear communication.
          </p>
          <p className="text-base sm:text-lg text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
            I believe the best digital experiences are built when solid engineering meets a thoughtful understanding of the people using the product.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center pb-6 sm:pb-10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-brand-text-light dark:text-brand-text-dark">Let&apos;s Build Something Useful</h3>
          <p className="text-base sm:text-lg md:text-xl text-brand-muted-light dark:text-brand-muted-dark mb-6 sm:mb-10 max-w-2xl mx-auto">
            Have an application or product idea in mind? I&apos;d love to hear what you&apos;re working on.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-base sm:text-lg"
          >
            Get In Touch
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
