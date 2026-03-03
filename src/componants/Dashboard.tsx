"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Stage =
  | "Booked"
  | "In Progress"
  | "Editing"
  | "Review"
  | "Delivered";

interface WorkItem {
  id: string;
  clientName: string;
  service: string;
  date: string;
  stage: Stage;
  progress: number; // 0-100
  photographer: string;
  notes: string;
  deliveryDate: string;
}

// ─── Sample Data ─────────────────────────────────────────────────────────────

const SAMPLE_WORK: WorkItem[] = [
  {
    id: "DC-2024-001",
    clientName: "Priya & Arjun Sharma",
    service: "Wedding Photography",
    date: "2024-11-10",
    stage: "Delivered",
    progress: 100,
    photographer: "Danu (Lead)",
    notes: "Full day coverage, 450 edited shots delivered via Google Drive.",
    deliveryDate: "2024-11-28",
  },
  {
    id: "DC-2024-002",
    clientName: "Meera Nair",
    service: "Portrait Photography",
    date: "2024-12-05",
    stage: "Editing",
    progress: 60,
    photographer: "Ravi K.",
    notes: "Studio session done, 80 raw shots. Editing in progress.",
    deliveryDate: "2024-12-20",
  },
  {
    id: "DC-2024-003",
    clientName: "Rohan & Sneha Verma",
    service: "Pre-Wedding Shoots",
    date: "2024-12-15",
    stage: "Review",
    progress: 80,
    photographer: "Danu (Lead)",
    notes: "Client reviewing first batch of 120 edited images.",
    deliveryDate: "2024-12-30",
  },
  {
    id: "DC-2025-001",
    clientName: "TechCorp Pvt Ltd",
    service: "Commercial Photography",
    date: "2025-01-08",
    stage: "In Progress",
    progress: 35,
    photographer: "Anita S.",
    notes: "Product shoot for Q1 catalogue — Day 1 complete.",
    deliveryDate: "2025-01-22",
  },
  {
    id: "DC-2025-002",
    clientName: "Global Events Co.",
    service: "Event Photography",
    date: "2025-01-20",
    stage: "Booked",
    progress: 5,
    photographer: "Ravi K.",
    notes: "Annual conference — all logistics confirmed.",
    deliveryDate: "2025-01-28",
  },
  {
    id: "DC-2025-003",
    clientName: "Kavya & Dev Patel",
    service: "Wedding Photography",
    date: "2025-02-14",
    stage: "Booked",
    progress: 10,
    photographer: "Danu (Lead)",
    notes: "Venue scouted. Shot list under discussion.",
    deliveryDate: "2025-03-05",
  },
];

// ─── Stage Config ─────────────────────────────────────────────────────────────

