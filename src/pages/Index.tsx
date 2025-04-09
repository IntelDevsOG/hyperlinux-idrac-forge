
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Server, Shield, Zap, Database, Globe, Users, AlertTriangle, CheckCircle, Lock, Eye, Cpu, Layers, Laptop, Network } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [currentTab, setCurrentTab] = useState('all');
  
  useEffect(() => {
    setIsLoaded(true);
    
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(featureInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBuyBot = () => {
    window.location.href = "https://discord.gg/YngjxnDC";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-blue-900/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-cyan-400" />
            <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              STRIKERNODE iDRAC
            </span>
            <span className="px-1.5 py-0.5 text-xs bg-cyan-600 rounded text-white font-semibold">BOT</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#features" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#commands" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                    Commands
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#gallery" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                    Gallery
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <button onClick={handleBuyBot} className="bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-2 rounded-md text-white font-medium hover:shadow-lg hover:shadow-cyan-700/20 border border-cyan-500/30 transition-all">
              Buy Bot
            </button>
          </div>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent className="bg-slate-900 border-l border-cyan-900/30">
                <div className="flex flex-col space-y-6 mt-8">
                  <a href="#features" className="text-lg text-slate-300 hover:text-cyan-400 transition-colors">Features</a>
                  <a href="#commands" className="text-lg text-slate-300 hover:text-cyan-400 transition-colors">Commands</a>
                  <a href="#gallery" className="text-lg text-slate-300 hover:text-cyan-400 transition-colors">Gallery</a>
                  <button onClick={handleBuyBot} className="bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-3 rounded-md text-white font-medium hover:shadow-lg hover:shadow-cyan-700/20 border border-cyan-500/30 transition-all mt-4">
                    Buy Bot
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
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
              <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
                <Terminal className="h-5 w-5 text-white" />
              </div>
              <div className="px-3 py-1 bg-cyan-900/50 rounded-full text-cyan-300 text-xs font-medium animate-pulse">
                STRIKERNODE SYSTEMS
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Advanced iDRAC</span> 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Intelligence Bot</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              The ultimate Discord bot for discovering, managing, and interacting with Dell iDRAC systems. Scan networks, extract IPs, and gain full access to remote management capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cyber" size="xl" onClick={handleBuyBot} id="buy-bot" className="group">
                Buy Bot
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-slate-400 text-sm mb-2">Scroll to explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"/>
            </svg>
          </div>
        )}
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-cyan-900/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
              COMMAND CENTER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Ultimate iDRAC Control Interface</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              View a comprehensive gallery of STRIKERNODE iDRAC bot capabilities.
            </p>
          </div>
          
          <div className="mb-8">
            <Tabs defaultValue="all" value={currentTab} onValueChange={setCurrentTab} className="w-full">
              <div className="flex justify-center">
                <TabsList className="bg-slate-800/50 border border-cyan-900/20">
                  <TabsTrigger value="all" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
                    All Screenshots
                  </TabsTrigger>
                  <TabsTrigger value="controls" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
                    Controls
                  </TabsTrigger>
                  <TabsTrigger value="monitor" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
                    Monitoring
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`${currentTab === 'all' || currentTab === 'controls' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/7f056c4f-07de-408a-b1e7-e4eceb3734bb.png" 
                  alt="STRIKERNODE iDRAC Bot IP Dashboard" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">IP Dashboard</h3>
                <p className="text-sm text-slate-400">Comprehensive iDRAC IP database</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'monitor' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/1bc9dbf9-e7f6-47bc-81f6-9d35933e05cf.png" 
                  alt="iDRAC Status Update" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">Status Updates</h3>
                <p className="text-sm text-slate-400">Real-time status notifications</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'monitor' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/e0476fdf-763e-4ead-8b98-f02165584946.png" 
                  alt="iDRAC System Status" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">System Status</h3>
                <p className="text-sm text-slate-400">Database and IP monitoring</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'controls' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/c503d9e3-1f99-4637-9055-5fee2163aab3.png" 
                  alt="IP Information Details" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">IP Intelligence</h3>
                <p className="text-sm text-slate-400">Detailed geolocation and network data</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'controls' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/3b6c067d-5f64-46ca-85bd-25195b9a9cea.png" 
                  alt="IP Info Command" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">IP Lookup</h3>
                <p className="text-sm text-slate-400">Direct IP intelligence commands</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'monitor' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/ad107a68-fa76-4c1a-866b-cffb3018b583.png" 
                  alt="iDRAC Bot Status" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">Bot Status</h3>
                <p className="text-sm text-slate-400">Live operational indicators</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'controls' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/fc9a5f58-ecbc-4d79-b93a-6dbe2e8c39d5.png" 
                  alt="Game Panel" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">Game Panel</h3>
                <p className="text-sm text-slate-400">Integrated system monitoring</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'controls' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/923f9e27-d708-48bb-807d-1e732264960c.png" 
                  alt="iDRAC Command List" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">Command Matrix</h3>
                <p className="text-sm text-slate-400">Full command reference guide</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'monitor' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/80404885-8e92-4a05-83fd-a8621c8b8b83.png" 
                  alt="User Management" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">User Management</h3>
                <p className="text-sm text-slate-400">Admin user control system</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'monitor' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src="/lovable-uploads/37a48ced-c0b9-4f73-868b-21fa7e6a6df1.png" 
                  alt="System Monitoring" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">System Monitoring</h3>
                <p className="text-sm text-slate-400">Real-time performance tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-slate-950 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-cyan-900/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
              ADVANCED CAPABILITIES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Powerful iDRAC Features</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              STRIKERNODE iDRAC bot includes specialized tools designed for discovering and managing Dell iDRAC systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[400px]">
              <div className={`absolute transition-all duration-500 ${activeFeature === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Server className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">IP Discovery</h3>
                </div>
                <p className="text-slate-300 mb-6">
                  Automatically discover and validate iDRAC IPs across networks with powerful scanning algorithms.
                </p>
                <ul className="space-y-6 text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Network Range Scanning</h4>
                      <p className="text-slate-400">Extract valid iDRAC IPs from defined network ranges with high precision</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Connection Validation</h4>
                      <p className="text-slate-400">Test and verify connectivity to each discovered iDRAC system</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Secure Database Storage</h4>
                      <p className="text-slate-400">Store validated IPs in an encrypted, searchable database</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className={`absolute transition-all duration-500 ${activeFeature === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Access Management</h3>
                </div>
                <p className="text-slate-300 mb-6">
                  Control who can access your iDRAC systems with advanced user management and permissions.
                </p>
                <ul className="space-y-6 text-slate-300">
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Role-Based Access</h4>
                      <p className="text-slate-400">Configure granular permissions based on user roles within Discord</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Admin Controls</h4>
                      <p className="text-slate-400">Special commands and capabilities exclusive to server administrators</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Activity Monitoring</h4>
                      <p className="text-slate-400">Track all user interactions with the bot and iDRAC systems</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className={`absolute transition-all duration-500 ${activeFeature === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Automated Operations</h3>
                </div>
                <p className="text-slate-300 mb-6">
                  Execute automated operations across multiple iDRAC systems simultaneously.
                </p>
                <ul className="space-y-6 text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Batch Processing</h4>
                      <p className="text-slate-400">Run commands across multiple systems with a single instruction</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Scheduled Tasks</h4>
                      <p className="text-slate-400">Configure automated scanning and monitoring at specific intervals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Custom Workflows</h4>
                      <p className="text-slate-400">Create personalized automation sequences for complex operations</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className={`absolute transition-all duration-500 ${activeFeature === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Geolocation Intelligence</h3>
                </div>
                <p className="text-slate-300 mb-6">
                  Get detailed information about the geographic location of iDRAC systems.
                </p>
                <ul className="space-y-6 text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Precise Location Data</h4>
                      <p className="text-slate-400">View city, region, and country information for any iDRAC IP</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Network Attribution</h4>
                      <p className="text-slate-400">Identify ISP and network details associated with each system</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-200">Geographic Filtering</h4>
                      <p className="text-slate-400">Target operations to specific regions or countries</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2 bg-slate-900 rounded-xl border border-cyan-900/30 shadow-xl overflow-hidden relative">
              <div className="absolute top-3 left-3 flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-8 p-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-slate-800 rounded-lg overflow-hidden border border-cyan-900/30">
                    <AspectRatio ratio={16/9} className="overflow-hidden">
                      <img 
                        src="/lovable-uploads/90a32cc9-3ca7-4e7e-838c-b73cfd0379a4.png" 
                        alt="iDRAC IP Dashboard" 
                        className="w-full h-full object-contain"
                      />
                    </AspectRatio>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 rounded-lg overflow-hidden border border-cyan-900/30">
                      <AspectRatio ratio={16/9} className="overflow-hidden">
                        <img 
                          src="/lovable-uploads/17bc7347-d23a-476e-9133-702010839a01.png" 
                          alt="iDRAC Status" 
                          className="w-full h-full object-contain"
                        />
                      </AspectRatio>
                    </div>
                    <div className="bg-slate-800 rounded-lg overflow-hidden border border-cyan-900/30">
                      <AspectRatio ratio={16/9} className="overflow-hidden">
                        <img 
                          src="/lovable-uploads/19f1acc6-cb9e-425e-987f-41b5f464078c.png" 
                          alt="IP Information" 
                          className="w-full h-full object-contain"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 justify-center mt-6">
                  {[0, 1, 2, 3].map((i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFeature(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${activeFeature === i ? 'bg-cyan-400' : 'bg-slate-600'}`}
                      aria-label={`View feature ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-cyan-900/30 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/10">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">System Detection</h3>
                <p className="text-slate-400">
                  Automatically identify and catalog iDRAC systems across multiple network ranges with precision targeting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-cyan-900/30 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/10">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Multi-Layer Security</h3>
                <p className="text-slate-400">
                  Enterprise-grade encryption and user authentication ensures only authorized personnel can access sensitive systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-cyan-900/30 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/10">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Global Reach</h3>
                <p className="text-slate-400">
                  Access and manage iDRAC systems worldwide with comprehensive geolocation data and network intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commands Section with increased separation */}
      <section id="commands" className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500 to-transparent"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-cyan-900/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
              COMMAND INTERFACE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Bot Commands</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore the powerful command set available in the STRIKERNODE iDRAC bot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-slate-800 p-8 rounded-xl shadow-2xl border border-cyan-900/30 group hover:shadow-cyan-900/20 hover:shadow-lg transition-all relative transform hover:scale-[1.02]">
              <div className="absolute top-3 left-3 flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-6">
                <div className="bg-slate-900/50 px-4 py-2 rounded mb-4 flex items-center">
                  <Terminal className="h-4 w-4 text-cyan-400 mr-2" />
                  <span className="text-xs text-slate-400">terminal@strikernode:~$</span>
                </div>
                <AspectRatio ratio={1/1.2} className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/923f9e27-d708-48bb-807d-1e732264960c.png" 
                    alt="iDRAC Command List" 
                    className="w-full h-full object-contain border border-slate-700/50 rounded"
                  />
                </AspectRatio>
                <div className="mt-4 flex justify-center">
                  <span className="px-3 py-1 bg-cyan-900/20 rounded-md text-cyan-400 text-xs">
                    Command documentation v1.2.4
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Access the Grid</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-cyan-900/20">
                  <AccordionTrigger className="hover:text-cyan-400 py-6">
                    <div className="flex items-center">
                      <div className="bg-cyan-600/10 p-2 rounded mr-4 flex-shrink-0">
                        <Terminal className="h-5 w-5 text-cyan-400" />
                      </div>
                      <span className="text-lg font-medium">!help</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-16">
                    <p className="text-slate-300">Displays the complete command matrix with available options and detailed usage instructions.</p>
                    <div className="mt-3 flex items-center">
                      <span className="text-xs bg-cyan-900/20 text-cyan-400 px-2 py-1 rounded-sm">User Permission</span>
                      <span className="text-xs text-slate-400 ml-2">Available to all users</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-cyan-900/20">
                  <AccordionTrigger className="hover:text-cyan-400 py-6">
                    <div className="flex items-center">
                      <div className="bg-cyan-600/10 p-2 rounded mr-4 flex-shrink-0">
                        <Globe className="h-5 w-5 text-cyan-400" />
                      </div>
                      <span className="text-lg font-medium">!getips</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-16">
                    <p className="text-slate-300">Extracts the latest IP intelligence from the network and adds new discoveries to the database.</p>
                    <div className="mt-3 flex items-center">
                      <span className="text-xs bg-cyan-900/20 text-cyan-400 px-2 py-1 rounded-sm">User Permission</span>
                      <span className="text-xs text-slate-400 ml-2">Standard users and above</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-cyan-900/20">
                  <AccordionTrigger className="hover:text-cyan-400 py-6">
                    <div className="flex items-center">
                      <div className="bg-cyan-600/10 p-2 rounded mr-4 flex-shrink-0">
                        <Database className="h-5 w-5 text-cyan-400" />
                      </div>
                      <span className="text-lg font-medium">!ipinfo <span className="text-cyan-400 font-light">&lt;ip&gt;</span></span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-16">
                    <p className="text-slate-300">Retrieves detailed information about a specific IP address including location, ISP, and system details.</p>
                    <div className="mt-3 flex items-center">
                      <span className="text-xs bg-cyan-900/20 text-cyan-400 px-2 py-1 rounded-sm">User Permission</span>
                      <span className="text-xs text-slate-400 ml-2">Standard users and above</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-cyan-900/20">
                  <AccordionTrigger className="hover:text-cyan-400 py-6">
                    <div className="flex items-center">
                      <div className="bg-cyan-600/10 p-2 rounded mr-4 flex-shrink-0">
                        <Users className="h-5 w-5 text-cyan-400" />
                      </div>
                      <span className="text-lg font-medium">!adduser <span className="text-cyan-400 font-light">&lt;user&gt;</span></span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-16">
                    <p className="text-slate-300">Recruits a new operative to your team with configurable permission levels.</p>
                    <div className="mt-3 flex items-center">
                      <span className="text-xs bg-red-900/20 text-red-400 px-2 py-1 rounded-sm">Admin Only</span>
                      <span className="text-xs text-slate-400 ml-2">Restricted command</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border-cyan-900/20">
                  <AccordionTrigger className="hover:text-cyan-400 py-6">
                    <div className="flex items-center">
                      <div className="bg-cyan-600/10 p-2 rounded mr-4 flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-cyan-400" />
                      </div>
                      <span className="text-lg font-medium">!setstatus</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-16">
                    <p className="text-slate-300">Sets the channel where system alerts and information updates will be sent.</p>
                    <div className="mt-3 flex items-center">
                      <span className="text-xs bg-red-900/20 text-red-400 px-2 py-1 rounded-sm">Admin Only</span>
                      <span className="text-xs text-slate-400 ml-2">Restricted command</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-8">
                <Button variant="cyber" onClick={handleBuyBot} className="group">
                  <span>Access Full Command List</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Access the Grid?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join the network of operatives using STRIKERNODE iDRAC bot for advanced server reconnaissance and control.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="cyber" size="xl" onClick={handleBuyBot} className="group">
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Buy Bot Now
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-medium text-white mb-1">Limited Licenses</h3>
              <p className="text-sm text-blue-100/80">Only a select number of licenses are available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-medium text-white mb-1">Secure Access</h3>
              <p className="text-sm text-blue-100/80">End-to-end encryption for all operations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-medium text-white mb-1">24/7 Support</h3>
              <p className="text-sm text-blue-100/80">Dedicated assistance for all users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Terminal className="h-5 w-5 text-cyan-400" />
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">STRIKERNODE iDRAC</span>
              <span className="px-1.5 py-0.5 text-xs bg-cyan-600 rounded text-white font-semibold">BOT</span>
            </div>
            <div className="flex space-x-8">
              <a href="https://discord.gg/YngjxnDC" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Discord
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Support
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-white font-medium mb-4">About</h4>
                <p className="text-sm text-slate-500">STRIKERNODE iDRAC Bot is a specialized tool designed for server administrators and security researchers to discover and manage Dell iDRAC systems securely.</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Acceptable Use</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-slate-500">Discord: <a href="https://discord.gg/YngjxnDC" className="text-cyan-400 hover:underline">Join Server</a></li>
                  <li className="text-slate-500">Email: support@strikernode.com</li>
                </ul>
              </div>
            </div>
            
            <Separator className="bg-slate-800 my-6" />
            
            <div className="text-center text-sm">
              <p>Made by StrikerNode | Powering the Grid • {new Date().getFullYear()}</p>
              <p className="mt-2 text-xs text-slate-600">For educational purposes only. Use responsibly and ethically.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
