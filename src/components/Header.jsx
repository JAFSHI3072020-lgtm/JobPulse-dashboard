import { motion } from "framer-motion";
import { BriefcaseBusiness, Bookmark, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ savedCount, showSavedOnly, setShowSavedOnly }) {
  const [menu, setMenu] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07110d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ rotate: -5, scale: 1.04 }} className="relative grid h-10 w-10 place-items-center rounded-2xl bg-emerald-400 text-[#06100b] shadow-[0_0_35px_rgba(52,211,153,.28)]">
            <BriefcaseBusiness size={20} strokeWidth={2.5}/>
          </motion.div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black tracking-tight text-white">Job<span className="text-emerald-300">Pulse</span></h1>
              <span className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-300 sm:inline">Pro</span>
            </div>
            <p className="hidden text-[10px] font-medium text-slate-500 sm:block">Your next career move starts here</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-400 md:flex">
          <a href="#jobs" className="transition hover:text-white">Explore jobs</a>
          <a href="#insights" className="transition hover:text-white">Career insights</a>
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setShowSavedOnly(!showSavedOnly)} className={`group flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition ${showSavedOnly ? "border-emerald-300/30 bg-emerald-300/15 text-emerald-200" : "border-white/10 bg-white/[.04] text-slate-300 hover:bg-white/[.08]"}`}>
            <Bookmark size={15} fill={showSavedOnly ? "currentColor" : "none"}/>
            <span className="hidden sm:inline">Saved</span>
            <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px]">{savedCount}</span>
          </button>
          <button onClick={() => setMenu(!menu)} className="rounded-xl border border-white/10 p-2 text-slate-300 md:hidden">
            {menu ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>
      {menu && <div className="border-t border-white/10 px-4 py-4 md:hidden"><div className="flex gap-5 text-sm font-semibold text-slate-400"><a href="#jobs" onClick={()=>setMenu(false)}>Explore jobs</a><a href="#insights" onClick={()=>setMenu(false)}>Career insights</a></div></div>}
    </header>
  );
}