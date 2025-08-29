"use client";

import { useState } from "react";
import unit1Transcript from "../transcripts_ts/AP_Calculus_BC/unit1";
import unit2Transcript from "../transcripts_ts/AP_Calculus_BC/unit2";
import unit3Transcript from "../transcripts_ts/AP_Calculus_BC/unit3";
import unit4Transcript from "../transcripts_ts/AP_Calculus_BC/unit4";
import unit5Transcript from "../transcripts_ts/AP_Calculus_BC/unit5";
import { BookOpen, Brain, Target, ChevronRight, Loader2, CheckCircle2, Play, User, LogOut, Sparkles, TrendingUp } from "lucide-react";

interface Subunit {
  id: string;
  title: string;
  content: string;
}

interface CondensedSubunit extends Subunit {
  condensedContent: string;
  keyFormulas: string[];
  keyTerms: string[];
}

interface ProcessingStage {
  organize: 'pending' | 'processing' | 'complete';
  condense: 'pending' | 'processing' | 'complete';
  review: 'pending' | 'processing' | 'complete';
}

const SUBJECTS = ["AP Calculus BC"];
const UNITS = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"];

const TRANSCRIPTS: Record<string, string> = {
  "Unit 1": unit1Transcript,
  "Unit 2": unit2Transcript,
  "Unit 3": unit3Transcript,
  "Unit 4": unit4Transcript,
  "Unit 5": unit5Transcript,
};

