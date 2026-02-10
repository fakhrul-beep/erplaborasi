import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 160 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Dapur Laborasi Logo"
    >
      {/* Dapur Text */}
      <text x="10" y="30" fontFamily="serif" fontWeight="bold" fontSize="28" fill="#2F3E4A">Dapur</text>
      
      {/* Custom D decoration (Chef Hat) */}
      {/* Masking or overlaying the D is hard with simple text, so we'll just draw the hat over the D's counter space */}
      <path d="M18 14 C 18 12 20 10 22 10 C 24 10 25 11 25 12 C 26 11 28 11 29 12 C 30 11 32 12 32 14 L 32 18 H 18 Z" fill="#B7DF2D" />
      <path d="M18 18 Q 25 22 32 18" stroke="#2F3E4A" strokeWidth="1" fill="none" />

      {/* laborasi Text */}
      <text x="10" y="60" fontFamily="serif" fontWeight="bold" fontSize="28" fill="#2F3E4A">laborasi</text>
      
      {/* Custom i decoration (Leaf) */}
      {/* Position for the dot of 'i' in laborasi. 'laboras' is about 7 chars. */}
      {/* We cover the original dot with a leaf shape */}
      <path d="M112 42 Q 116 38 120 42 Q 116 48 112 42 Z" fill="#B7DF2D" />
    </svg>
  );
}
