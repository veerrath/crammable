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

export async function POST(req: Request) {
  try {
    const { transcript, unit } = await req.json();

    if (!transcript) {
      return NextResponse.json({ error: "Transcript required" }, { status: 400 });
    }

    // Step 1: Extract the subunit list at the top of the transcript
    const listMatch = transcript.match(/LIST OF SUBUNITS[\s\S]*?END OF LIST/);
    if (!listMatch) {
      return NextResponse.json({ error: "No subunit list found" }, { status: 400 });
    }

    const subunitLines: string[] = listMatch[0]
  .split("\n")
  .map((l: string) => l.trim())
  .filter((l: string) => l && !l.startsWith("LIST OF SUBUNITS") && !l.startsWith("END OF LIST"));

const subunits: Subunit[] = subunitLines.map((line: string) => {
  const match = line.match(/^(\d+\.\d+)\s+(.*)$/);
  return match
    ? { id: match[1], title: match[2], content: "" }
    : { id: line, title: line, content: "" };
});


    // Step 2: Remove the subunit list from the transcript body
    const bodyTranscript = transcript.replace(/LIST OF SUBUNITS[\s\S]*?END OF LIST/, "");

    // Step 3: Prepare prompt for GPT-4 Turbo (full transcript)
    const prompt = `
You are a smart transcript organizer AI.

I will give you a transcript and a list of subunits for an AP course unit. 
The transcript covers all subunits sequentially, but there are no explicit markers for subunit changes.
Your job:
1. Split the transcript into the provided subunits intelligently.
2. For each subunit, return JSON with:
   - "id": subunit id
   - "title": subunit title
   - "content": all transcript text relevant to this subunit
3. Remove timestamps
4. Do NOT invent content. Only assign content that is actually present in the transcript.
5. make sure you include ALL equations, formulas, math examples, etc. Do not leave out anything math related.

Return a JSON array like this:

[
  { "id": "1.1", "title": "Title here", "content": "Transcript text..." },
  { "id": "1.2", "title": "Next title", "content": "Transcript text..." }
]

Subunits List:
${JSON.stringify(subunits, null, 2)}

Transcript:
${bodyTranscript}
`;

    // Step 4: Call GPT-4 Turbo
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // cost-effective
      messages: [
        { role: "system", content: "You are a helpful transcript organizer AI." },
        { role: "user", content: prompt },
      ],
      temperature: 0,
    });

    const text = completion.choices[0].message?.content;

    if (!text) throw new Error("No content returned from AI");

    // Step 5: Parse AI output as JSON
    const cleanText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

    const organized: Subunit[] = JSON.parse(cleanText);

    return NextResponse.json({ unit, subunits: organized });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
