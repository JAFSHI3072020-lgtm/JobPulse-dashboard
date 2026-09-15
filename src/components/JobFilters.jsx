import { RotateCcw, SlidersHorizontal } from "lucide-react";

export default function JobFilters({ selectedWorkStyle, setSelectedWorkStyle, selectedDepartment, setSelectedDepartment, departments, resetFilters }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-2 pr-1 text-[10px] font-black uppercase tracking-widest text-slate-600"><SlidersHorizontal size={14}/> Filters</div>
      <select value={selectedWorkStyle} onChange={e=>setSelectedWorkStyle(e.target.value)} className="rounded-xl border border-white/10 bg-[#0d1d17] px-3 py-2 text-xs font-bold text-slate-300 outline-none transition focus:border-emerald-300/40">
        <option>All</option><option>Remote</option><option>Hybrid</option><option>On-site</option>
      </select>
      <select value={selectedDepartment} onChange={e=>setSelectedDepartment(e.target.value)} className="rounded-xl border border-white/10 bg-[#0d1d17] px-3 py-2 text-xs font-bold text-slate-300 outline-none transition focus:border-emerald-300/40">
        <option>All Departments</option>{departments.map(d=><option key={d}>{d}</option>)}
      </select>
      <button onClick={resetFilters} className="ml-auto flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-500 transition hover:bg-white/[.05] hover:text-white"><RotateCcw size={13}/> Reset</button>
    </div>
  );
}