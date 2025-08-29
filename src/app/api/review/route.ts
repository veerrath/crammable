import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface CondensedSubunit {
  id: string;
  title: string;
  content: string;
  condensedContent: string;
  keyFormulas: string[];
  keyTerms: string[];
}

export async function POST(req: Request) {
  try {
    const { condensedSubunits, unit } = await req.json();

    if (!condensedSubunits || !Array.isArray(condensedSubunits)) {
      return NextResponse.json({ error: "Condensed subunits array required" }, { status: 400 });
    }

    // Combine all subunit content for comprehensive review
    const allContent = condensedSubunits.map(sub => 
      `## ${sub.id} - ${sub.title}\n${sub.condensedContent}`
    ).join('\n\n');

    const allFormulas = condensedSubunits.flatMap(sub => sub.keyFormulas);
    const allTerms = condensedSubunits.flatMap(sub => sub.keyTerms);

    const prompt = `
You are an expert AP Calculus educator creating a comprehensive unit review. Generate a complete study guide that synthesizes all the content below.

REQUIREMENTS:
1. Create a comprehensive review that flows logically from concept to concept
2. ALL math must be in LaTeX format ($ for inline, $$ for display)
3. Include practice problems with step-by-step solutions
4. Add connections between concepts
5. Include exam tips and common mistakes
6. Structure with clear sections and subsections
7. Add summary sections and key takeaways

UNIT: ${unit}

SUBUNIT CONTENT:
${allContent}

KEY FORMULAS TO INTEGRATE:
${allFormulas.join(', ')}

KEY TERMS TO DEFINE:
${allTerms.join(', ')}

Generate a comprehensive review that would help students master this entire unit. Include:
- Conceptual overview
- Detailed explanations with examples
- Practice problems
- Common mistakes and how to avoid them
- Exam strategies
- Quick reference summary

Format as markdown with proper LaTeX mathematical notation.
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are an expert AP educator creating comprehensive study guides with proper LaTeX formatting and pedagogical structure." },
        { role: "user", content: prompt },
      ],
      temperature: 0.2,
      max_tokens: 4000,
    });

    const comprehensiveReview = completion.choices[0].message?.content;
    if (!comprehensiveReview) throw new Error("No review content generated");

    return NextResponse.json({ 
      unit, 
      comprehensiveReview,
      subunitCount: condensedSubunits.length,
      totalFormulas: allFormulas.length,
      totalTerms: allTerms.length
    });
  } catch (err: any) {
    console.error("Review API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}