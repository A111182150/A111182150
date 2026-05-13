import { useParams, useNavigate } from 'react-router-dom';
import { assignments } from '../data/assignments';
import { motion } from 'motion/react';
import { ExternalLink, ChevronLeft } from 'lucide-react';

export function AssignmentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const assignment = assignments.find((a) => a.id === Number(id));

  if (!assignment) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white">找不到該作業</h2>
        <button 
          onClick={() => navigate('/assignments')}
          className="mt-4 text-accent hover:underline font-mono tracking-widest text-xs"
        >
          返回作業列表
        </button>
      </div>
    );
  }

  const Icon = assignment.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between border-b border-[#00d1ff]/20 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#00D1FF]/10 text-accent rounded-sm border border-[#00D1FF]/20">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-accent font-mono mb-1 tracking-widest uppercase">Assignment #0{assignment.id}</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-widest">{assignment.title}</h1>
          </div>
        </div>
        <button 
          onClick={() => window.close()}
          className="hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#E0E6ED]/40 hover:text-accent transition-colors"
        >
          <ChevronLeft className="w-3 h-3" /> CLOSE TAB
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {assignment.embedUrl ? (
            <div className="aspect-video w-full overflow-hidden border border-[#00d1ff]/20 rounded-sm bg-black/20">
              <iframe
                src={assignment.embedUrl}
                className="w-full h-full"
                allow="autoplay"
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video w-full flex items-center justify-center border border-[#00d1ff]/20 rounded-sm bg-black/10">
               <div className="text-center p-8">
                 <Icon className="w-12 h-12 text-[#00d1ff]/20 mx-auto mb-4" />
                 <p className="text-xs text-[#E0E6ED]/30 font-mono tracking-widest">NO PREVIEW AVAILABLE</p>
               </div>
            </div>
          )}

          {assignment.longDescription && (
            <section className="card-border p-6 rounded-sm">
              <h2 className="text-xs font-bold text-accent mb-4 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-2">
                Detailed Description / 詳細說明
              </h2>
              <p className="text-sm leading-relaxed text-[#E0E6ED]/80 font-light">
                {assignment.longDescription}
              </p>
              {assignment.tags && (
                <div className="mt-6 flex gap-2 text-[9px] text-accent font-mono uppercase tracking-widest">
                  {assignment.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 border border-accent/30 rounded-sm">{tag}</span>
                  ))}
                </div>
              )}
            </section>
          )}
        </div>

        <div className="space-y-6">
          <section className="card-border p-6 rounded-sm">
            <h2 className="text-xs font-bold text-accent mb-4 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-2">
              Context / 簡介
            </h2>
            <p className="text-xs leading-relaxed text-[#E0E6ED]/70 font-light italic">
              {assignment.description}
            </p>
          </section>

          <section className="card-border p-6 rounded-sm">
            <h2 className="text-xs font-bold text-accent mb-4 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-2">
              Resources / 外連連結
            </h2>
            <div className="space-y-3">
              {assignment.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 text-[10px] font-mono tracking-widest text-[#00D1FF] bg-[#00D1FF]/5 
                           hover:bg-[#00D1FF] hover:text-[#05070A] border border-[#00D1FF]/20 
                           rounded-sm transition-all group"
                >
                  {link.name.toUpperCase()}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
