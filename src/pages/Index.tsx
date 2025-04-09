
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Server, Shield, Zap, Database, Globe, Users, AlertTriangle, CheckCircle, Lock, Eye, Cpu, Layers, Laptop, Network, Code, ArrowDown, Command } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
            
            <Button variant="cyber" onClick={handleBuyBot}>
              Buy Bot
            </Button>
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
            <ArrowDown className="h-5 w-5 text-cyan-400" />
          </div>
        )}
      </section>

      {/* Spacing between sections */}
      <div className="h-24"></div>

      {/* Gallery Preview Section */}
      <section id="gallery" className="py-36 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-cyan-900/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
              COMMAND CENTER
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              The Ultimate iDRAC Control Interface
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Experience the power of STRIKERNODE iDRAC bot in action through these command examples.
            </p>
          </div>
          
          <div className="mb-16">
            <Tabs defaultValue="all" value={currentTab} onValueChange={setCurrentTab} className="w-full">
              <div className="flex justify-center">
                <TabsList className="bg-slate-800/50 border border-cyan-900/20">
                  <TabsTrigger value="all" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
                    All Commands
                  </TabsTrigger>
                  <TabsTrigger value="controls" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
                    User Management
                  </TabsTrigger>
                  <TabsTrigger value="monitor" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
                    System Operations
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className={`${currentTab === 'all' || currentTab === 'controls' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="bg-slate-900">
                <img 
                  src="/lovable-uploads/11f29bd1-43cf-4783-8308-9ad8b51d28d8.png" 
                  alt="User Management - Remove User" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">User Management</h3>
                <p className="text-sm text-slate-400">!removeuser command to remove members from crew</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'monitor' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="bg-slate-900">
                <img 
                  src="/lovable-uploads/31d57216-1024-434c-9b52-b26724c1c516.png" 
                  alt="Root Access Approval" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">Access Control</h3>
                <p className="text-sm text-slate-400">!approve command to grant root access</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'monitor' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="bg-slate-900">
                <img 
                  src="/lovable-uploads/97accdaf-b8c1-4ed6-bf2a-a08e7f2d9789.png" 
                  alt="Status Update Command" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">Status Updates</h3>
                <p className="text-sm text-slate-400">!setstatus command for channel monitoring</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'controls' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="bg-slate-900">
                <img 
                  src="/lovable-uploads/03d8944c-9b47-4b1b-854d-514a53d302ab.png" 
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
              <AspectRatio ratio={16/9} className="bg-slate-900">
                <img 
                  src="/lovable-uploads/0ab49ac2-54af-4352-8829-139ff5b5fd7f.png" 
                  alt="Commands Matrix" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">Command Matrix</h3>
                <p className="text-sm text-slate-400">Full command reference guide</p>
              </div>
            </div>
            
            <div className={`${currentTab === 'all' || currentTab === 'monitor' ? 'block' : 'hidden'} bg-slate-800 rounded-xl border border-cyan-900/30 overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all transform hover:scale-[1.02]`}>
              <AspectRatio ratio={16/9} className="bg-slate-900">
                <img 
                  src="/lovable-uploads/0c32b658-2d77-40e4-b393-bc51a2a93742.png" 
                  alt="User Management - Add User" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-cyan-300">User Management</h3>
                <p className="text-sm text-slate-400">!adduser command to add new crew members</p>
              </div>
            </div>
          </div>
          
          {/* Interactive Command Carousel */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Interactive Command Examples
            </h3>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="bg-slate-800/70 border border-cyan-900/30 rounded-xl p-6 mx-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-slate-700">
                        <img src="/lovable-uploads/11f29bd1-43cf-4783-8308-9ad8b51d28d8.png" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-cyan-400">Intelstrikerv2</span>
                          <span className="text-xs text-slate-500">12:00</span>
                        </div>
                        <p className="text-white">!removeuser @STRIKER MUSIC</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 border-l-4 border-red-500 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <img src="/lovable-uploads/11f29bd1-43cf-4783-8308-9ad8b51d28d8.png" alt="Bot" className="w-6 h-6 rounded-full" />
                        <span className="font-semibold text-blue-400">IDRAC</span>
                        <span className="bg-blue-600 text-xs px-2 rounded text-white">APP</span>
                        <span className="text-xs text-slate-500">12:00</span>
                      </div>
                      <div className="bg-slate-900 rounded-md p-3 mt-1">
                        <p className="mb-1 text-cyan-300 font-medium">User Management</p>
                        <p className="text-green-400">✅ STRIKER MUSIC removed from the crew!</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                
                <CarouselItem>
                  <div className="bg-slate-800/70 border border-cyan-900/30 rounded-xl p-6 mx-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-slate-700">
                        <img src="/lovable-uploads/31d57216-1024-434c-9b52-b26724c1c516.png" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-cyan-400">Intelstrikerv2</span>
                          <span className="text-xs text-slate-500">05/04/2025, 07:39</span>
                        </div>
                        <p className="text-white">!approve f875622120eebf1f6d00ba0aab8b64ff</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 border-l-4 border-green-500 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <img src="/lovable-uploads/31d57216-1024-434c-9b52-b26724c1c516.png" alt="Bot" className="w-6 h-6 rounded-full" />
                        <span className="font-semibold text-blue-400">IDRAC</span>
                        <span className="bg-blue-600 text-xs px-2 rounded text-white">APP</span>
                        <span className="text-xs text-slate-500">05/04/2025, 07:39</span>
                      </div>
                      <div className="bg-slate-900 rounded-md p-3 mt-1">
                        <p className="text-green-400">✅ Approved root - account created!</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                
                <CarouselItem>
                  <div className="bg-slate-800/70 border border-cyan-900/30 rounded-xl p-6 mx-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-slate-700">
                        <img src="/lovable-uploads/03d8944c-9b47-4b1b-854d-514a53d302ab.png" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-cyan-400">IDRAC</span>
                          <span className="bg-blue-600 text-xs px-2 rounded text-white">APP</span>
                          <span className="text-xs text-slate-500">12:02</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-2 border-l-4 border-blue-500 pl-4">
                      <div className="bg-slate-900 rounded-md p-4 mt-1">
                        <p className="mb-2 text-cyan-300 font-medium">IP Information</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex">
                            <span className="w-24 text-slate-400">IP Address</span>
                            <span className="text-white">192.154.224.10</span>
                          </div>
                          <div className="flex">
                            <span className="w-24 text-slate-400">City</span>
                            <span className="text-white">Dallas</span>
                          </div>
                          <div className="flex">
                            <span className="w-24 text-slate-400">Region</span>
                            <span className="text-white">Texas</span>
                          </div>
                          <div className="flex">
                            <span className="w-24 text-slate-400">Country</span>
                            <span className="text-white">United States</span>
                          </div>
                          <div className="flex">
                            <span className="w-24 text-slate-400">ISP</span>
                            <span className="text-white">AS397423 Tier.Net Technologies LLC</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-6" />
              <CarouselNext className="-right-4 md:-right-6" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Spacing between sections */}
      <div className="h-28"></div>

      {/* Features Section */}
      <section id="features" className="py-40 bg-slate-950 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 bg-cyan-900/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
              ADVANCED CAPABILITIES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              STRIKERNODE iDRAC Features
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Unlock powerful iDRAC management capabilities through our specialized Discord bot interface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
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
                    <AspectRatio ratio={16/9} className="bg-slate-900">
                      <img 
                        src="/lovable-uploads/0ab49ac2-54af-4352-8829-139ff5b5fd7f.png" 
                        alt="Command Matrix" 
                        className="w-full h-full object-contain"
                      />
                    </AspectRatio>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 rounded-lg overflow-hidden border border-cyan-900/30">
                      <AspectRatio ratio={16/9} className="bg-slate-900">
                        <img 
                          src="/lovable-uploads/11f29bd1-43cf-4783-8308-9ad8b51d28d8.png" 
                          alt="User Management" 
                          className="w-full h-full object-contain"
                        />
                      </AspectRatio>
                    </div>
                    <div className="bg-slate-800 rounded-lg overflow-hidden border border-cyan-900/30">
                      <AspectRatio ratio={16/9} className="bg-slate-900">
                        <img 
                          src="/lovable-uploads/03d8944c-9b47-4b1b-854d-514a53d302ab.png" 
                          alt="IP Information" 
                          className="w-full h-full object-contain"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing between sections */}
      <div className="h-28"></div>

      {/* Commands Section */}
      <section id="commands" className="py-40 bg-gradient-to-b from-slate-950 to-slate-900 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 bg-cyan-900/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
              COMMAND INTERFACE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              STRIKERNODE iDRAC Commands
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Access the full power of iDRAC systems through these specialized Discord commands.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-slate-900/70 border border-blue-900/20 rounded-xl p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Command className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Command Operations</h3>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-1 mb-6">
              <p className="text-slate-300">Welcome to the grid, operative. Below is your access panel for executing high-priority commands. Stay sharp.</p>
            </div>
            
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-slate-800">
                  <AccordionTrigger className="text-cyan-300 hover:text-cyan-400">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <Command className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>!help</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pl-11">
                    Displays the complete command matrix with all available operations.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-slate-800">
                  <AccordionTrigger className="text-cyan-300 hover:text-cyan-400">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <Users className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>!adduser &lt;@user&gt;</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pl-11">
                    Recruits a new operative to the system. <span className="text-yellow-400">Admin only command.</span>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b border-slate-800">
                  <AccordionTrigger className="text-cyan-300 hover:text-cyan-400">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <Users className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>!removeuser &lt;@user&gt;</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pl-11">
                    Removes an operative from the system. <span className="text-yellow-400">Admin only command.</span>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b border-slate-800">
                  <AccordionTrigger className="text-cyan-300 hover:text-cyan-400">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <Globe className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>!getips</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pl-11">
                    Extracts the latest IP intel from the network.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border-b border-slate-800">
                  <AccordionTrigger className="text-cyan-300 hover:text-cyan-400">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>!approve &lt;token&gt;</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pl-11">
                    Grants access to a pending login. <span className="text-yellow-400">Admin only command.</span>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border-b border-slate-800">
                  <AccordionTrigger className="text-cyan-300 hover:text-cyan-400">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>!deny &lt;token&gt;</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pl-11">
                    Rejects a login attempt. <span className="text-yellow-400">Admin only command.</span>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="border-b border-slate-800">
                  <AccordionTrigger className="text-cyan-300 hover:text-cyan-400">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <Server className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>!setstatus</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pl-11">
                    Sets the channel where information will be sent. <span className="text-yellow-400">Admin only command.</span>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8" className="border-b border-slate-800">
                  <AccordionTrigger className="text-cyan-300 hover:text-cyan-400">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <Globe className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>!ipinfo &lt;ip&gt;</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pl-11">
                    Sends IP region information in DMs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mt-8 bg-blue-900/20 border border-blue-900/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-cyan-400" />
                <h4 className="font-medium text-cyan-300">OPERATIONS BRIEFING</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-300 pl-4">
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5"></div>
                  <p>Commands are case-sensitive.</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5"></div>
                  <p>Admin commands require elevated privileges.</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5"></div>
                  <p>Use <code>!getips</code> to interface with IP data directly.</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5"></div>
                  <p>Verify login tokens before approving or denying access.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-blue-900/10 to-transparent opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Take Control of Your iDRAC Systems?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Join our Discord community and gain immediate access to the STRIKERNODE iDRAC bot's powerful capabilities.
            </p>
            
            <Button variant="futuristic" size="xl" onClick={handleBuyBot} className="group mx-auto">
              Get STRIKERNODE iDRAC Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Terminal className="h-7 w-7 text-cyan-400 mr-2" />
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                STRIKERNODE iDRAC
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <a href="#features" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Features</a>
              <a href="#commands" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Commands</a>
              <a href="#gallery" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Gallery</a>
              <Button variant="outline" size="sm" onClick={handleBuyBot} className="text-cyan-400 border-cyan-900/50 hover:bg-cyan-900/20">
                Discord
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} STRIKERNODE Systems. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
