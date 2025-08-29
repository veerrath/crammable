"use client";

import { useRouter } from "next/navigation";
import { BookOpen, Brain, Zap, Target, ArrowRight, CheckCircle, Star, Users, Award } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900 tracking-tight">
              crammable
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => alert("Features coming soon")}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => alert("Pricing coming soon")}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
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
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              AI-Powered Study Revolution
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Master Every
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                AP Subject
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Transform YouTube lectures into comprehensive study guides with AI-powered 
              organization, condensation, and practice problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => router.push("/signup")}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Start Learning Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => router.push("/dashboard")}
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 font-semibold text-lg"
              >
                View Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>15+ AP Subjects</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Three-Stage AI Pipeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI system transforms raw video content into structured, comprehensive study materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Organize</h3>
              <p className="text-gray-600 leading-relaxed">
                AI analyzes YouTube transcripts and intelligently organizes content by units and subunits, 
                creating a structured foundation for learning.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Condense</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced AI condenses content, formats equations in LaTeX, extracts key formulas, 
                and adds supplementary material for deeper understanding.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Target className="w-8 h-8 text-green-600" />
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Why Choose Crammable?
              </h2>
              <div className="space-y-6">
                {[
                  "AI-powered content organization and enhancement",
                  "LaTeX-formatted equations for professional presentation",
                  "Comprehensive practice problems with solutions",
                  "Exam strategies from expert educators",
                  "Structured learning paths for every AP subject"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-100">
              <div className="space-y-6">
                <Zap className="w-12 h-12 text-blue-600" />
                <h3 className="text-3xl font-bold text-gray-900">Ready to Excel?</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Join thousands of students who have improved their AP scores with our AI-powered study system.
                </p>
                <button 
                  onClick={() => router.push("/signup")}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Start Learning Today
                </button>
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
              <div className="text-2xl font-bold">crammable</div>
              <p className="text-gray-400">
                AI-powered study guides for AP success.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>Demo</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Contact</div>
                <div>Privacy</div>
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