export default function DashboardPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [subunitsData, setSubunitsData] = useState<Record<string, Subunit[]>>({});
  const [condensedData, setCondensedData] = useState<Record<string, CondensedSubunit[]>>({});
  const [reviewData, setReviewData] = useState<Record<string, string>>({});
  const [processingStages, setProcessingStages] = useState<Record<string, ProcessingStage>>({});

  const initializeProcessingStage = (unit: string) => {
    setProcessingStages(prev => ({
      ...prev,
      [unit]: { organize: 'pending', condense: 'pending', review: 'pending' }
    }));
  };

  const updateProcessingStage = (unit: string, stage: keyof ProcessingStage, status: ProcessingStage[keyof ProcessingStage]) => {
    setProcessingStages(prev => ({
      ...prev,
      [unit]: { ...prev[unit], [stage]: status }
    }));
  };

  async function handleProcessUnit(unit: string) {
    const unitKey = unit.toLowerCase().replace(" ", "");
    
    if (reviewData[unit]) return;

    initializeProcessingStage(unit);

    try {
      // Stage 1: Organize
      if (!subunitsData[unit]) {
        updateProcessingStage(unit, 'organize', 'processing');
        const organizeRes = await fetch("/api/cram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ unit: unitKey, transcript: TRANSCRIPTS[unit] }),
        });
        const organizeData = await organizeRes.json();
        if (organizeData.subunits) {
          setSubunitsData(prev => ({ ...prev, [unit]: organizeData.subunits }));
          updateProcessingStage(unit, 'organize', 'complete');
        }
      } else {
        updateProcessingStage(unit, 'organize', 'complete');
      }

      // Stage 2: Condense
      if (!condensedData[unit]) {
        updateProcessingStage(unit, 'condense', 'processing');
        const condenseRes = await fetch("/api/condense", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ unit: unitKey, subunits: subunitsData[unit] }),
        });
        const condenseResult = await condenseRes.json();
        if (condenseResult.condensedSubunits) {
          setCondensedData(prev => ({ ...prev, [unit]: condenseResult.condensedSubunits }));
          updateProcessingStage(unit, 'condense', 'complete');
        }
      } else {
        updateProcessingStage(unit, 'condense', 'complete');
      }

      // Stage 3: Review
      if (!reviewData[unit]) {
        updateProcessingStage(unit, 'review', 'processing');
        const reviewRes = await fetch("/api/review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ unit: unitKey, condensedSubunits: condensedData[unit] }),
        });
        const reviewResult = await reviewRes.json();
        if (reviewResult.comprehensiveReview) {
          setReviewData(prev => ({ ...prev, [unit]: reviewResult.comprehensiveReview }));
          updateProcessingStage(unit, 'review', 'complete');
        }
      } else {
        updateProcessingStage(unit, 'review', 'complete');
      }
    } catch (err) {
      console.error("Processing error:", err);
    }
  }

  const getStageIcon = (status: ProcessingStage[keyof ProcessingStage]) => {
    switch (status) {
      case 'complete':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'processing':
        return <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />;
      default:
        return <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />;
    }
  };

  const renderProcessingPipeline = (unit: string) => {
    const stages = processingStages[unit];
    if (!stages) return null;

    return (
      <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">AI Processing Pipeline</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
            stages.organize === 'complete' ? 'bg-emerald-50 border-emerald-200' :
            stages.organize === 'processing' ? 'bg-blue-50 border-blue-200' :
            'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              {getStageIcon(stages.organize)}
              <div>
                <div className="font-bold text-gray-900">Organize</div>
                <div className="text-sm text-gray-600">Structure content</div>
              </div>
            </div>
            <div className={`w-full h-2 rounded-full ${
              stages.organize === 'complete' ? 'bg-emerald-200' :
              stages.organize === 'processing' ? 'bg-blue-200' :
              'bg-gray-200'
            }`}>
              <div className={`h-full rounded-full transition-all duration-500 ${
                stages.organize === 'complete' ? 'w-full bg-emerald-500' :
                stages.organize === 'processing' ? 'w-3/4 bg-blue-500' :
                'w-0'
              }`}></div>
            </div>
          </div>

          <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
            stages.condense === 'complete' ? 'bg-emerald-50 border-emerald-200' :
            stages.condense === 'processing' ? 'bg-blue-50 border-blue-200' :
            'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              {getStageIcon(stages.condense)}
              <div>
                <div className="font-bold text-gray-900">Condense</div>
                <div className="text-sm text-gray-600">Extract concepts</div>
              </div>
            </div>
            <div className={`w-full h-2 rounded-full ${
              stages.condense === 'complete' ? 'bg-emerald-200' :
              stages.condense === 'processing' ? 'bg-blue-200' :
              'bg-gray-200'
            }`}>
              <div className={`h-full rounded-full transition-all duration-500 ${
                stages.condense === 'complete' ? 'w-full bg-emerald-500' :
                stages.condense === 'processing' ? 'w-3/4 bg-blue-500' :
                'w-0'
              }`}></div>
            </div>
          </div>

          <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
            stages.review === 'complete' ? 'bg-emerald-50 border-emerald-200' :
            stages.review === 'processing' ? 'bg-blue-50 border-blue-200' :
            'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              {getStageIcon(stages.review)}
              <div>
                <div className="font-bold text-gray-900">Review</div>
                <div className="text-sm text-gray-600">Generate guide</div>
              </div>
            </div>
            <div className={`w-full h-2 rounded-full ${
              stages.review === 'complete' ? 'bg-emerald-200' :
              stages.review === 'processing' ? 'bg-blue-200' :
              'bg-gray-200'
            }`}>
              <div className={`h-full rounded-full transition-all duration-500 ${
                stages.review === 'complete' ? 'w-full bg-emerald-500' :
                stages.review === 'processing' ? 'w-3/4 bg-blue-500' :
                'w-0'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Sidebar */}
      <nav className="w-80 bg-white/90 backdrop-blur-xl shadow-2xl border-r border-gray-200/50 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="text-xl font-black text-gradient mb-1">
            Study Dashboard
          </div>
          <div className="text-sm text-gray-500">
            AI-powered learning
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 p-6 space-y-6">
          <div>
            <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Subjects
            </h2>
            {SUBJECTS.map((subject) => (
              <button
                key={subject}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 shadow-lg hover:shadow-xl ${
                  selectedSubject === subject 
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-glow" 
                    : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
                }`}
                onClick={() => {
                  setSelectedSubject(subject);
                  setSelectedUnit(null);
                }}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-bold">{subject}</span>
                </div>
              </button>
            ))}
          </div>

          {selectedSubject && (
            <div>
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Units
              </h3>
              <div className="space-y-3">
                {UNITS.map((unit) => (
                  <button
                    key={unit}
                    className={`w-full p-4 text-left rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                      selectedUnit === unit 
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-glow" 
                        : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
                    }`}
                    onClick={() => {
                      setSelectedUnit(unit);
                      handleProcessUnit(unit);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Play className="w-4 h-4" />
                        <span className="font-bold">{unit}</span>
                      </div>
                      {reviewData[unit] && (
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Student</div>
                <div className="text-sm text-gray-500">Free Plan</div>
              </div>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {!selectedSubject && (
          <div className="flex items-center justify-center h-full p-8">
            <div className="text-center max-w-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Welcome to Crammable</h2>
              <p className="text-gray-600 leading-relaxed">
                Select a subject from the sidebar to begin your AI-powered learning journey.
              </p>
            </div>
          </div>
        )}
        
        {selectedSubject && !selectedUnit && (
          <div className="flex items-center justify-center h-full p-8">
            <div className="text-center max-w-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-purple">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Choose a Unit</h2>
              <p className="text-gray-600 leading-relaxed">
                Select a unit to start the AI processing pipeline and generate your comprehensive study guide.
              </p>
            </div>
          </div>
        )}

        {selectedUnit && (
          <div className="p-8">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{selectedSubject}</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{selectedUnit}</span>
                </div>
                <h1 className="text-4xl font-black text-gray-900 mb-3">
                  {selectedUnit} Study Guide
                </h1>
                <p className="text-lg text-gray-600">
                  Comprehensive AI-generated review and practice materials
                </p>
              </div>

              {renderProcessingPipeline(selectedUnit)}

              {/* Content Display */}
              {reviewData[selectedUnit] && (
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-600 px-8 py-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-black">Comprehensive Review</h2>
                        <p className="text-emerald-100">AI-generated study guide</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div 
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900"
                      dangerouslySetInnerHTML={{ 
                        __html: reviewData[selectedUnit]
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          .replace(/\n\n/g, '</p><p>')
                          .replace(/^/, '<p>')
                          .replace(/$/, '</p>')
                          .replace(/\$\$(.*?)\$\$/g, '<div class="math-display">$1</div>')
                          .replace(/\$(.*?)\$/g, '<span class="math-inline">$1</span>')
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Condensed Content */}
              {!reviewData[selectedUnit] && condensedData[selectedUnit] && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900">Condensed Content</h2>
                  </div>
                  {condensedData[selectedUnit].map((subunit) => (
                    <div key={subunit.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-4 text-white">
                        <h3 className="text-lg font-bold">
                          {subunit.id} - {subunit.title}
                        </h3>
                      </div>
                      <div className="p-6">
                        <div 
                          className="prose prose-base max-w-none mb-6 prose-headings:text-gray-900 prose-p:text-gray-700"
                          dangerouslySetInnerHTML={{ 
                            __html: subunit.condensedContent
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/\*(.*?)\*/g, '<em>$1</em>')
                              .replace(/\$\$(.*?)\$\$/g, '<div class="math-display">$1</div>')
                              .replace(/\$(.*?)\$/g, '<span class="math-inline">$1</span>')
                          }}
                        />
                        {subunit.keyFormulas.length > 0 && (
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200 shadow-lg">
                            <h4 className="font-black text-blue-900 mb-3 flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              Key Formulas
                            </h4>
                            <div className="grid gap-2">
                              {subunit.keyFormulas.map((formula, idx) => (
                                <div key={idx} className="text-blue-800 font-mono text-sm bg-white px-3 py-2 rounded-lg border border-blue-200">
                                  {formula}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Organized Content */}
              {!condensedData[selectedUnit] && subunitsData[selectedUnit] && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900">Organized Content</h2>
                  </div>
                  {subunitsData[selectedUnit].map((subunit) => (
                    <details key={subunit.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <summary className="bg-gradient-to-r from-emerald-500 to-blue-600 px-6 py-4 font-bold cursor-pointer text-white transition-all duration-300 flex items-center justify-between">
                        <span>{subunit.id} - {subunit.title}</span>
                        <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform duration-300" />
                      </summary>
                      <div className="p-6">
                        <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                          {subunit.content}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}