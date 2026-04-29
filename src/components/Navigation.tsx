import { Link, useLocation } from 'react-router-dom';
import { Anchor } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export function Navigation() {
  const location = useLocation();

  const links = [
    { name: '首頁 Profile', path: '/' },
    { name: '作業 Assignments', path: '/assignments' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a1423]/80 backdrop-blur-md border-b border-[#00D1FF]/20">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Anchor className="w-5 h-5 text-[#00D1FF] group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-lg tracking-tight text-white">彭奕翔 <span className="text-xs tracking-widest text-[#00D1FF] font-light ml-2">PYH</span></span>
        </Link>
        <div className="flex gap-1 text-[11px] font-mono tracking-widest uppercase">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative px-4 py-2 transition-colors',
                  isActive ? 'text-[#00D1FF]' : 'text-[#E0E6ED]/60 hover:text-[#00D1FF]'
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#00D1FF]"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
