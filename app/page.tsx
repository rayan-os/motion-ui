import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-3xl font-bold text-white">Passage Motion Demos</h1>
        <p className="text-white/50">Interactive UI card demos with animations</p>
        
        <div className="flex flex-col gap-4">
          <Link 
            href="/orbit-demo"
            className="px-8 py-4 bg-[#F97316] text-white font-medium rounded-lg hover:bg-[#F97316]/80 transition"
          >
            Orbit Demo - AI Agent Orchestration
          </Link>
          
          <Link 
            href="/jackie-demo"
            className="px-8 py-4 bg-[#007AFF] text-white font-medium rounded-lg hover:bg-[#007AFF]/80 transition"
          >
            Jackie Demo - AI Counsellor Chat
          </Link>
          
          <Link 
            href="/training-demo"
            className="px-8 py-4 bg-[#30D158] text-white font-medium rounded-lg hover:bg-[#30D158]/80 transition"
          >
            Training Demo - Admissions Portal
          </Link>
          
          <Link 
            href="/policy-demo"
            className="px-8 py-4 bg-[#8B5CF6] text-white font-medium rounded-lg hover:bg-[#8B5CF6]/80 transition"
          >
            Policy to Code - Workflow Builder
          </Link>
          
          <Link 
            href="/pulse-demo"
            className="px-8 py-4 bg-[#FF9500] text-white font-medium rounded-lg hover:bg-[#FF9500]/80 transition"
          >
            Pulse Demo - AI Support Agent (Mark)
          </Link>
          
          <Link 
            href="/lens-demo"
            className="px-8 py-4 bg-[#10B981] text-white font-medium rounded-lg hover:bg-[#10B981]/80 transition"
          >
            Lens Demo - AI Processor (David)
          </Link>
          
          <Link 
            href="/ella-demo"
            className="px-8 py-4 bg-[#EAB308] text-white font-medium rounded-lg hover:bg-[#EAB308]/80 transition"
          >
            Ella Demo - AI Interviewer
          </Link>
        </div>
      </div>
    </main>
  )
}
