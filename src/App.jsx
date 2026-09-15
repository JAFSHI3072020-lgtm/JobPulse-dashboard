import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Zap, Users, ShieldCheck } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsOverview from "./components/StatsOverview";
import JobFilters from "./components/JobFilters";
import JobCard from "./components/JobCard";
import JobModal from "./components/JobModal";
import { initialJobs } from "./data/mockJobs";

export default function App() {
  const [jobs] = useState(initialJobs);
  const [search, setSearch] = useState("");
  const [selectedWorkStyle, setSelectedWorkStyle] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobIds, setSavedJobIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem("saved_jobs") || "[]"); } catch { return []; }
  });

  useEffect(() => localStorage.setItem("saved_jobs", JSON.stringify(savedJobIds)), [savedJobIds]);

  const departments = useMemo(() => [...new Set(jobs.map(j => j.department))], [jobs]);
  const filteredJobs = useMemo(() => jobs.filter(job => {
    const q = search.toLowerCase().trim();
    const matchSearch = !q || [job.title, job.company, job.location, ...job.tags].some(v => v.toLowerCase().includes(q));
    return matchSearch &&
      (selectedWorkStyle === "All" || job.workStyle === selectedWorkStyle) &&
      (selectedDepartment === "All Departments" || job.department === selectedDepartment) &&
      (!showSavedOnly || savedJobIds.includes(job.id));
  }), [jobs, search, selectedWorkStyle, selectedDepartment, showSavedOnly, savedJobIds]);

  const resetFilters = () => {
    setSearch(""); setSelectedWorkStyle("All"); setSelectedDepartment("All Departments"); setShowSavedOnly(false);
  };
  const toggleSave = id => setSavedJobIds(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev,id]);

  return (
    <div className="ai-gradient-bg min-h-screen overflow-x-hidden bg-[#07110d] text-white">
      <Header savedCount={savedJobIds.length} showSavedOnly={showSavedOnly} setShowSavedOnly={setShowSavedOnly}/>
      <Hero search={search} setSearch={setSearch} jobCount={filteredJobs.length}/>

      <main id="jobs" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <StatsOverview totalJobs={jobs.length} remoteJobs={jobs.filter(j=>j.workStyle==="Remote").length} savedJobs={savedJobIds.length} filteredCount={filteredJobs.length}/>

        <section className="mt-10">
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="text-[10px] font-black uppercase tracking-[.2em] text-emerald-300">Opportunity board</p><h2 className="mt-1 text-2xl font-black tracking-tight text-white">Latest opportunities</h2></div>
            <p className="text-xs font-semibold text-slate-600">{filteredJobs.length} result{filteredJobs.length===1?"":"s"} found</p>
          </div>
          <JobFilters selectedWorkStyle={selectedWorkStyle} setSelectedWorkStyle={setSelectedWorkStyle} selectedDepartment={selectedDepartment} setSelectedDepartment={setSelectedDepartment} departments={departments} resetFilters={resetFilters}/>
          <div className="mt-5">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length ? (
                <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredJobs.map((job,i)=><JobCard key={job.id} job={job} index={i} onSelect={setSelectedJob} isSaved={savedJobIds.includes(job.id)} onToggleSave={toggleSave}/>)}
                </motion.div>
              ) : (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} className="rounded-3xl border border-white/10 bg-white/[.025] py-20 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white/[.05]"><Zap size={19} className="text-slate-500"/></div>
                  <h3 className="mt-4 font-black text-white">No matching roles</h3>
                  <p className="mt-1 text-xs text-slate-600">Try a different keyword or clear your filters.</p>
                  <button onClick={resetFilters} className="mt-5 text-xs font-black text-emerald-300">Reset everything</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <section id="insights" className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-300/[.10] via-white/[.025] to-cyan-300/[.06] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="text-[10px] font-black uppercase tracking-[.2em] text-emerald-300">Why JobPulse</p><h2 className="mt-2 max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl">A cleaner way to navigate your next career move.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Fast search, focused filters, saved roles, and detailed job views — wrapped in a portfolio-ready interface.</p></div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[[Zap,"Fast"],[Users,"Focused"],[ShieldCheck,"Simple"]].map(([I,t])=><div key={t} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4"><I size={18} className="mx-auto text-emerald-300"/><p className="mt-2 text-[9px] font-black uppercase tracking-widest text-slate-500">{t}</p></div>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[.07] py-7 text-center text-[10px] font-semibold text-slate-600">JOBPULSE © 2026 · BUILT WITH REACT + VITE + TAILWIND</footer>
      <JobModal job={selectedJob} onClose={()=>setSelectedJob(null)} isSaved={selectedJob ? savedJobIds.includes(selectedJob.id):false} onToggleSave={toggleSave}/>
    </div>
  );
}