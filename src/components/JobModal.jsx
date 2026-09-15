import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, DollarSign, Clock3, Building2, CheckCircle2, Bookmark, Send } from "lucide-react";

export default function JobModal({ job, onClose, isSaved, onToggleSave }) {
  return <AnimatePresence>{job && (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>e.target===e.currentTarget&&onClose()} className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-md">
      <motion.div initial={{opacity:0,y:25,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20,scale:.98}} className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d1d17] shadow-2xl">
        <div className="relative border-b border-white/[.08] p-6 sm:p-7">
          <button onClick={onClose} className="absolute right-5 top-5 rounded-xl border border-white/10 p-2 text-slate-500 hover:text-white"><X size={17}/></button>
          <div className="flex gap-4 pr-8">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-300/10 text-lg font-black text-emerald-200">{job.logo}</div>
            <div><span className="text-[9px] font-black uppercase tracking-widest text-emerald-300">{job.department}</span><h2 className="mt-1 text-2xl font-black tracking-tight text-white">{job.title}</h2><p className="mt-1 text-xs font-bold text-slate-500">{job.company}</p></div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-2 text-[10px] font-bold text-slate-400 sm:grid-cols-3">
            <span className="flex items-center gap-2 rounded-xl bg-white/[.035] p-3"><MapPin size={14}/> {job.location}</span>
            <span className="flex items-center gap-2 rounded-xl bg-white/[.035] p-3"><DollarSign size={14}/> {job.salary}</span>
            <span className="flex items-center gap-2 rounded-xl bg-white/[.035] p-3"><Clock3 size={14}/> {job.posted}</span>
          </div>
        </div>
        <div className="max-h-[48vh] overflow-y-auto p-6 sm:p-7">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-600">About the role</h4>
          <p className="mt-3 text-sm leading-7 text-slate-300">{job.description}</p>
          <h4 className="mt-7 text-[10px] font-black uppercase tracking-widest text-slate-600">Key requirements</h4>
          <ul className="mt-3 space-y-3">{job.requirements.map(r=><li key={r} className="flex gap-2 text-sm text-slate-300"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-300"/>{r}</li>)}</ul>
          <div className="mt-7 flex flex-wrap gap-2">{job.tags.map(t=><span key={t} className="rounded-lg border border-white/10 bg-white/[.035] px-3 py-1.5 text-[10px] font-bold text-slate-400">{t}</span>)}</div>
        </div>
        <div className="flex flex-col-reverse gap-2 border-t border-white/[.08] bg-black/10 p-4 sm:flex-row sm:justify-between">
          <button onClick={()=>onToggleSave(job.id)} className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-black text-slate-300 hover:bg-white/[.05]"><Bookmark size={15} fill={isSaved ? "currentColor":"none"}/>{isSaved ? "Saved" : "Save for later"}</button>
          <button onClick={()=>alert(`Application started for ${job.title} at ${job.company}.`)} className="flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-5 py-3 text-xs font-black text-[#06100b] transition hover:bg-emerald-200"><Send size={15}/> Apply now</button>
        </div>
      </motion.div>
    </motion.div>
  )}</AnimatePresence>;
}