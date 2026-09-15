import { motion } from "framer-motion";
import { ArrowRight, Search, Sparkles, TrendingUp } from "lucide-react";

export default function Hero({ search, setSearch, jobCount }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -left-28 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl"/>
      <div className="absolute -right-28 top-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"/>
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pb-14 lg:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.18em] text-emerald-300">
              <Sparkles size={13}/> Curated opportunities
            </motion.div>
            <motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.08}} className="max-w-3xl text-4xl font-black leading-[.98] tracking-[-.04em] text-white sm:text-6xl lg:text-7xl">
              Find work that <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-white bg-clip-text text-transparent">moves you.</span>
            </motion.h2>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}} className="mt-6 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Search exceptional roles, compare opportunities, and save the ones worth your next move.
            </motion.p>
          </div>

          <motion.div initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} transition={{delay:.15}} className="glass rounded-3xl p-4 shadow-glow">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold text-white">Smart job search</span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-300"><TrendingUp size={12}/> Live matching</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 focus-within:border-emerald-300/40">
              <Search className="shrink-0 text-slate-500" size={19}/>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Role, company, or skill..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"/>
              <button className="hidden rounded-xl bg-emerald-300 px-4 py-2 text-xs font-black text-[#06100b] transition hover:bg-emerald-200 sm:flex sm:items-center sm:gap-1">Search <ArrowRight size={14}/></button>
            </div>
            <p className="mt-3 text-[10px] text-slate-600">{jobCount} opportunities in your current view</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}