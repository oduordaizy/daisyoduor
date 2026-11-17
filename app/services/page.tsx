import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { Layout, Database, Search, ShieldCheck, Zap, Server } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-[10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 blur-[100px] pointer-events-none -z-10"></div>
      
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-brand-text-light dark:text-brand-text-dark mb-4 sm:mb-6">
            Software Engineering <span className="text-gradient">Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-muted-light dark:text-brand-muted-dark">
            Practical web development and software engineering for digital products, from responsive interfaces to backend integrations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
          
          {/* Service 1 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <Layout className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Web Application Development</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              I build responsive web applications and websites with React, Next.js, and TypeScript, shaped around your product and users.
            </p>
          </div>

          {/* Service 2 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <Server className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Backend &amp; API Development</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Application logic and API integrations using tools such as Django and .NET to connect the interface with dependable backend services.
            </p>
          </div>

          {/* Service 3 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <Database className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Database Integration</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Relational data modeling and PostgreSQL integrations for applications that need reliable storage and clear data flows.
            </p>
          </div>

          {/* Service 4 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <Zap className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Frontend Engineering</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Accessible, responsive interfaces with thoughtful component structure, performance, and cross-device behavior.
            </p>
          </div>

          {/* Service 5 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <Search className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Technical SEO</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Semantic page structure, metadata, structured data, and discoverability best practices built into your web project.
            </p>
          </div>

          {/* Service 6 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <ShieldCheck className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Maintenance &amp; Improvements</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Ongoing code improvements, dependency updates, and bug fixes to keep an existing application maintainable and up to date.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center glass-panel p-8 sm:p-10 md:p-12 rounded-3xl border border-brand-border-light dark:border-brand-border-dark">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-light dark:text-brand-text-dark mb-4 sm:mb-6">Need a custom software solution?</h2>
          <p className="text-base sm:text-lg text-brand-muted-light dark:text-brand-muted-dark mb-6 sm:mb-8 max-w-2xl mx-auto">
            Tell me about your product, technical challenge, or project goals and we can discuss a suitable approach.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-primary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base sm:text-lg"
          >
            Discuss a Project
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Services