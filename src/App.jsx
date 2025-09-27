import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Zap, GitBranch, Search, Download, Lock, Clock, CheckCircle, Menu, X, Loader2, AlertCircle } from 'lucide-react';
import { waitlistApi, validateEmail, getErrorMessage } from './services/waitlist';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 0, minutes: 0 });
  const [modalImage, setModalImage] = useState(null);
  const [waitlistStatus, setWaitlistStatus] = useState('idle');
  const [waitlistMessage, setWaitlistMessage] = useState('');
  const [proWaitlistStatus, setProWaitlistStatus] = useState('idle');
  const [proWaitlistMessage, setProWaitlistMessage] = useState('');
  const [teamWaitlistStatus, setTeamWaitlistStatus] = useState('idle');
  const [teamWaitlistMessage, setTeamWaitlistMessage] = useState('');

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

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setWaitlistStatus('loading');
    setWaitlistMessage('');

    // Validate email
    if (!email.trim()) {
      setWaitlistStatus('error');
      setWaitlistMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setWaitlistStatus('error');
      setWaitlistMessage('Please enter a valid email address.');
      return;
    }

    try {
      const result = await waitlistApi.subscribe(email, 'footer');
      setWaitlistStatus('success');
      setWaitlistMessage(result.isNew
        ? "🎉 You're on the waitlist! We'll notify you when premium features launch."
        : "✅ You're already on our waitlist! We'll be in touch soon."
      );
      setEmail('');
    } catch (error) {
      setWaitlistStatus('error');
      setWaitlistMessage(getErrorMessage(error));
    }
  };

  const handleProWaitlist = async () => {
    // Simple prompt for email - we could enhance this with a modal later
    const email = prompt('Enter your email to join the PRO waitlist:');

    if (!email) return;

    if (!validateEmail(email)) {
      setProWaitlistStatus('error');
      setProWaitlistMessage('Please enter a valid email address.');
      setTimeout(() => {
        setProWaitlistStatus('idle');
        setProWaitlistMessage('');
      }, 3000);
      return;
    }

    setProWaitlistStatus('loading');
    setProWaitlistMessage('');

    try {
      const result = await waitlistApi.subscribe(email, 'pro_pricing');
      setProWaitlistStatus('success');
      setProWaitlistMessage(result.isNew
        ? "🎉 You're on the PRO waitlist! We'll notify you when it launches."
        : "✅ You're already on our PRO waitlist! We'll be in touch soon."
      );

      // Reset after 5 seconds
      setTimeout(() => {
        setProWaitlistStatus('idle');
        setProWaitlistMessage('');
      }, 5000);
    } catch (error) {
      setProWaitlistStatus('error');
      setProWaitlistMessage(getErrorMessage(error));

      // Reset after 5 seconds
      setTimeout(() => {
        setProWaitlistStatus('idle');
        setProWaitlistMessage('');
      }, 5000);
    }
  };

  const handleTeamWaitlist = async () => {
    // Simple prompt for email - we could enhance this with a modal later
    const email = prompt('Enter your email to get notified about TEAM features:');

    if (!email) return;

    if (!validateEmail(email)) {
      setTeamWaitlistStatus('error');
      setTeamWaitlistMessage('Please enter a valid email address.');
      setTimeout(() => {
        setTeamWaitlistStatus('idle');
        setTeamWaitlistMessage('');
      }, 3000);
      return;
    }

    setTeamWaitlistStatus('loading');
    setTeamWaitlistMessage('');

    try {
      const result = await waitlistApi.subscribe(email, 'team_pricing');
      setTeamWaitlistStatus('success');
      setTeamWaitlistMessage(result.isNew
        ? "🎉 You'll be notified when TEAM features are available!"
        : "✅ You're already on our TEAM notification list!"
      );

      // Reset after 5 seconds
      setTimeout(() => {
        setTeamWaitlistStatus('idle');
        setTeamWaitlistMessage('');
      }, 5000);
    } catch (error) {
      setTeamWaitlistStatus('error');
      setTeamWaitlistMessage(getErrorMessage(error));

      // Reset after 5 seconds
      setTimeout(() => {
        setTeamWaitlistStatus('idle');
        setTeamWaitlistMessage('');
      }, 5000);
    }
  };

  const openModal = (imageSrc, alt) => {
    setModalImage({ src: imageSrc, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (modalImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [modalImage]);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-[#F5F5F5] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-[#0066FF]" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>Prompt Theory</a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-[#6B7280] hover:text-[#1A1A1A] transition">Features</a>
              <a href="#security" className="text-[#6B7280] hover:text-[#1A1A1A] transition">Security</a>
              <a href="#pricing" className="text-[#6B7280] hover:text-[#1A1A1A] transition">Pricing</a>
              <a
                href="https://chromewebstore.google.com/detail/prompt-theory/cckiiafaifdbfbookaiihfmfkceceoko"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0066FF] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#0052CC] hover:shadow-md transition-all duration-200"
              >
                Install Free Extension
              </a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#F5F5F5]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-[#6B7280] hover:text-[#1A1A1A]">Features</a>
              <a href="#security" className="block px-3 py-2 text-[#6B7280] hover:text-[#1A1A1A]">Security</a>
              <a href="#pricing" className="block px-3 py-2 text-[#6B7280] hover:text-[#1A1A1A]">Pricing</a>
              <a
                href="https://chromewebstore.google.com/detail/prompt-theory/cckiiafaifdbfbookaiihfmfkceceoko"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-[#0066FF] text-white px-3 py-2 rounded-md shadow-sm hover:bg-[#0052CC] hover:shadow-md transition-all duration-200"
              >
                Install Free Extension
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Your Prompts.
            <span className="text-[#0066FF] block">Your Advantage.</span>
          </h1>

          <p className="text-xl text-[#6B7280] mb-8 max-w-2xl mx-auto">
            The people who know how to get the outcomes from these tools are the ones that are gonna make the things that win. Time to become one of them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://chromewebstore.google.com/detail/prompt-theory/cckiiafaifdbfbookaiihfmfkceceoko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#0066FF] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#0052CC] shadow-sm hover:shadow-md transition-all duration-200"
            >
              Install Free Extension - Early Access
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>

          <p className="mt-6 text-lg font-semibold text-[#1A1A1A]">
            🚀 Just launched. Join the first builders.
          </p>

          <div className="mt-12">
            <img 
              src="/images/promotional-small-440x280.png" 
              alt="Prompt Theory Extension Preview" 
              className="mx-auto rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] max-w-md"
            />
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.07)] max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#1A1A1A]">Why Prompt Theory?</h3>

            <div className="text-center mb-6">
              <p className="text-lg italic text-[#6B7280] mb-4">
                "I got tired of losing my best ChatGPT prompts. So I built this. Now I ship 3x faster. You should too."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🔨</span>
                </div>
                <p className="text-sm text-[#6B7280]">Built by a builder who uses AI daily</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🎯</span>
                </div>
                <p className="text-sm text-[#6B7280]">Focused on one thing: making you dangerous with AI</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">💬</span>
                </div>
                <p className="text-sm text-[#6B7280]">Your feature requests considered (I actually read them)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            The Difference Between Good and Great AI Output? <span className="text-[#0066FF]">Your Prompts.</span>
          </h2>

          <div className="text-center bg-white p-8 rounded-lg border-2 border-[#6B46C1] shadow-[0_4px_6px_rgba(107,70,193,0.1)] mb-12">
            <p className="text-2xl font-semibold mb-2">You've felt the difference:</p>
            <p className="text-xl text-[#6B7280] mb-4">
              Generic AI response → Exactly what you needed<br />
              Hours of iteration → Nailing it first try<br />
              AI as a toy → AI as a force multiplier
            </p>
            <p className="text-3xl text-[#6B46C1] font-bold">The secret? The right prompt.</p>
            <p className="mt-4 text-[#6B7280]">
              But that game-changing prompt from last week?
              <span className="text-[#1A1A1A] font-bold"> Gone.</span>
            </p>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            That's why the best engineers and designers build their prompt library:
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] transition-shadow duration-200">
              <h4 className="text-[#0066FF] font-semibold mb-4">ENGINEERS</h4>
              <ul className="space-y-2 text-[#6B7280]">
                <li>• Debug complex systems in one shot</li>
                <li>• Generate production-ready code</li>
                <li>• Write comprehensive test suites</li>
                <li>• Architect solutions that scale</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] transition-shadow duration-200">
              <h4 className="text-[#0066FF] font-semibold mb-4">DESIGNERS</h4>
              <ul className="space-y-2 text-[#6B7280]">
                <li>• Generate pixel-perfect components</li>
                <li>• Create consistent design systems</li>
                <li>• Prototype complex interactions</li>
                <li>• Write compelling UX copy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Your Prompts Are the Key to <span className="text-[#0066FF]">10x AI Performance</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Zap className="text-[#0066FF]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Access Anywhere</h3>
                <p className="text-[#6B7280]">Cmd+Shift+Space in any AI tool. Your entire library. 300ms.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <GitBranch className="text-[#0066FF]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Version Everything</h3>
                <p className="text-[#6B7280]">Track what worked. Compare outputs. Build on success.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Search className="text-[#0066FF]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Organize by Project & Workflow</h3>
                <p className="text-[#6B7280]">Frontend. Backend. Design system. Data pipeline. Structure it how you work.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Search className="text-[#0066FF]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔍 Search Everything</h3>
                <p className="text-[#6B7280]">Find any prompt instantly. Search by name, tag, or content. Never lose that perfect prompt again.</p>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">See Prompt Theory in Action</h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-b from-[#F5F5F5] to-white p-12 rounded-xl">
                <img
                  src="/images/screenshot-1-organization.png"
                  alt="Organize your prompts by project and workflow"
                  className="w-full rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] mb-3 cursor-pointer hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                  onClick={() => openModal('/images/screenshot-1-organization.png', 'Organize your prompts by project and workflow')}
                />
                <h4 className="font-semibold text-[#0066FF] mb-2">Organized by Project</h4>
                <p className="text-[#6B7280] text-sm">Keep prompts structured exactly how you work - by project, workflow, or any system that makes sense to you.</p>
              </div>

              <div className="bg-gradient-to-b from-[#F5F5F5] to-white p-12 rounded-xl">
                <img
                  src="/images/screenshot-2-your-prompts.png"
                  alt="Your complete prompt library at a glance"
                  className="w-full rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] mb-3 cursor-pointer hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                  onClick={() => openModal('/images/screenshot-2-your-prompts.png', 'Your complete prompt library at a glance')}
                />
                <h4 className="font-semibold text-[#0066FF] mb-2">Your Prompt Library</h4>
                <p className="text-[#6B7280] text-sm">Browse your entire collection of prompts with tags, version history, and quick search capabilities.</p>
              </div>

              <div className="bg-gradient-to-b from-[#F5F5F5] to-white p-12 rounded-xl">
                <img
                  src="/images/screenshot-3-quickcopy.png"
                  alt="Quick copy functionality"
                  className="w-full rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] mb-3 cursor-pointer hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                  onClick={() => openModal('/images/screenshot-3-quickcopy.png', 'Quick copy functionality')}
                />
                <h4 className="font-semibold text-[#0066FF] mb-2">One-Click Copy</h4>
                <p className="text-[#6B7280] text-sm">Copy prompts to your clipboard instantly. No more hunting through old conversations or notes.</p>
              </div>
            </div>

            {/* Ready to Start CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-b from-[#F5F5F5] to-white p-12 rounded-xl max-w-md mx-auto">
                <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-3">
                  <ChevronRight className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-[#0066FF] mb-2">Ready to Start?</h4>
                <p className="text-[#6B7280] text-sm mb-4">Install the free extension and build your prompt playbook today.</p>
                <a
                  href="https://chromewebstore.google.com/detail/prompt-theory/cckiiafaifdbfbookaiihfmfkceceoko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0066FF] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#0052CC] shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Install Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="text-[#0066FF] mx-auto mb-6" size={48} />
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Your Prompts. Your Control.</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] transition-shadow duration-200">
              <Shield className="text-[#0066FF] mb-4" size={24} />
              <h3 className="font-semibold mb-2">Your prompts stay yours</h3>
              <p className="text-[#6B7280] text-sm">Complete ownership and control over your prompt library</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] transition-shadow duration-200">
              <Lock className="text-[#0066FF] mb-4" size={24} />
              <h3 className="font-semibold mb-2">Delete anything anytime</h3>
              <p className="text-[#6B7280] text-sm">Full control to remove any prompt or data whenever you want</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] transition-shadow duration-200">
              <CheckCircle className="text-[#0066FF] mb-4" size={24} />
              <h3 className="font-semibold mb-2">No selling your data</h3>
              <p className="text-[#6B7280] text-sm">We make money from subscriptions, not from your information</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] transition-shadow duration-200">
              <Download className="text-[#0066FF] mb-4" size={24} />
              <h3 className="font-semibold mb-2">Simple, transparent storage</h3>
              <p className="text-[#6B7280] text-sm">Clear data practices with no hidden complexity or fine print</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0066FF]/10 to-[#6B46C1]/10 p-8 rounded-lg border-2 border-[#0066FF] shadow-[0_4px_6px_rgba(0,102,255,0.1)]">
            <h2 className="text-3xl font-bold mb-6 text-center">First 100 users get:</h2>
            
            <div className="flex justify-center mb-6">
              <div className="flex space-x-6 text-2xl">
                <div className="text-center">
                  <div className="text-[#0066FF] font-bold">{timeLeft.days}</div>
                  <div className="text-sm text-[#6B7280]">days</div>
                </div>
                <div className="text-center">
                  <div className="text-[#0066FF] font-bold">{timeLeft.hours}</div>
                  <div className="text-sm text-[#6B7280]">hours</div>
                </div>
                <div className="text-center">
                  <div className="text-[#0066FF] font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm text-[#6B7280]">mins</div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <CheckCircle className="text-[#0066FF] mx-auto mb-2" size={24} />
                <p>Direct line to the founder (me)</p>
              </div>
              <div>
                <CheckCircle className="text-[#0066FF] mx-auto mb-2" size={24} />
                <p>Input on the roadmap - I build what helps you ship</p>
              </div>
              <div>
                <CheckCircle className="text-[#0066FF] mx-auto mb-2" size={24} />
                <p>First access to new features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAFAFA] to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Pricing for Professionals Who Ship
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-end">
            {/* Free Tier */}
            <div className="bg-white p-8 rounded-lg border border-[#E5E5E5] shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] transition-shadow duration-200 relative flex flex-col h-full">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#6B46C1] text-white px-4 py-1 rounded text-sm font-semibold shadow-sm">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold mb-2">FREE</h3>
              <p className="text-xl font-semibold text-[#6B46C1] mb-2">Forever</p>
              <p className="text-sm text-[#6B7280] italic mb-6">*(because it's the only one that exists)*</p>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Unlimited prompts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Unlimited projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Basic search
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  30-day history
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Cloud sync
                </li>
              </ul>

              <a
                href="https://chromewebstore.google.com/detail/prompt-theory/cckiiafaifdbfbookaiihfmfkceceoko"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#0066FF] text-white py-3 rounded-md font-semibold hover:bg-[#0052CC] shadow-sm hover:shadow-md transition-all duration-200 text-center"
              >
                Start Free
              </a>
            </div>

            {/* Pro Tier */}
            <div className="bg-[#F0F7FF] p-8 pt-12 pb-12 rounded-lg border-2 border-[#0066FF] shadow-[0_10px_40px_rgba(0,102,255,0.15)] hover:shadow-[0_15px_50px_rgba(0,102,255,0.2)] transition-shadow duration-200 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">PRO</h3>
              <p className="text-xl font-semibold text-[#6B46C1] mb-6">*Coming Soon™*</p>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Everything in Free
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Advanced search
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Unlimited history
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  AI prompt optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Priority support
                </li>
              </ul>

              <button
                onClick={handleProWaitlist}
                disabled={proWaitlistStatus === 'loading'}
                className="w-full bg-white text-[#0066FF] border-2 border-[#0066FF] py-3 rounded-md font-semibold hover:bg-[#0066FF] hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {proWaitlistStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Joining...
                  </>
                ) : proWaitlistStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Joined!
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>

              {/* Status message for PRO waitlist */}
              {proWaitlistMessage && (
                <div className={`mt-3 p-3 rounded-md text-sm flex items-start gap-2 ${
                  proWaitlistStatus === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {proWaitlistStatus === 'success' ? (
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  )}
                  <span>{proWaitlistMessage}</span>
                </div>
              )}
            </div>

            {/* Team Tier */}
            <div className="bg-white p-8 rounded-lg border border-[#E5E5E5] shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] transition-shadow duration-200 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">TEAM</h3>
              <p className="text-xl font-semibold text-[#6B46C1] mb-6">*Coming Later*</p>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Everything in Pro
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Shared workspaces
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Team analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  Admin controls
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#0066FF] mr-2 flex-shrink-0" size={16} />
                  SSO integration
                </li>
              </ul>

              <button
                onClick={handleTeamWaitlist}
                disabled={teamWaitlistStatus === 'loading'}
                className="w-full bg-gray-100 text-[#6B7280] border border-gray-200 py-3 rounded-md font-semibold hover:bg-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {teamWaitlistStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Joining...
                  </>
                ) : teamWaitlistStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  'Get Notified'
                )}
              </button>

              {/* Status message for TEAM waitlist */}
              {teamWaitlistMessage && (
                <div className={`mt-3 p-3 rounded-md text-sm flex items-start gap-2 ${
                  teamWaitlistStatus === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {teamWaitlistStatus === 'success' ? (
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  )}
                  <span>{teamWaitlistMessage}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The Secret to Consistently Great AI Results
          </h2>
          
          <p className="text-xl text-[#6B7280] mb-8">
            Great prompts aren't lucky accidents. They're engineered.
          </p>

          <a
            href="https://chromewebstore.google.com/detail/prompt-theory/cckiiafaifdbfbookaiihfmfkceceoko"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#0066FF] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#0052CC] shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Clock className="mr-2" size={20} />
            Get Prompt Theory
          </a>
          
          <p className="mt-4 text-sm text-[#6B7280]">Start engineering better AI output</p>

          <div className="flex justify-center space-x-8 mt-8 text-sm">
            <div className="flex items-center">
              <Lock className="text-[#0066FF] mr-2" size={16} />
              Your data stays yours
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-[#0066FF] mr-2" size={16} />
              30-day money back
            </div>
            <div className="flex items-center">
              <Zap className="text-[#0066FF] mr-2" size={16} />
              Free tier forever
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#0066FF] font-bold text-xl mb-4">Prompt Theory</h3>
              <p className="text-[#6B7280] mb-4">
                Professional prompt management for people who ship with AI.
              </p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="text-[#6B7280] hover:text-[#1A1A1A]">Privacy Policy</Link>
                <a href="#" className="text-[#6B7280] hover:text-[#1A1A1A]">Terms</a>
                <a href="#" className="text-[#6B7280] hover:text-[#1A1A1A]">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product updates for technical professionals</h4>
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    disabled={waitlistStatus === 'loading' || waitlistStatus === 'success'}
                    className="flex-1 bg-white border border-[#E5E5E5] rounded-md px-4 py-2 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={waitlistStatus === 'loading' || waitlistStatus === 'success'}
                    className="bg-[#0066FF] text-white px-6 py-2 rounded-md hover:bg-[#0052CC] shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {waitlistStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Joining...
                      </>
                    ) : waitlistStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Joined!
                      </>
                    ) : (
                      'Join Waitlist'
                    )}
                  </button>
                </div>

                {waitlistMessage && (
                  <div className={`p-3 rounded-md text-sm flex items-start gap-2 ${
                    waitlistStatus === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {waitlistStatus === 'success' ? (
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    )}
                    <span>{waitlistMessage}</span>
                  </div>
                )}
              </form>
              <p className="text-sm text-[#6B7280] mt-2">
                Early feature access. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#E5E5E5] text-center text-sm text-[#6B7280]">
            © {new Date().getFullYear()} Prompt Theory. Built for builders, by builders.
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg">{modalImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;