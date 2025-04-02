
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Server, Shield, Zap, Database, Globe, Download, Users, AlertTriangle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-blue-900/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              HYPERLINUX iDRAC
            </span>
            <span className="px-1.5 py-0.5 text-xs bg-blue-600 rounded text-white font-semibold">BOT</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Features</a>
            <a href="#commands" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Commands</a>
            <a href="#dashboard" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Dashboard</a>
          </nav>
          <a href="#invite" className="inline-block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Invite Bot
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative min-h-[90vh] flex items-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Terminal className="h-5 w-5 text-white" />
              </div>
              <div className="px-3 py-1 bg-blue-900/50 rounded-full text-blue-300 text-xs font-medium">
                HYPERLINUX SYSTEMS
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Advanced iDRAC</span> 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Intelligence Bot</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              The ultimate Discord bot for discovering, managing, and interacting with Dell iDRAC systems. Scan networks, extract IPs, and gain full access to remote management capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" id="invite">
                Invite to Discord
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-blue-800 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Preview Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-blue-300">Powerful Discord Integration</h2>
              <p className="text-slate-300 mb-6">
                HYPERLINUX iDRAC bot seamlessly integrates with your Discord server, providing a powerful command interface for iDRAC system discovery and interaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-900/20 p-2 rounded mt-1 mr-3">
                    <Terminal className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-200">Command-Based Interface</h3>
                    <p className="text-sm text-slate-400">Execute powerful commands directly from your Discord server.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900/20 p-2 rounded mt-1 mr-3">
                    <Database className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-200">IP Database</h3>
                    <p className="text-sm text-slate-400">Store and access thousands of validated iDRAC IPs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900/20 p-2 rounded mt-1 mr-3">
                    <Globe className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-200">Geolocation Data</h3>
                    <p className="text-sm text-slate-400">View detailed IP information including location and ISP details.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-slate-950 p-4 rounded-xl border border-blue-900/50 shadow-lg shadow-blue-900/10">
              <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/59101c21-20ce-4e2a-bd40-c941eb93f247.png" 
                  alt="HYPERLINUX iDRAC Bot Discord Interface" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              ADVANCED CAPABILITIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful iDRAC Features</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              HYPERLINUX iDRAC bot includes specialized tools designed for discovering and managing Dell iDRAC systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className={`transition-all duration-500 ${activeFeature === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                <div className="flex items-center mb-4">
                  <Server className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">IP Discovery</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Automatically discover and validate iDRAC IPs across networks with powerful scanning algorithms.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Extract valid iDRAC IPs from network ranges
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Validate and test connection capabilities
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Store results in secure database
                  </li>
                </ul>
              </div>
              
              <div className={`transition-all duration-500 ${activeFeature === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">Access Management</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Control who can access your iDRAC systems with advanced user management and permissions.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Role-based access control for commands
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Admin-only restricted operations
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    User activity logging and monitoring
                  </li>
                </ul>
              </div>
              
              <div className={`transition-all duration-500 ${activeFeature === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">Automated Operations</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Execute automated operations across multiple iDRAC systems simultaneously.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Batch operations across multiple systems
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Scheduled scanning and monitoring
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Customizable automation workflows
                  </li>
                </ul>
              </div>
              
              <div className={`transition-all duration-500 ${activeFeature === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">Geolocation Intelligence</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Get detailed information about the geographic location of iDRAC systems.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    IP geolocation with city and country data
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    ISP and network information
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                    Region-based filtering capabilities
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2 bg-slate-900 rounded-xl border border-blue-900/30 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 gap-4 p-4">
                <div className="bg-slate-800 rounded-lg overflow-hidden border border-blue-900/30">
                  <AspectRatio ratio={16/9} className="overflow-hidden">
                    <img 
                      src="/lovable-uploads/90a32cc9-3ca7-4e7e-838c-b73cfd0379a4.png" 
                      alt="iDRAC IP Dashboard" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 rounded-lg overflow-hidden border border-blue-900/30">
                    <AspectRatio ratio={16/9} className="overflow-hidden">
                      <img 
                        src="/lovable-uploads/17bc7347-d23a-476e-9133-702010839a01.png" 
                        alt="iDRAC Status" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <div className="bg-slate-800 rounded-lg overflow-hidden border border-blue-900/30">
                    <AspectRatio ratio={16/9} className="overflow-hidden">
                      <img 
                        src="/lovable-uploads/19f1acc6-cb9e-425e-987f-41b5f464078c.png" 
                        alt="IP Information" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              COMMAND INTERFACE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bot Commands</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore the powerful command set available in the HYPERLINUX iDRAC bot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl shadow-2xl border border-blue-900/30">
              <AspectRatio ratio={1/1.4} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/f408afba-4e6e-417f-bdcd-a09eaa1e7595.png" 
                  alt="iDRAC Command List" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </AspectRatio>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Access the Grid</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600/10 p-2 rounded mr-4 mt-1">
                    <Terminal className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-200">!help</h4>
                    <p className="text-slate-300">Displays the complete command matrix with available options.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600/10 p-2 rounded mr-4 mt-1">
                    <Globe className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-200">!getips</h4>
                    <p className="text-slate-300">Extracts the latest IP intelligence from the network.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600/10 p-2 rounded mr-4 mt-1">
                    <Database className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-200">!ipinfo <span className="text-blue-400">&lt;ip&gt;</span></h4>
                    <p className="text-slate-300">Retrieves detailed information about a specific IP address.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600/10 p-2 rounded mr-4 mt-1">
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-200">!adduser <span className="text-blue-400">&lt;user&gt;</span></h4>
                    <p className="text-slate-300">Recruits a new operative to your team. <span className="text-blue-400 font-semibold">[Admin Only]</span></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600/10 p-2 rounded mr-4 mt-1">
                    <AlertTriangle className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-200">!setstatus</h4>
                    <p className="text-slate-300">Sets the channel where information will be sent. <span className="text-blue-400 font-semibold">[Admin Only]</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
                INTELLIGENCE DASHBOARD
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-time iDRAC Monitoring</h2>
              <p className="text-slate-300 mb-6">
                The HYPERLINUX iDRAC bot continuously monitors the network for valid iDRAC systems and provides real-time status updates directly in your Discord server.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600/10 p-2 rounded mr-4 mt-1">
                    <Database className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-200">Real-time Database</h4>
                    <p className="text-slate-300">Track thousands of discovered iDRAC systems with live status indicators.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600/10 p-2 rounded mr-4 mt-1">
                    <Server className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-200">System Monitoring</h4>
                    <p className="text-slate-300">Receive alerts and notifications about system changes and status updates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-4 rounded-xl border border-blue-900/30 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-800 rounded-lg overflow-hidden border border-blue-900/30">
                  <AspectRatio ratio={16/9} className="overflow-hidden">
                    <img 
                      src="/lovable-uploads/da156771-d20b-4957-85f4-771765653880.png" 
                      alt="Bot Status" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 rounded-lg overflow-hidden border border-blue-900/30">
                    <AspectRatio ratio={1/1} className="overflow-hidden">
                      <img 
                        src="/lovable-uploads/a56f0b41-b27a-4d4d-9c1d-02d623742b49.png" 
                        alt="User Management" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <div className="bg-slate-800 rounded-lg overflow-hidden border border-blue-900/30">
                    <AspectRatio ratio={1/1} className="overflow-hidden">
                      <img 
                        src="/lovable-uploads/a8d003ac-16bb-4f39-bfe6-6cd259980468.png" 
                        alt="Game Panel Status" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Access the Grid?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the network of operatives using HYPERLINUX iDRAC bot for advanced server reconnaissance and control.
          </p>
          <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg">
            <ArrowRight className="mr-2 h-5 w-5" />
            Invite Bot to Discord
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-blue-400" />
              <span className="font-bold text-lg text-white">HYPERLINUX iDRAC</span>
              <span className="px-1.5 py-0.5 text-xs bg-blue-600 rounded text-white font-semibold">BOT</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Discord
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Documentation
              </a>
            </div>
          </div>
          <div className="text-center text-sm">
            <p>Made by IntelStriker | Powering the Grid • {new Date().getFullYear()}</p>
            <p className="mt-2 text-xs text-slate-500">For educational purposes only. Use responsibly and ethically.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
