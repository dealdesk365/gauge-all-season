'use client';

import { useState, useEffect } from 'react';

export default function SeasonalBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('banner-dismissed');
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem('banner-dismissed', 'true');
    setVisible(false);
  };

  return (
    <div
      style={{
        maxHeight: visible ? '120px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
        backgroundColor: '#1a3a5c',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '10px 40px 10px 16px',
          position: 'relative',
        }}
      >
        <span style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.95rem' }}>
          🍂{' '}
          <span style={{ color: '#f97316' }}>Now booking fall cleanups</span>
          {' '}— limited spots available!
        </span>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            backgroundColor: '#c85a1e',
            color: '#ffffff',
            padding: '6px 14px',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '0.875rem',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
          }}
        >
          Book Now
        </a>
        <button
          onClick={dismiss}
          aria-label="Dismiss banner"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            fontSize: '1.25rem',
            cursor: 'pointer',
            lineHeight: 1,
            padding: '4px',
            opacity: 0.75,
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
