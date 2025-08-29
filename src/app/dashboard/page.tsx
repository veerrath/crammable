"use client";

import { useState } from "react";
import unit1Transcript from "../transcripts_ts/AP_Calculus_BC/unit1";
import unit2Transcript from "../transcripts_ts/AP_Calculus_BC/unit2";
import unit3Transcript from "../transcripts_ts/AP_Calculus_BC/unit3";
import unit4Transcript from "../transcripts_ts/AP_Calculus_BC/unit4";
import unit5Transcript from "../transcripts_ts/AP_Calculus_BC/unit5";

interface Subunit {
  id: string;
  title: string;
  content: string;
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
  const [loading, setLoading] = useState(false);
  const [subunitsData, setSubunitsData] = useState<Record<string, Subunit[]>>({});

  async function handleOrganizeUnit(unit: string) {
    // Check if we already have this unit organized
    if (subunitsData[unit]) return;

    setLoading(true);

    try {
      const res = await fetch("/api/cram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unit, transcript: TRANSCRIPTS[unit] }),
      });

      const data = await res.json();
      if (data.subunits) {
        setSubunitsData((prev) => ({ ...prev, [unit]: data.subunits }));
      } else {
        console.error("No subunits returned", data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-[#fdf6f0]">
      {/* Sidebar */}
      <nav className="w-64 bg-[#e0cfc1] p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-4">Subjects</h2>
        {SUBJECTS.map((subject) => (
          <button
            key={subject}
            className={`p-3 rounded-lg text-left ${
              selectedSubject === subject ? "bg-[#b89a87] text-white" : "bg-[#f5ede3]"
            }`}
            onClick={() => {
              setSelectedSubject(subject);
              setSelectedUnit(null);
            }}
          >
            {subject}
          </button>
        ))}

        {/* Unit Buttons */}
        {selectedSubject && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Units</h3>
            {UNITS.map((unit) => (
              <button
                key={unit}
                className={`p-2 w-full text-left rounded-lg mb-1 ${
                  selectedUnit === unit ? "bg-[#b89a87] text-white" : "bg-[#f5ede3]"
                }`}
                onClick={() => {
                  setSelectedUnit(unit);
                  handleOrganizeUnit(unit); // call Organizer AI
                }}
              >
                {unit.replace("unit", "Unit ")}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {!selectedSubject && <p className="text-gray-600">Select a subject to see its units.</p>}
        {selectedSubject && !selectedUnit && <p className="text-gray-600">Select a unit to view subunits.</p>}

        {selectedUnit && (
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-5xl mx-auto prose text-black">
            <h2 className="text-2xl font-bold mb-4">{selectedUnit.replace("unit", "Unit ")}</h2>

            {loading && <p className="text-gray-500">Organizing transcript into subunits...</p>}

            {!loading && subunitsData[selectedUnit] && (
              <div className="flex flex-col gap-4">
                {subunitsData[selectedUnit].map((subunit) => (
                  <details key={subunit.id} className="border rounded-lg p-3">
                    <summary className="font-semibold cursor-pointer">
                      {subunit.id} - {subunit.title}
                    </summary>
                    <div className="mt-2 whitespace-pre-line">{subunit.content}</div>
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
