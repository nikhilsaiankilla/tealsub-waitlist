import GridBackground from "@/components/grid-background";
import { headingFont, heroFont } from "./layout";
import Waitlist from "@/components/waitlist";

export default function Home() {
  return (
    <main className="min-h-screen text-neutral-900 selection:bg-teal-200">
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 flex flex-col items-center text-center border-b border-neutral-200/60 overflow-hidden">

        {/* THE BACKGROUND GRID  */}
        <GridBackground />

        {/* --- CONTENT (Added relative & z-10 to sit on top) --- */}
        <div className="relative z-10 flex flex-col items-center">

          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-neutral-200 text-xs text-neutral-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Early Access Waitlist
          </div>

          <h1 className={`${heroFont.className} italic max-w-4xl text-4xl md:text-7xl tracking-tight leading-[1.1] mb-3`}>
            Email distribution for <br className="hidden md:block" />
            {/* Added a subtle background highlight to make text readable over grid lines */}
            <span className="italic text-neutral-800 relative inline-block">
              people who write <span className="text-teal-600">.</span>
            </span>
          </h1>

          <p className={`${heroFont.className} text-xl md:text-2xl font-medium mb-4 max-w-2xl  backdrop-blur-sm px-4 rounded-lg`}>
            <span className="line-through decoration-teal-500 decoration-2 text-teal-600">Not for marketers.</span>
          </p>

          <p className={`text-neutral-600 text-sm max-w-lg mx-auto leading-relaxed mb-5 backdrop-blur-md p-2 rounded-xl ${headingFont.className}`}>
            Turn your blog readers into email subscribers and send simple updates without marketing tools.
          </p>

          <div className="w-full max-w-md mx-auto">
            <Waitlist />
            <p className="mt-4 text-xs text-neutral-400">
              Join other indie hackers & writers. Launching at $9/mo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
