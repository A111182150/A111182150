import { assignments } from '../data/assignments';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { getPublicAssetPath } from '../lib/utils';

export function Assignments() {
  const [selectedId, setSelectedId] = useState(assignments[0].id);
  const selectedAssignment = assignments.find(a => a.id === selectedId) || assignments[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-5xl mx-auto flex flex-col space-y-8"
    >
      <div className="border-b border-[#00d1ff]/20 pb-4">
        <h1 className="text-[10px] tracking-[0.4em] text-accent uppercase mb-2 font-mono">Assignments / 課程作業展演</h1>
      </div>

      {/* 5 Buttons Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {assignments.map((assignment) => {
          const Icon = assignment.icon;
          const isActive = selectedId === assignment.id;
          return (
            <button
              key={assignment.id}
              onClick={() => setSelectedId(assignment.id)}
              className={`
                relative flex flex-col items-center justify-center p-4 rounded-sm border transition-all duration-300
                ${isActive 
                  ? 'bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(0,209,255,0.1)]' 
                  : 'card-border border-[#E0E6ED]/10 text-[#E0E6ED]/40 hover:border-accent/40 hover:text-[#E0E6ED]/80'
                }
              `}
            >
              <Icon className={`w-5 h-5 mb-2 transition-transform ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-center uppercase font-mono line-clamp-1">
                {assignment.shortTitle}
              </span>
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-accent"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Dynamic Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedId}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-3 gap-8 pt-4"
        >
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-white tracking-widest flex items-center gap-2 leading-tight">
              <ChevronRight className="w-5 h-5 text-accent shrink-0" />
              {selectedAssignment.title}
            </h2>

            {selectedAssignment.embedUrl ? (
              <div className="aspect-video w-full overflow-hidden border border-[#00d1ff]/20 rounded-sm bg-black/20">
                {selectedAssignment.embedUrl.endsWith('.png') || selectedAssignment.embedUrl.endsWith('.jpg') || selectedAssignment.embedUrl.endsWith('.JPG') ? (
                  <img 
                    src={getPublicAssetPath(selectedAssignment.embedUrl)} 
                    alt={selectedAssignment.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <iframe
                    src={selectedAssignment.embedUrl}
                    className="w-full h-full border-none"
                    allow="autoplay"
                  ></iframe>
                )}
              </div>
            ) : (
              <div className="aspect-video w-full flex flex-col items-center justify-center border border-[#00d1ff]/20 rounded-sm bg-black/10">
                 <selectedAssignment.icon className="w-12 h-12 text-[#00d1ff]/10 mb-4" />
                 <p className="text-[10px] text-[#E0E6ED]/20 font-mono tracking-widest uppercase text-center px-8">
                   No inline preview available for this item
                 </p>
              </div>
            )}

            {selectedAssignment.longDescription && (
              <section className="card-border p-6 rounded-sm bg-accent/[0.02]">
                <p className="text-xs leading-relaxed text-[#E0E6ED]/80 font-light italic">
                  {selectedAssignment.longDescription}
                </p>
                {selectedAssignment.tags && (
                  <div className="mt-4 flex gap-2 text-[9px] text-accent font-mono uppercase tracking-widest">
                    {selectedAssignment.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 border border-accent/20 rounded-sm">{tag}</span>
                    ))}
                  </div>
                )}
              </section>
            )}
          </div>

          <div className="space-y-6">
            <section className="card-border p-5 rounded-sm">
              <h3 className="text-[10px] font-bold text-accent mb-3 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-1">
                Context / 簡介
              </h3>
              <p className="text-[11px] leading-relaxed text-[#E0E6ED]/60 font-light">
                {selectedAssignment.description}
              </p>
            </section>

            <section className="card-border p-5 rounded-sm">
              <h3 className="text-[10px] font-bold text-accent mb-3 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-1">
                Links / 外連資產
              </h3>
              <div className="flex flex-col gap-2">
                {selectedAssignment.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-2.5 text-[10px] font-mono tracking-widest text-accent bg-accent/5 hover:bg-accent hover:text-[#05070A] border border-accent/10 rounded-sm transition-all"
                  >
                    {link.name.toUpperCase()}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-16 card-border p-6 rounded-sm bg-accent/5 border-dashed border-accent/20">
         <p className="text-center text-[10px] font-mono tracking-widest text-accent/60 italic uppercase">
           All content is curated for navigational software application research
         </p>
      </div>
    </motion.div>
  );
}
