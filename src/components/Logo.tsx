import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    hero: 'w-20 h-20 sm:w-28 sm:h-28',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
    hero: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Exact EM Circuit Monogram Box matching LOGO.jpeg */}
      <div
        className={`${sizeClasses[size]} rounded-2xl bg-[#080c14] border-2 border-cyan-400/80 flex items-center justify-center relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.35)] group`}
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:8px_8px]" />
        
        {/* Glowing circuit traces & nodes matching LOGO.jpeg */}
        <svg className="absolute inset-0 w-full h-full p-1.5" viewBox="0 0 60 60" fill="none">
          {/* E circuit branch */}
          <path d="M6 16H20V32H12" stroke="url(#cyanPurpleGrad)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="6" cy="16" r="2" fill="#06b6d4" />
          <circle cx="12" cy="32" r="2" fill="#8b5cf6" />
          <path d="M12 24H18" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* M circuit branch */}
          <path d="M54 44H38V22H44V34H48V22H54V44Z" stroke="url(#purpleCyanGrad)" strokeWidth="1.5" strokeLinejoin="round" opacity="0.4" />
          <circle cx="54" cy="44" r="2" fill="#8b5cf6" />
          <circle cx="44" cy="22" r="2" fill="#06b6d4" />

          <defs>
            <linearGradient id="cyanPurpleGrad" x1="6" y1="16" x2="20" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="purpleCyanGrad" x1="54" y1="44" x2="38" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* EM Monogram Text matching LOGO.jpeg */}
        <span className="relative z-10 font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 tracking-tighter text-xl sm:text-2xl drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
          EM
        </span>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size]} font-display font-extrabold tracking-wider text-white flex items-center gap-1.5 leading-none`}>
            EDUMATRIX <span className="text-cyan-400 font-black">AI</span>
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.25em] text-slate-400 uppercase font-mono mt-1">
            Bhopal, India
          </span>
        </div>
      )}
    </div>
  );
}
