import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Zap, GitBranch, Search, Download, Lock, Clock, CheckCircle, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 0, minutes: 0 });

  // Mock countdown timer for beta
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 23;
            days--;
            if (days < 0) {
              clearInterval(timer);
              return { days: 0, hours: 0, minutes: 0 };
            }
          }
        }
        return { days, hours, minutes };
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = () => {
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#0A0F0A] text-[#E5E7E5] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0A0F0A]/90 backdrop-blur-md border-b border-[#1F2F1F] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-[#00D37F]" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>Prompt Theory</a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-[#9CA39C] hover:text-[#E5E7E5] transition">Features</a>
              <a href="#security" className="text-[#9CA39C] hover:text-[#E5E7E5] transition">Security</a>
              <a href="#pricing" className="text-[#9CA39C] hover:text-[#E5E7E5] transition">Pricing</a>
              <button className="bg-[#00D37F] text-[#0A0F0A] px-4 py-2 rounded hover:bg-[#00A865] transition">
                Install Free Extension
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0F1A0F] border-b border-[#1F2F1F]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-[#9CA39C] hover:text-[#E5E7E5]">Features</a>
              <a href="#security" className="block px-3 py-2 text-[#9CA39C] hover:text-[#E5E7E5]">Security</a>
              <a href="#pricing" className="block px-3 py-2 text-[#9CA39C] hover:text-[#E5E7E5]">Pricing</a>
              <button className="w-full text-left bg-[#00D37F] text-[#0A0F0A] px-3 py-2 rounded hover:bg-[#00A865] transition">
                Install Free Extension
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Stop Getting
            <span className="text-[#00D37F] block">Mediocre AI Output</span>
          </h1>
          
          <p className="text-xl text-[#9CA39C] mb-8 max-w-2xl mx-auto">
            You know AI can do better. You've seen it. But you can't remember 
            the exact prompt that made it shine. Now you're back to trial and error. 
            Every. Single. Time.
          </p>

          <p className="text-2xl font-semibold mb-8 text-[#E5E7E5]">
            Time to build your prompt playbook.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#00D37F] text-[#0A0F0A] px-8 py-3 rounded text-lg font-semibold hover:bg-[#00A865] transition flex items-center">
              Install Free Extension
              <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="text-[#00D37F] border border-[#00D37F] px-8 py-3 rounded text-lg hover:bg-[#00D37F] hover:text-[#0A0F0A] transition">
              Watch Demo
            </button>
          </div>

          <p className="mt-8 text-sm text-[#9CA39C]">
            Trusted by 1,000+ engineers, designers, and technical professionals
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1A0F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            The Difference Between Good and Great AI Output? <span className="text-[#00D37F]">Your Prompts.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0A0F0A] p-6 rounded border border-[#1F2F1F]">
              <h3 className="text-[#00D37F] font-semibold mb-4">ENGINEERS</h3>
              <ul className="space-y-2 text-[#9CA39C]">
                <li>• Debug complex systems in one shot</li>
                <li>• Generate production-ready code</li>
                <li>• Write comprehensive test suites</li>
                <li>• Architect solutions that scale</li>
              </ul>
            </div>

            <div className="bg-[#0A0F0A] p-6 rounded border border-[#1F2F1F]">
              <h3 className="text-[#00D37F] font-semibold mb-4">DESIGNERS</h3>
              <ul className="space-y-2 text-[#9CA39C]">
                <li>• Generate pixel-perfect components</li>
                <li>• Create consistent design systems</li>
                <li>• Prototype complex interactions</li>
                <li>• Write compelling UX copy</li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-[#0A0F0A] p-8 rounded border border-[#FFB347]">
            <p className="text-2xl font-semibold mb-2">You've felt the difference:</p>
            <p className="text-xl text-[#9CA39C] mb-4">
              Generic AI response → Exactly what you needed<br />
              Hours of iteration → Nailing it first try<br />
              AI as a toy → AI as a force multiplier
            </p>
            <p className="text-3xl text-[#FFB347] font-bold">The secret? The right prompt.</p>
            <p className="mt-4 text-[#9CA39C]">
              But that game-changing prompt from last week? 
              <span className="text-[#E5E7E5] font-bold"> Gone.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Your Prompts Are the Key to <span className="text-[#00D37F]">10x AI Performance</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Zap className="text-[#00D37F]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Access Anywhere</h3>
                <p className="text-[#9CA39C]">Cmd+Shift+Space in any AI tool. Your entire library. 300ms.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <GitBranch className="text-[#00D37F]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Version Everything</h3>
                <p className="text-[#9CA39C]">Track what worked. Compare outputs. Build on success.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Search className="text-[#00D37F]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Organize by Project & Workflow</h3>
                <p className="text-[#9CA39C]">Frontend. Backend. Design system. Data pipeline. Structure it how you work.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Download className="text-[#00D37F]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Share With Your Team</h3>
                <p className="text-[#9CA39C]">Stop asking "what prompt did you use?" Build collective intelligence.</p>
              </div>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="mt-16 bg-[#0F1A0F] p-8 rounded border border-[#1F2F1F] text-center">
            <div className="bg-[#0A0F0A] h-96 rounded flex items-center justify-center">
              <p className="text-[#9CA39C]">[Extension Screenshot]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1A0F]">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="text-[#00D37F] mx-auto mb-6" size={48} />
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Your Prompts. Your Control.</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#0A0F0A] p-6 rounded border border-[#1F2F1F]">
              <Shield className="text-[#00D37F] mb-4" size={24} />
              <h3 className="font-semibold mb-2">Secure cloud storage</h3>
              <p className="text-[#9CA39C] text-sm">Your prompts encrypted and backed up in the cloud</p>
            </div>

            <div className="bg-[#0A0F0A] p-6 rounded border border-[#1F2F1F]">
              <Lock className="text-[#00D37F] mb-4" size={24} />
              <h3 className="font-semibold mb-2">End-to-end encryption</h3>
              <p className="text-[#9CA39C] text-sm">Military-grade encryption for your intellectual property</p>
            </div>

            <div className="bg-[#0A0F0A] p-6 rounded border border-[#1F2F1F]">
              <Shield className="text-[#00D37F] mb-4" size={24} />
              <h3 className="font-semibold mb-2">SOC 2 compliant</h3>
              <p className="text-[#9CA39C] text-sm">Enterprise-grade security infrastructure</p>
            </div>

            <div className="bg-[#0A0F0A] p-6 rounded border border-[#1F2F1F]">
              <CheckCircle className="text-[#00D37F] mb-4" size={24} />
              <h3 className="font-semibold mb-2">We can't read your prompts</h3>
              <p className="text-[#9CA39C] text-sm">Zero-knowledge architecture. Your privacy guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00D37F]/10 to-[#00A865]/10 p-8 rounded border border-[#00D37F]">
            <h2 className="text-3xl font-bold mb-6 text-center">Early Access Benefits</h2>
            
            <div className="flex justify-center mb-6">
              <div className="flex space-x-6 text-2xl">
                <div className="text-center">
                  <div className="text-[#00D37F] font-bold">{timeLeft.days}</div>
                  <div className="text-sm text-[#9CA39C]">days</div>
                </div>
                <div className="text-center">
                  <div className="text-[#00D37F] font-bold">{timeLeft.hours}</div>
                  <div className="text-sm text-[#9CA39C]">hours</div>
                </div>
                <div className="text-center">
                  <div className="text-[#00D37F] font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm text-[#9CA39C]">mins</div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <CheckCircle className="text-[#00D37F] mx-auto mb-2" size={24} />
                <p>Direct founder access</p>
              </div>
              <div>
                <CheckCircle className="text-[#00D37F] mx-auto mb-2" size={24} />
                <p>Shape the roadmap</p>
              </div>
              <div>
                <CheckCircle className="text-[#00D37F] mx-auto mb-2" size={24} />
                <p>Priority support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1A0F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Pricing for Professionals Who Ship
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="bg-[#0A0F0A] p-8 rounded border border-[#1F2F1F]">
              <h3 className="text-2xl font-bold mb-2">FREE</h3>
              <p className="text-[#9CA39C] mb-6">Forever</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  50 prompts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  3 projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Basic search
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  7-day history
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Cloud sync
                </li>
              </ul>

              <button className="w-full border border-[#00D37F] text-[#00D37F] py-3 rounded hover:bg-[#00D37F] hover:text-[#0A0F0A] transition">
                Start Free
              </button>
            </div>

            {/* Pro Tier */}
            <div className="bg-[#0A0F0A] p-8 rounded border-2 border-[#00D37F] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00D37F] text-[#0A0F0A] px-4 py-1 rounded text-sm font-semibold">
                MOST POPULAR
              </div>
              
              <h3 className="text-2xl font-bold mb-2">PRO</h3>
              <p className="text-[#9CA39C] mb-6">
                $19/month
                <span className="block text-sm">$190/year</span>
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Unlimited prompts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Unlimited projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Advanced search
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Unlimited history
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Cloud sync
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  All AI platforms
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Priority support
                </li>
              </ul>

              <button className="w-full bg-[#00D37F] text-[#0A0F0A] py-3 rounded font-semibold hover:bg-[#00A865] transition">
                Start Free Trial
              </button>
            </div>

            {/* Team Tier */}
            <div className="bg-[#0A0F0A] p-8 rounded border border-[#1F2F1F]">
              <h3 className="text-2xl font-bold mb-2">TEAM</h3>
              <p className="text-[#9CA39C] mb-6">
                $39/user/month
                <span className="block text-sm">$390/user/year</span>
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Everything in Pro
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Shared workspace
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Team analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Admin controls
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  SSO integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Priority support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#00D37F] mr-2 flex-shrink-0" size={16} />
                  Custom integrations
                </li>
              </ul>

              <button className="w-full border border-[#00D37F] text-[#00D37F] py-3 rounded hover:bg-[#00D37F] hover:text-[#0A0F0A] transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The Secret to Consistently Great AI Results
          </h2>
          
          <p className="text-xl text-[#9CA39C] mb-8">
            Great prompts aren't lucky accidents. They're engineered.
          </p>

          <button className="bg-[#00D37F] text-[#0A0F0A] px-8 py-4 rounded text-lg font-semibold hover:bg-[#00A865] transition inline-flex items-center">
            <Clock className="mr-2" size={20} />
            Get Prompt Theory
          </button>
          
          <p className="mt-4 text-sm text-[#9CA39C]">Start engineering better AI output</p>

          <div className="flex justify-center space-x-8 mt-8 text-sm">
            <div className="flex items-center">
              <Lock className="text-[#00D37F] mr-2" size={16} />
              Your data stays yours
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-[#00D37F] mr-2" size={16} />
              30-day money back
            </div>
            <div className="flex items-center">
              <Zap className="text-[#00D37F] mr-2" size={16} />
              Free tier forever
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1A0F] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#1F2F1F]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#00D37F] font-bold text-xl mb-4">Prompt Theory</h3>
              <p className="text-[#9CA39C] mb-4">
                Professional prompt management for people who ship with AI.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#9CA39C] hover:text-[#E5E7E5]">Privacy Policy</a>
                <a href="#" className="text-[#9CA39C] hover:text-[#E5E7E5]">Terms</a>
                <a href="#" className="text-[#9CA39C] hover:text-[#E5E7E5]">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product updates for technical professionals</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-[#0A0F0A] border border-[#1F2F1F] rounded px-4 py-2 focus:outline-none focus:border-[#00D37F]"
                />
                <button 
                  onClick={handleEmailSubmit} 
                  className="bg-[#00D37F] text-[#0A0F0A] px-6 py-2 rounded hover:bg-[#00A865] transition"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-[#9CA39C] mt-2">
                Early feature access. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#1F2F1F] text-center text-sm text-[#9CA39C]">
            © {new Date().getFullYear()} Prompt Theory. Built for builders, by builders.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;