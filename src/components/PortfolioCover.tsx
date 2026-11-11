import React, { useState } from 'react';

interface PortfolioCoverProps {
  image: string;
  title: string;
  category: string;
  tools: string[];
  color: string;
}

/** A responsive editorial cover built around the project's actual screenshot. */
export default function PortfolioCover({ image, title, category, tools, color }: PortfolioCoverProps) {
  const [failed, setFailed] = useState(false);
  const accent = ({ emerald: '#6ee7b7', blue: '#93c5fd', purple: '#c4b5fd' } as Record<string, string>)[color] || '#cbd5e1';

  return (
    <div className="portfolio-cover" style={{ '--cover-accent': accent } as React.CSSProperties}>
      <div className="portfolio-cover__header">
        <span>IKHSAN KAMAL<span className="portfolio-cover__dot"> / </span>SELECTED WORK</span>
        <span aria-hidden="true">↗</span>
      </div>
      <div className="portfolio-cover__heading">
        <span className="portfolio-cover__category">{category}</span>
        <h4>{title.replace(/\.$/, '')}</h4>
      </div>
      <div className="portfolio-cover__screen">
        <div className="portfolio-cover__chrome" aria-hidden="true"><i /><i /><i /><span>PROJECT PREVIEW</span></div>
        <div className="portfolio-cover__image">
          {!failed ? <img src={image} alt={`Preview ${title}`} loading="lazy" decoding="async" onError={() => setFailed(true)} />
            : <div className="portfolio-cover__fallback"><span aria-hidden="true">↗</span><span>{title}</span></div>}
        </div>
      </div>
      <div className="portfolio-cover__tools">{tools.slice(0, 3).map(tool => <span key={tool}>{tool}</span>)}</div>
    </div>
  );
}
