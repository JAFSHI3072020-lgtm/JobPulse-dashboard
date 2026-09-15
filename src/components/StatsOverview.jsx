import { motion } from "framer-motion";
import { BriefcaseBusiness, Globe2, Bookmark, Layers3 } from "lucide-react";

export default function StatsOverview({ totalJobs, remoteJobs, savedJobs, filteredCount }) {
  const stats = [
    ["Active openings", totalJobs, BriefcaseBusiness, "text-emerald-300"],
    ["Remote roles", remoteJobs, Globe2, "text-cyan-300"],
    ["Saved jobs", savedJobs, Bookmark, "text-violet-300"],
    ["Current matches", filteredCount, Layers3, "text-amber-300"],
  ];
  return <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
    {stats.map(([label,value,Icon,iconColor],i)=>(
      <motion.div key={label} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:i*.06}} className="glass rounded-2xl p-4 transition hover:-translate-y-0.5 hover:bg-white/[.05]">
        <div className="flex items-center justify-between">
          <div className={`grid h-9 w-9 place-items-center rounded-xl bg-white/[.05] ${iconColor}`}><Icon size={17}/></div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600">0{i+1}</span>
        </div>
        <p className="mt-4 text-2xl font-black text-white">{value}</p>
        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      </motion.div>
    ))}
  </div>;
}