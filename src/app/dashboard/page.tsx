"use client";

import { useState, useEffect } from "react";
import unit1Transcript from "../transcripts_ts/AP_Calculus_BC/unit1";
import unit2Transcript from "../transcripts_ts/AP_Calculus_BC/unit2";
import unit3Transcript from "../transcripts_ts/AP_Calculus_BC/unit3";
import unit4Transcript from "../transcripts_ts/AP_Calculus_BC/unit4";
import unit5Transcript from "../transcripts_ts/AP_Calculus_BC/unit5";
import { BookOpen, Brain, Target, ChevronRight, Loader2, CheckCircle2, Play, Settings, User } from "lucide-react";

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
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
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
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">AI Processing Pipeline</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getStageIcon(stages.organize)}
            <div>
              <div className="font-medium text-gray-900">Organize</div>
              <div className="text-sm text-gray-500">Structure content by topics</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
          <div className="flex items-center gap-3">
            {getStageIcon(stages.condense)}
            <div>
              <div className="font-medium text-gray-900">Condense</div>
              <div className="text-sm text-gray-500">Extract key concepts</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
          <div className="flex items-center gap-3">
            {getStageIcon(stages.review)}
            <div>
              <div className="font-medium text-gray-900">Review</div>
              <div className="text-sm text-gray-500">Generate study guide</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="w-80 bg-white shadow-sm border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="text-xl font-bold text-gray-900 mb-1">
            Study Dashboard
          </div>
          <div className="text-sm text-gray-500">
            AI-powered learning
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 p-6 space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              Subjects
            </h2>
            {SUBJECTS.map((subject) => (
              <button
                key={subject}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                  selectedSubject === subject 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-gray-50 hover:bg-gray-100 text-gray-900"
                }`}
                onClick={() => {
                  setSelectedSubject(subject);
                  setSelectedUnit(null);
                }}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">{subject}</span>
                </div>
              </button>
            ))}
          </div>

          {selectedSubject && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                Units
              </h3>
              <div className="space-y-2">
                {UNITS.map((unit) => (
                  <button
                    key={unit}
                    className={`w-full p-3 text-left rounded-xl transition-all duration-200 group ${
                      selectedUnit === unit 
                        ? "bg-blue-50 border-2 border-blue-200 text-blue-900" 
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 border-2 border-transparent"
                    }`}
                    onClick={() => {
                      setSelectedUnit(unit);
                      handleProcessUnit(unit);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Play className="w-4 h-4" />
                        <span className="font-medium">{unit}</span>
                      </div>
                      {reviewData[unit] && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center gap-3 text-gray-600">
            <User className="w-5 h-5" />
            <div>
              <div className="font-medium text-gray-900">Student</div>
              <div className="text-sm">Free Plan</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {!selectedSubject && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center max-w-md">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Crammable</h2>
              <p className="text-gray-600 leading-relaxed">
                Select a subject from the sidebar to begin your AI-powered learning journey.
              </p>
            </div>
          </div>
        )}
        
        {selectedSubject && !selectedUnit && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center max-w-md">
              <Brain className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose a Unit</h2>
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
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>{selectedSubject}</span>
                  <ChevronRight className="w-4 h-4" />
                  <span>{selectedUnit}</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  {selectedUnit} Study Guide
                </h1>
                <p className="text-lg text-gray-600">
                  Comprehensive AI-generated review and practice materials
                </p>
              </div>

              {renderProcessingPipeline(selectedUnit)}

              {/* Content Display */}
              {reviewData[selectedUnit] && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-blue-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Comprehensive Review</h2>
                    </div>
                  </div>
                  <div className="p-8">
                    <div 
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-blue"
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
                    <Brain className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Condensed Content</h2>
                  </div>
                  {condensedData[selectedUnit].map((subunit) => (
                    <div key={subunit.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="bg-purple-50 px-6 py-4 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {subunit.id} - {subunit.title}
                        </h3>
                      </div>
                      <div className="p-6">
                        <div 
                          className="prose prose-gray max-w-none mb-6"
                          dangerouslySetInnerHTML={{ 
                            __html: subunit.condensedContent
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/\*(.*?)\*/g, '<em>$1</em>')
                              .replace(/\$\$(.*?)\$\$/g, '<div class="math-display">$1</div>')
                              .replace(/\$(.*?)\$/g, '<span class="math-inline">$1</span>')
                          }}
                        />
                        {subunit.keyFormulas.length > 0 && (
                          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              Key Formulas
                            </h4>
                            <div className="space-y-2">
                              {subunit.keyFormulas.map((formula, idx) => (
                                <div key={idx} className="text-blue-800 font-mono text-sm bg-white px-3 py-2 rounded-lg">
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
                    <BookOpen className="w-6 h-6 text-green-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Organized Content</h2>
                  </div>
                  {subunitsData[selectedUnit].map((subunit) => (
                    <details key={subunit.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                      <summary className="bg-green-50 px-6 py-4 font-semibold cursor-pointer hover:bg-green-100 transition-colors flex items-center justify-between">
                        <span>{subunit.id} - {subunit.title}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
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