const STAGE_CONFIG: Record<Stage, { color: string; bg: string; dot: string }> = {
  Booked:      { color: "text-sky-400",    bg: "bg-sky-400/10 border-sky-400/30",    dot: "bg-sky-400" },
  "In Progress":{ color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/30", dot: "bg-amber-400" },
  Editing:     { color: "text-violet-400", bg: "bg-violet-400/10 border-violet-400/30", dot: "bg-violet-400" },
  Review:      { color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/30", dot: "bg-orange-400" },
  Delivered:   { color: "text-emerald-400",bg: "bg-emerald-400/10 border-emerald-400/30", dot: "bg-emerald-400" },
};

const STAGES: Stage[] = ["Booked", "In Progress", "Editing", "Review", "Delivered"];

// ─── Progress Bar ─────────────────────────────────────────────────────────────

const ProgressBar = ({ value, stage }: { value: number; stage: Stage }) => {
  const colors: Record<Stage, string> = {
    Booked:       "from-sky-500 to-sky-400",
    "In Progress":"from-amber-500 to-amber-400",
    Editing:      "from-violet-500 to-violet-400",
    Review:       "from-orange-500 to-orange-400",
    Delivered:    "from-emerald-500 to-emerald-400",
  };

  return (
    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${colors[stage]}`}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
};

// ─── Work Card ────────────────────────────────────────────────────────────────

const WorkCard = ({ item, index }: { item: WorkItem; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const cfg = STAGE_CONFIG[item.stage];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 hover:bg-white/8 transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded((p) => !p)}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-white/30">{item.id}</span>
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full border ${cfg.bg} ${cfg.color}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} animate-pulse`} />
              {item.stage}
            </span>
          </div>
          <h3 className="font-semibold text-white text-base truncate">{item.clientName}</h3>
          <p className="text-sm text-white/50 mt-0.5">{item.service}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs text-white/40">Shoot Date</p>
          <p className="text-sm text-white/70 font-medium">{item.date}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-white/40 mb-1.5">
          <span>Progress</span>
          <span>{item.progress}%</span>
        </div>
        <ProgressBar value={item.progress} stage={item.stage} />
      </div>

      {/* Stage timeline dots */}
      <div className="mt-4 flex items-center gap-1">
        {STAGES.map((s, i) => {
          const current = STAGES.indexOf(item.stage);
          const done = i <= current;
          return (
            <React.Fragment key={s}>
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  done ? cfg.dot : "bg-white/10"
                }`}
              />
              {i < STAGES.length - 1 && (
                <div className={`flex-1 h-px ${done && i < current ? cfg.dot.replace("bg-", "bg-") + " opacity-40" : "bg-white/10"}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-white/40 text-xs mb-0.5">Photographer</p>
                <p className="text-white/80">{item.photographer}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">Delivery Date</p>
                <p className="text-white/80">{item.deliveryDate}</p>
              </div>
              <div className="col-span-2">
                <p className="text-white/40 text-xs mb-0.5">Notes</p>
                <p className="text-white/70">{item.notes}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-white/25 mt-3 text-right">
        {expanded ? "▲ collapse" : "▼ click for details"}
      </p>
    </motion.div>
  );
};

// ─── Stats Bar ────────────────────────────────────────────────────────────────

const StatsBar = ({ data }: { data: WorkItem[] }) => {
  const stats = STAGES.map((s) => ({
    stage: s,
    count: data.filter((d) => d.stage === s).length,
    cfg: STAGE_CONFIG[s],
  }));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
      {stats.map(({ stage, count, cfg }) => (
        <div
          key={stage}
          className={`rounded-xl border p-3 text-center ${cfg.bg}`}
        >
          <p className={`text-2xl font-bold ${cfg.color}`}>{count}</p>
          <p className="text-xs text-white/50 mt-0.5">{stage}</p>
        </div>
      ))}
    </div>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function Dashboard() {
  const [filter, setFilter] = useState<Stage | "All">("All");
  const [search, setSearch] = useState("");

  const filtered = SAMPLE_WORK.filter((w) => {
    const matchStage = filter === "All" || w.stage === filter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      w.clientName.toLowerCase().includes(q) ||
      w.service.toLowerCase().includes(q) ||
      w.id.toLowerCase().includes(q);
    return matchStage && matchSearch;
  });

  return (
    <section className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Work Dashboard
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Dashboard
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Real-time visibility into every project — from booking to final delivery.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Stats */}
        <StatsBar data={SAMPLE_WORK} />

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by client, service or ID…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-teal-500/50 transition-colors"
          />
          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap">
            {(["All", ...STAGES] as (Stage | "All")[]).map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
                  filter === s
                    ? "bg-teal-500 border-teal-500 text-black"
                    : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-white/30"
          >
            No projects match your filter.
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((item, i) => (
              <WorkCard key={item.id} item={item} index={i} />
            ))}
          </div>
        )}

        <p className="text-center text-white/20 text-xs mt-10">
          Showing {filtered.length} of {SAMPLE_WORK.length} projects • Click a card to expand details
        </p>
      </div>
    </section>
  );
}
