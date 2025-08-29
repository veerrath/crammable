"use client";

import { useRouter } from "next/navigation";
import { BookOpen, Brain, Zap, Target, ArrowRight, CheckCircle, Star, Users, Award, Sparkles, TrendingUp } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gradient">
              crammable
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Features
              </button>
              <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Pricing
              </button>
              <button 
                onClick={() => router.push("/signin")}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => router.push("/signup")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-200 shadow-lg">
              <Sparkles className="w-4 h-4" />
              AI-Powered Study Revolution
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-8">
              Master Every
              <span className="text-gradient block">
                AP Subject
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Transform YouTube lectures into comprehensive study guides with AI-powered 
              organization, condensation, and practice problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button 
                onClick={() => router.push("/signup")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-glow hover:scale-105 transition-all duration-300"
              >
                Start Learning Free
                <ArrowRight className="w-6 h-6" />
              </button>
              <button 
                onClick={() => router.push("/dashboard")}
                className="bg-white text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-md">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="font-semibold">10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-md">
                <Award className="w-4 h-4 text-purple-600" />
                <span className="font-semibold">15+ AP Subjects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-md">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-purple-200">
              <Brain className="w-4 h-4" />
              Three-Stage AI Pipeline
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI system transforms raw video content into structured, comprehensive study materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl border border-blue-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Organize</h3>
              <p className="text-gray-600 leading-relaxed">
                AI analyzes YouTube transcripts and intelligently organizes content by units and subunits, 
                creating a structured foundation for learning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-xl border border-purple-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Condense</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced AI condenses content, formats equations in LaTeX, extracts key formulas, 
                and adds supplementary material for deeper understanding.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 shadow-xl border border-emerald-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Review</h3>
              <p className="text-gray-600 leading-relaxed">
                Final AI generates comprehensive reviews with practice problems, 
                exam strategies, and connections between concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
                  <TrendingUp className="w-4 h-4" />
                  Proven Results
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Why Choose Crammable?
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  "AI-powered content organization and enhancement",
                  "LaTeX-formatted equations for professional presentation",
                  "Comprehensive practice problems with solutions",
                  "Exam strategies from expert educators",
                  "Structured learning paths for every AP subject"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-gray-200">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Ready to Excel?</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Join thousands of students who have improved their AP scores with our AI-powered study system.
                  </p>
                  <button 
                    onClick={() => router.push("/signup")}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Start Learning Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gradient">crammable</div>
              <p className="text-gray-400">
                AI-powered study guides for AP success.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">Features</div>
                <div className="hover:text-white transition-colors cursor-pointer">Pricing</div>
                <div className="hover:text-white transition-colors cursor-pointer">Demo</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">About</div>
                <div className="hover:text-white transition-colors cursor-pointer">Blog</div>
                <div className="hover:text-white transition-colors cursor-pointer">Careers</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">Help Center</div>
                <div className="hover:text-white transition-colors cursor-pointer">Contact</div>
                <div className="hover:text-white transition-colors cursor-pointer">Privacy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Crammable. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}