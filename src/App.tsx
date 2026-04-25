import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  XOctagon, 
  Layers, 
  Zap, 
  BarChart3, 
  Workflow, 
  Briefcase, 
  Users, 
  Globe 
} from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-8 flex items-center justify-between border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="font-bold text-xl tracking-tight">BOS</span>
        </div>
        <button className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm">
          Get Access
        </button>
      </nav>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
        
        {/* 1. Hero Section */}
        <section className="bg-white p-10 md:p-16 lg:p-24 rounded-2xl border border-slate-200 shadow-[0_1px_3px_0_rgba(15,23,42,0.05)] text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white"></div>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-blue-600 font-semibold tracking-widest text-xs uppercase mb-6">
                The Business Operating System
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
                Out of the chaos. <br className="hidden md:block"/>
                <span className="text-blue-600">Into the clear.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                BOS is the central nervous system for your agency, HR team, or ecommerce brand. One automated logic layer that connects your data, decisions, and people.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center gap-2 group">
                  See how it works 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all border border-slate-200 shadow-sm">
                  Book a demo
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. The Challenge */}
        <section className="bg-white p-10 md:p-16 rounded-2xl border border-slate-200 shadow-[0_1px_3px_0_rgba(15,23,42,0.05)]">
          <FadeIn>
            <div className="max-w-2xl mb-12">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 underline decoration-blue-600 underline-offset-8">
                The Challenge
              </h3>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                The way you work right now is broken.
              </h2>
              <p className="text-lg text-slate-600">
                You don't have a business operating system. You have a fragile web of apps, spreadsheets, and messages held together by stress and manual data entry.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Layers className="w-6 h-6 text-red-500" />,
                title: "Siloed Information",
                desc: "Your data lives in five different apps. No one knows which version is the truth."
              },
              {
                icon: <XOctagon className="w-6 h-6 text-red-500" />,
                title: "Broken Handoffs",
                desc: "Things get lost in Slack threads and email chains. Accountability vanishes."
              },
              {
                icon: <Zap className="w-6 h-6 text-red-500" />,
                title: "Wasted Motion",
                desc: "You spend more time managing work than actually doing the work."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} className="bg-slate-50 rounded-xl p-8 border border-slate-200 flex flex-col items-start shadow-sm">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 3. The Shift */}
        <section className="bg-slate-900 text-white p-10 md:p-16 rounded-2xl shadow-sm">
          <FadeIn>
            <div className="mb-12">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 underline decoration-slate-600 underline-offset-8">
                The Shift
              </h3>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Stop managing chaos.
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl">
                What happens when you stop fighting fires and start running a centralized system.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <FadeIn delay={0.1} className="flex flex-col gap-8">
              {[
                { label: "OLD", title: "Fragmented Chaos", desc: "Guessing what needs to be done next, and searching through multiple apps for one file." },
                { label: "OLD", title: "Broken Updates", desc: "Status updates taking up 30% of meetings due to missing single source of truth." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-mono text-xs font-bold">
                    {item.label}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-col gap-8">
              {[
                { label: "NEW", title: "The Unified Engine", desc: "Absolute clarity on the next action. Everything related in one unified view." },
                { label: "NEW", title: "Automatic Alignment", desc: "Status is obvious without asking. The system scales effortlessly with growth." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 font-mono text-xs font-bold">
                    {item.label}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3}>
            <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10 max-w-3xl">
              <p className="text-sm italic text-slate-300">
                "Our agency went from 40% margin to 65% in 3 months with BOS. It finally gave us a unified view of every client." <br/>— Alex R, Founder
              </p>
            </div>
          </FadeIn>
        </section>

        {/* 4. What BOS Does */}
        <section className="bg-white p-10 md:p-16 rounded-2xl border border-slate-200 shadow-[0_1px_3px_0_rgba(15,23,42,0.05)]">
          <FadeIn>
            <div className="mb-12">
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 underline decoration-blue-600 underline-offset-8">
                Capabilities
              </h3>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                What BOS Does
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                No jargon. No fluff. Just the engine that runs your business across any department.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Briefcase className="w-5 h-5" />, title: "Agencies", desc: "Turns client requests into structured deliverables automatically." },
              { icon: <Users className="w-5 h-5" />, title: "HR Teams", desc: "Automates onboarding, offboarding, and compliance reviews." },
              { icon: <Globe className="w-5 h-5" />, title: "Ecommerce", desc: "Connects inventory alerts to marketing and support." },
              { icon: <Workflow className="w-5 h-5" />, title: "Operations", desc: "Maps standard operating procedures to daily tasks." }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} className="flex flex-col gap-3">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded text-blue-600 flex items-center justify-center mb-2 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 5. How It Works */}
        <section className="bg-white p-10 md:p-16 rounded-2xl border border-slate-200 shadow-[0_1px_3px_0_rgba(15,23,42,0.05)]">
          <FadeIn>
            <div className="mb-12">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 underline decoration-blue-600 underline-offset-8">
                The Process
              </h3>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                How It Works
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                A simple, linear flow that removes friction from getting things done.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "INPUT", desc: "Connect your CRM, Ads, and Slack. Data, requests, and ideas enter the system automatically.", width: "w-1/3" },
              { num: "02", title: "SYSTEM", desc: "Proprietary logic routes input to the right people, mapping SOPs into automated workflows.", width: "w-2/3" },
              { num: "03", title: "OUTPUT", desc: "Work gets done predictably. Dashboards update in real-time. Stakeholders are notified automatically.", width: "w-full" }
            ].map((step, i) => (
              <FadeIn key={i} delay={0.1 * i} className="flex flex-col justify-between h-full">
                <div className="mb-8">
                  <div className="text-blue-600 font-mono text-xl mb-3 font-bold">{step.num}</div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`${step.width} h-full bg-blue-600`}></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 6. Why It Matters & 7. CTA */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          
          <section className="col-span-12 lg:col-span-8 bg-white p-10 md:p-12 rounded-2xl border border-slate-200 shadow-[0_1px_3px_0_rgba(15,23,42,0.05)]">
             <FadeIn>
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 underline decoration-blue-600 underline-offset-8">
                Why It Matters
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { title: "Time", value: "+30%", desc: "More time for deep work. Less time managing work." },
                  { title: "Revenue", value: "Scale", desc: "Take on more clients without doubling your headcount." },
                  { title: "Clarity", value: "100%", desc: "Everyone knows exactly what to do when they log in." },
                  { title: "Control", value: "Total", desc: "A bird's-eye view of your entire business health." }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-1">{stat.title}</div>
                    <div className="text-4xl font-extrabold mb-1">{stat.value}</div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          <section className="col-span-12 lg:col-span-4 bg-blue-600 text-white p-10 md:p-12 rounded-2xl flex flex-col justify-between shadow-sm">
             <FadeIn className="h-full flex flex-col">
              <div className="space-y-4 mb-10 flex-grow">
                <h3 className="text-3xl font-extrabold leading-tight mb-8">
                  Ready to make work obvious?
                </h3>
                <ul className="space-y-4 text-blue-100 font-medium text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div> 
                    Stop fighting the chaos.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div> 
                    Run your business on a single source of truth.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div> 
                    Start your migration today.
                  </li>
                </ul>
              </div>
              <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-sm">
                Get Access
              </button>
            </FadeIn>
          </section>

        </div>

      </main>

      <footer className="w-full border-t border-slate-200 bg-white py-12 px-6 text-center text-sm font-medium text-slate-500">
        <p>© {new Date().getFullYear()} Business Operating System. The obvious choice.</p>
      </footer>
    </div>
  );
}
