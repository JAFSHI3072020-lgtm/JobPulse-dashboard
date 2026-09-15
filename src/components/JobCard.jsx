import { motion } from "framer-motion";
import { Bookmark, MapPin, ArrowUpRight, Clock3, DollarSign } from "lucide-react";

const accents = {
  emerald: "from-emerald-300/20 to-emerald-300/5 text-emerald-200",
  violet: "from-violet-300/20 to-violet-300/5 text-violet-200",
  cyan: "from-cyan-300/20 to-cyan-300/5 text-cyan-200",
  amber: "from-amber-300/20 to-amber-300/5 text-amber-200",
  pink: "from-pink-300/20 to-pink-300/5 text-pink-200",
  blue: "from-blue-300/20 to-blue-300/5 text-blue-200",
};

export default function JobCard({ job, onSelect, isSaved, onToggleSave, index }) {
  return (
    <motion.article layout initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.97}} transition={{delay:index*.04}} whileHover={{y:-5}} className="group relative overflow-hidden rounded-3xl border border-white/[.09] bg-[#0d1d17] p-5 shadow-xl shadow-black/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent opacity-0 transition group-hover:opacity-100"/>
      <div className="flex items-start justify-between gap-4">
        <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accents[job.accent]} border border-white/10 text-sm font-black`}>{job.logo}</div>
        <button onClick={()=>onToggleSave(job.id)} aria-label={isSaved ? "Unsave job" : "Save job"} className={`rounded-xl border p-2.5 transition ${isSaved ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-300" : "border-white/10 bg-white/[.03] text-slate-500 hover:text-white"}`}>
          <Bookmark size={16} fill={isSaved ? "currentColor" : "none"}/>
        </button>
      </div>
      <button onClick={()=>onSelect(job)} className="mt-5 block text-left">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-md bg-white/[.06] px-2 py-1 text-[9px] font-black uppercase tracking-widest text-slate-500">{job.department}</span>
          <span className="text-[9px] font-bold text-emerald-300">● {job.workStyle}</span>
        </div>
        <h3 className="text-lg font-black tracking-tight text-white transition group-hover:text-emerald-200">{job.title}</h3>
        <p className="mt-1 text-xs font-bold text-slate-500">{job.company}</p>
      </button>
      <div className="mt-5 grid gap-2 text-[10px] font-semibold text-slate-500">
        <span className="flex items-center gap-2"><MapPin size={13} className="text-slate-600"/>{job.location}</span>
        <span className="flex items-center gap-2"><DollarSign size={13} className="text-slate-600"/>{job.salary}</span>
        <span className="flex items-center gap-2"><Clock3 size={13} className="text-slate-600"/>{job.posted}</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {job.tags.map(tag=><span key={tag} className="rounded-lg border border-white/[.07] bg-white/[.025] px-2 py-1 text-[9px] font-bold text-slate-400">{tag}</span>)}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-white/[.07] pt-4">
        <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[.06] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-emerald-300">{job.type}</span>
        <button onClick={()=>onSelect(job)} className="flex items-center gap-1 text-[10px] font-black text-slate-400 transition hover:text-white">View details <ArrowUpRight size={13}/></button>
      </div>
    </motion.article>
  );
}