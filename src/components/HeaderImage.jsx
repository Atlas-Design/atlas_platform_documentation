import React from 'react';

export default function HeaderImage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src="/img/headers/01.jpg" alt="Header" style={{ maxWidth: '100%' }} />
      <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.5rem' }}>
        3D Assets Generated Using Atlas Platform’s High-Fidelity Pipeline
      </p>
    </div>
  );
}
