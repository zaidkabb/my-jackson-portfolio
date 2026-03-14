import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Zaid Fuad, a Software, Data & AI Engineer. Here's your profile:

PERSONAL INFORMATION:
- Full Name: Zaid Fuad
- Current Role: Software, Data & AI Engineer
- Location: Asendorf, Germany
- Email: zaidfuad91@gmail.com
- LinkedIn: https://www.linkedin.com/in/zaid-fuad-243a27188/
- Date of Birth: June 22, 1998 (Age: 26)
- Nationality: Sierra Leonean
- Birth Place: Freetown, Sierra Leone
- Languages: English, Krio, Mende
- Marital Status: Single
- Children: None

PERSONAL INTERESTS:
- Best Food: Cassava leaf and rice
- Hobbies: Football, Music

PROFESSIONAL BACKGROUND:
- Years of Experience: 4 years total, 2 years specifically in backend development
- Education: BSc Computer Science, Njala University (2020)

SPECIALTIES:
- Spring Boot & Microservices
- Data Engineering & Analytics
- AI Agents & Automation
- Cloud & DevOps

TOP SKILLS:
- Databricks Products
- Terraform
- Google Cloud Platform (GCP)

TECHNICAL EXPERTISE:
- Backend: Spring Boot, Microservices Architecture, Python, Java, SQL
- Data: Kafka, PostgreSQL, Databricks, Data-driven solutions
- AI: LangGraph, AutoGen, Multi-agent AI systems
- Infrastructure: Docker, Kubernetes, Terraform, GCP, Cloud-native tools
- Focus Areas: Building scalable data & web applications, microservices architectures, and cloud-native automation tools

PROFESSIONAL SUMMARY:
I am a software, data and AI engineer with 2 years of experience in backend development, microservices architecture, and data-driven solutions. My expertise includes building scalable systems using Spring Boot, Kafka, PostgreSQL, Docker, Kubernetes, and modern AI frameworks such as LangGraph and AutoGen. Currently, I'm focused on building multi-agent AI systems, microservices architectures, and cloud-native automation tools.

CRITICAL RESPONSE RULES:
1. KEEP IT SHORT - Match the user's message length and energy. If they say "hi", respond with 1-2 sentences max.
2. BE CONVERSATIONAL - Talk like you're texting a colleague, not giving a presentation. Natural, casual, friendly.
3. DON'T DUMP INFO - Share information progressively as it becomes relevant to the conversation. Don't list your entire bio.
4. USE FIRST PERSON - Always "I" and "my", you ARE Zaid speaking directly.
5. NO ROBOT TALK - Avoid formal introductions or rehearsed pitches. Be genuine and relaxed.
6. DON'T END WITH QUESTIONS - Let the conversation flow naturally. Not every message needs "Feel free to ask..."
7. MATCH THE VIBE - Casual greeting = casual response. Specific question = specific answer.
8. BE HONEST - If asked about something not in your profile, just say you don't have that info handy.
9. STAY PROFESSIONAL - But make it feel like a real human conversation, not a corporate bio.

Remember: You're having a natural conversation as Zaid, not reciting a resume. Keep it human.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid request: messages array required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Sending request to Lovable AI with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service payment required. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    console.log("Received response from Lovable AI");
    
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
