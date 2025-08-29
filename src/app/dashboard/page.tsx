"use client";

import { useState, useEffect } from "react";
import unit1Transcript from "../transcripts_ts/AP_Calculus_BC/unit1";
import unit2Transcript from "../transcripts_ts/AP_Calculus_BC/unit2";
import unit3Transcript from "../transcripts_ts/AP_Calculus_BC/unit3";
import unit4Transcript from "../transcripts_ts/AP_Calculus_BC/unit4";
import unit5Transcript from "../transcripts_ts/AP_Calculus_BC/unit5";
import { BookOpen, Brain, Target, ChevronRight, Loader2, CheckCircle2 } from "lucide-react";

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
const UNITS = ["unit1", "unit2", "unit3", "unit4", "unit5"];

const TRANSCRIPTS: Record<string, string> = {
  unit1: unit1Transcript,
  unit2: unit2Transcript,
  unit3: unit3Transcript,
  unit4: unit4Transcript,
  unit5: unit5Transcript,
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
    // Check if we already have this unit fully processed
    if (reviewData[unit]) return;

    initializeProcessingStage(unit);

    try {
      // Stage 1: Organize
      if (!subunitsData[unit]) {
        updateProcessingStage(unit, 'organize', 'processing');
        const organizeRes = await fetch("/api/cram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ unit, transcript: TRANSCRIPTS[unit] }),
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
          body: JSON.stringify({ unit, subunits: subunitsData[unit] }),
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
          body: JSON.stringify({ unit, condensedSubunits: condensedData[unit] }),
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
        return <Loader2 className="w-5 h-5 text-amber-500 animate-spin" />;
      default:
        return <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />;
    }
  };

  const renderProcessingPipeline = (unit: string) => {
    const stages = processingStages[unit];
    if (!stages) return null;

    return (
      <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Processing Pipeline</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {getStageIcon(stages.organize)}
            <span className="text-sm font-medium">Organize</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <div className="flex items-center gap-2">
            {getStageIcon(stages.condense)}
            <span className="text-sm font-medium">Condense</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <div className="flex items-center gap-2">
            {getStageIcon(stages.review)}
            <span className="text-sm font-medium">Review</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Sidebar */}
      <nav className="w-80 bg-white shadow-xl border-r border-amber-100 p-6 flex flex-col gap-6">
        <div className="text-2xl font-bold text-amber-900 mb-4">
          Study Dashboard
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Subjects</h2>
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                selectedSubject === subject 
                  ? "bg-amber-900 text-white shadow-lg" 
                  : "bg-amber-50 hover:bg-amber-100 text-gray-900"
              }`}
              onClick={() => {
                setSelectedSubject(subject);
                setSelectedUnit(null);
              }}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                {subject}
              </div>
            </button>
          ))}
        </div>

        {selectedSubject && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Units</h3>
            <div className="space-y-2">
            {UNITS.map((unit) => (
              <button
                key={unit}
                className={`w-full p-3 text-left rounded-lg transition-all duration-200 ${
                  selectedUnit === unit 
                    ? "bg-amber-100 border-2 border-amber-300 text-amber-900" 
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700 border-2 border-transparent"
                }`}
                onClick={() => {
                  setSelectedUnit(unit);
                  handleProcessUnit(unit);
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{unit.replace("unit", "Unit ")}</span>
                  {reviewData[unit] && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                </div>
              </button>
            ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {!selectedSubject && (
          <div className="max-w-4xl mx-auto text-center py-20">
            <BookOpen className="w-20 h-20 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your Study Dashboard</h2>
            <p className="text-xl text-gray-600">Select a subject to begin your AI-powered learning journey.</p>
          </div>
        )}
        
        {selectedSubject && !selectedUnit && (
          <div className="max-w-4xl mx-auto text-center py-20">
            <Brain className="w-20 h-20 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose a Unit</h2>
            <p className="text-xl text-gray-600">Select a unit to start the AI processing pipeline and generate your comprehensive review.</p>
          </div>
        )}

        {selectedUnit && (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {selectedUnit.replace("unit", "Unit ")} - {selectedSubject}
              </h1>
              <p className="text-lg text-gray-600">
                AI-generated comprehensive review and study guide
              </p>
            </div>

            {renderProcessingPipeline(selectedUnit)}

            {/* Show comprehensive review if available */}
            {reviewData[selectedUnit] && (
              <div className="bg-white rounded-2xl shadow-xl border border-amber-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-amber-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Comprehensive Review</h2>
                </div>
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ 
                    __html: reviewData[selectedUnit].replace(/\$\$(.*?)\$\$/g, '<div class="math-display">$$1$$</div>')
                      .replace(/\$(.*?)\$/g, '<span class="math-inline">$1</span>')
                  }}
                />
              </div>
            )}

            {/* Show condensed subunits if review not ready */}
            {!reviewData[selectedUnit] && condensedData[selectedUnit] && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-6 h-6 text-amber-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Condensed Content</h2>
                </div>
                {condensedData[selectedUnit].map((subunit) => (
                  <div key={subunit.id} className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden">
                    <div className="bg-amber-50 px-6 py-4 border-b border-amber-100">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {subunit.id} - {subunit.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <div 
                        className="prose prose-gray max-w-none mb-4"
                        dangerouslySetInnerHTML={{ 
                          __html: subunit.condensedContent.replace(/\$\$(.*?)\$\$/g, '<div class="math-display">$$1$$</div>')
                            .replace(/\$(.*?)\$/g, '<span class="math-inline">$1</span>')
                        }}
                      />
                      {subunit.keyFormulas.length > 0 && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">Key Formulas:</h4>
                          <div className="space-y-1">
                            {subunit.keyFormulas.map((formula, idx) => (
                              <div key={idx} className="text-blue-800 font-mono text-sm">
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

            {/* Show organized subunits if condensed not ready */}
            {!condensedData[selectedUnit] && subunitsData[selectedUnit] && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Organized Content</h2>
                </div>
                {subunitsData[selectedUnit].map((subunit) => (
                  <details key={subunit.id} className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden">
                    <summary className="bg-amber-50 px-6 py-4 font-semibold cursor-pointer hover:bg-amber-100 transition-colors">
                      {subunit.id} - {subunit.title}
                    </summary>
                    <div className="p-6 whitespace-pre-line text-gray-700 leading-relaxed">
                      {subunit.content}
                    </div>
                  </details>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}