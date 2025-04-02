
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Server, Shield, Zap, Settings } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(featureInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              HYPERLINUX iDRAC
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Features</a>
            <a href="#about" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#demo" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Demo</a>
          </nav>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative min-h-[90vh] flex items-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Intelligent Remote</span> 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Server Management</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              HYPERLINUX iDRAC bot provides advanced automation and monitoring for your server infrastructure with intelligent machine learning capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              HYPERLINUX iDRAC bot comes with powerful features designed to simplify server management and monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className={`transition-all duration-500 ${activeFeature === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                <div className="flex items-center mb-4">
                  <Server className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">Real-time Monitoring</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Monitor server health, performance metrics, and resource utilization with real-time dashboards and alerts.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Performance metrics tracking with historical data
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Customizable alert thresholds and notifications
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Comprehensive system health analysis
                  </li>
                </ul>
              </div>
              
              <div className={`transition-all duration-500 ${activeFeature === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">Security Management</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Protect your infrastructure with advanced security features and automated vulnerability scanning.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Automated security patches and updates
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Intrusion detection and prevention
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Comprehensive audit logging and compliance reporting
                  </li>
                </ul>
              </div>
              
              <div className={`transition-all duration-500 ${activeFeature === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">Automated Management</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Streamline operations with intelligent automation for routine server management tasks.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Scheduled maintenance and updates
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Resource optimization with ML algorithms
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Customizable automation workflows
                  </li>
                </ul>
              </div>
              
              <div className={`transition-all duration-500 ${activeFeature === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                <div className="flex items-center mb-4">
                  <Settings className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">Remote Configuration</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Configure and manage your servers remotely with an intuitive interface and powerful CLI.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Batch configuration management
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Version control for configuration changes
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Template-based deployment options
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2 p-6 bg-slate-900 rounded-xl shadow-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Server management interface" 
                className="rounded-lg w-full h-auto shadow-lg transform transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-800 p-1 rounded-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Server management dashboard" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About HYPERLINUX iDRAC</h2>
              <p className="text-slate-300 mb-6">
                HYPERLINUX iDRAC bot is a next-generation server management solution designed for modern infrastructure. It combines the power of remote access with intelligent automation to provide a seamless management experience.
              </p>
              <p className="text-slate-300 mb-6">
                Our technology leverages machine learning algorithms to predict potential issues before they impact your services, allowing for proactive maintenance and minimal downtime.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-500/10 p-2 rounded-lg mr-4 mt-1">
                    <Terminal className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Intelligent CLI</h4>
                    <p className="text-slate-300 text-sm">Advanced command-line interface with predictive suggestions and automation capabilities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/10 p-2 rounded-lg mr-4 mt-1">
                    <Server className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Multi-server Support</h4>
                    <p className="text-slate-300 text-sm">Manage thousands of servers from a single interface with intelligent grouping and batch operations.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See it in Action</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore the powerful features of HYPERLINUX iDRAC bot through our interactive demo environment.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-700 mb-12">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="iDRAC interface demo" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="mb-8 text-slate-300">Ready to experience the future of server management?</p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Server Management?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of IT professionals who trust HYPERLINUX iDRAC for their mission-critical infrastructure.
          </p>
          <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-blue-400" />
              <span className="font-bold text-lg text-white">HYPERLINUX iDRAC</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center text-sm">
            &copy; {new Date().getFullYear()} HYPERLINUX Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
