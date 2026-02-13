import React from 'react';

interface LogoProps {
    inverted?: boolean; // If true: Black Box (Yellow text), Black Text outside.
    // If false: Yellow Box (Black text), White Text outside.
    className?: string;
    animate?: boolean; // Add hover animations if inside a link
    size?: 'md' | 'xl'; // md = Navbar (default), xl = Loader/Hero
}

export const Logo: React.FC<LogoProps> = ({ inverted = false, className = '', animate = false, size = 'md' }) => {
    // Size mappings
    const boxClasses = {
        md: 'px-4 py-1.5 text-xl',
        xl: 'px-6 py-2 md:px-8 md:py-3 text-2xl md:text-5xl'
    };

    const textClasses = {
        md: 'text-[10px] sm:text-sm tracking-[0.2em]',
        xl: 'text-sm md:text-2xl tracking-[0.3em] md:tracking-[0.4em] ml-2 md:ml-4'
    };

    return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
            {/* Box */}
            <div className={`
        font-black font-display tracking-tighter 
        ${boxClasses[size]}
        ${inverted ? 'bg-brand-black text-brand-yellow' : 'bg-brand-yellow text-brand-black'}
        ${animate ? 'transition-transform duration-300 group-hover:-translate-y-1' : ''}
      `}>
                BEING
            </div>

            {/* Text */}
            <div className={`
        font-bold inline-block whitespace-nowrap uppercase
        ${textClasses[size]}
        ${inverted ? 'text-brand-black' : 'text-white'}
        ${animate ? 'transition-all duration-300 group-hover:tracking-[0.3em]' : ''}
        ${animate && !inverted ? 'group-hover:text-brand-yellow' : ''} 
      `}>
                Architect
            </div>
        </div>
    );
};
