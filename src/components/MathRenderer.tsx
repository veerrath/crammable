"use client";

import { useEffect, useRef } from 'react';

interface MathRendererProps {
  content: string;
  className?: string;
}

export default function MathRenderer({ content, className = "" }: MathRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      // Simple LaTeX-like rendering for basic math expressions
      const processedContent = content
        .replace(/\$\$(.*?)\$\$/g, '<div class="math-display">$1</div>')
        .replace(/\$(.*?)\$/g, '<span class="math-inline">$1</span>')
        // Convert common LaTeX commands to Unicode/HTML
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '<span class="fraction">$1/$2</span>')
        .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
        .replace(/\\lim_\{([^}]+)\}/g, 'lim<sub>$1</sub>')
        .replace(/\\to/g, '→')
        .replace(/\\infty/g, '∞')
        .replace(/\\pi/g, 'π')
        .replace(/\\theta/g, 'θ')
        .replace(/\\alpha/g, 'α')
        .replace(/\\beta/g, 'β')
        .replace(/\\gamma/g, 'γ')
        .replace(/\\delta/g, 'δ')
        .replace(/\\epsilon/g, 'ε')
        .replace(/\\lambda/g, 'λ')
        .replace(/\\mu/g, 'μ')
        .replace(/\\sigma/g, 'σ')
        .replace(/\\phi/g, 'φ')
        .replace(/\\omega/g, 'ω')
        .replace(/\^(\d+)/g, '<sup>$1</sup>')
        .replace(/_(\d+)/g, '<sub>$1</sub>');

      containerRef.current.innerHTML = processedContent;
    }
  }, [content]);

  return (
    <div 
      ref={containerRef}
      className={`math-content ${className}`}
    />
  );
}