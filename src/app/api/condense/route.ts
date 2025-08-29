import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

export async function POST(req: Request) {
  try {
    const { subunits, unit } = await req.json();

    if (!subunits || !Array.isArray(subunits)) {
      return NextResponse.json({ error: "Subunits array required" }, { status: 400 });
    }

    const condensedSubunits: CondensedSubunit[] = [];

    for (const subunit of subunits) {
      const prompt = `
You are an expert AP Calculus educator and content condenser. Your task is to take raw transcript content and transform it into a comprehensive, well-structured educational resource.

CRITICAL REQUIREMENTS:
1. ALL mathematical expressions, equations, and formulas MUST be formatted in LaTeX using $ for inline math and $$ for display math
2. Preserve ALL mathematical content - do not omit any equations, formulas, or mathematical examples
3. Add supplementary mathematical content where appropriate to enhance understanding
4. Structure the content with clear headings and bullet points
5. Extract key formulas and terms separately

INPUT SUBUNIT:
ID: ${subunit.id}
Title: ${subunit.title}
Content: ${subunit.content}

OUTPUT FORMAT (JSON):
{
  "condensedContent": "Well-structured content with LaTeX formatting",
  "keyFormulas": ["$formula_1$", "$formula_2$", ...],
  "keyTerms": ["term1", "term2", ...]
}

EXAMPLE LaTeX FORMATTING:
- Inline: The derivative of $x^2$ is $2x$
- Display: $$\\lim_{x \\to c} f(x) = L$$
- Fractions: $\\frac{dy}{dx}$
- Powers: $x^{n-1}$
- Roots: $\\sqrt{x^2-1}$

Transform the content into a comprehensive study resource:
`;

      const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are an expert AP educator specializing in creating comprehensive study materials with proper LaTeX formatting." },
          { role: "user", content: prompt },
        ],
        temperature: 0.3,
      });

      const text = completion.choices[0].message?.content;
      if (!text) throw new Error("No content returned from AI");

      const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const result = JSON.parse(cleanText);

      condensedSubunits.push({
        ...subunit,
        condensedContent: result.condensedContent,
        keyFormulas: result.keyFormulas || [],
        keyTerms: result.keyTerms || [],
      });
    }

    return NextResponse.json({ unit, condensedSubunits });
  } catch (err: any) {
    console.error("Condense API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}