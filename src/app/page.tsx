"use client";

import { useRouter } from "next/navigation";
import { BookOpen, Brain, Zap, Target, ArrowRight, CheckCircle } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-3xl font-bold text-amber-900 tracking-tight">
          crammable
        </div>
        <nav className="flex gap-8">
          <button 
            onClick={() => alert("Overview coming soon")}
            className="text-amber-800 hover:text-amber-900 font-medium transition-colors"
          >
            Overview
          </button>
          <button 
            onClick={() => router.push("/signup")}
            className="bg-amber-900 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition-colors font-medium"
          >
            Sign Up
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Master Every
                <span className="text-amber-600 block">AP Subject</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                AI-powered comprehensive reviews that transform YouTube transcripts into 
                structured study guides with practice problems and exam strategies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => router.push("/signup")}
                className="bg-amber-900 text-white px-8 py-4 rounded-xl hover:bg-amber-800 transition-all duration-200 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => router.push("/dashboard")}
                className="border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-xl hover:bg-amber-900 hover:text-white transition-all duration-200 font-semibold text-lg"
              >
                View Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-100">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-amber-100 rounded w-3/4"></div>
                  <div className="h-4 bg-amber-200 rounded w-1/2"></div>
                  <div className="h-6 bg-amber-300 rounded w-5/6"></div>
                  <div className="h-4 bg-amber-100 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Study Pipeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our three-stage AI system transforms raw content into comprehensive study materials
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Organize</h3>
            <p className="text-gray-600 leading-relaxed">
              AI analyzes YouTube transcripts and intelligently organizes content by units and subunits, 
              creating a structured foundation for learning.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Condense</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced AI condenses content, formats equations in LaTeX, extracts key formulas, 
              and adds supplementary material for deeper understanding.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Review</h3>
            <p className="text-gray-600 leading-relaxed">
              Final AI generates comprehensive reviews with practice problems, 
              exam strategies, and connections between concepts.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
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
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
              <div className="space-y-4">
                <Zap className="w-12 h-12 text-amber-600" />
                <h3 className="text-2xl font-bold text-gray-900">Ready to Excel?</h3>
                <p className="text-gray-600">
                  Join thousands of students who have improved their AP scores with our AI-powered study system.
                </p>
                <button 
                  onClick={() => router.push("/signup")}
                  className="bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
                >
                  Start Learning Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}