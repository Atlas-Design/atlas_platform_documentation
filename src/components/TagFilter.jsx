// src/components/TagFilter.jsx
import React from 'react';

export default function TagFilter({ tags, selectedTags, onToggle }) {
  return (
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onToggle(tag)}
          style={{
            padding: '0.3rem 0.6rem',
            fontSize: '0.85rem',
            borderRadius: '4px',
            border: selectedTags.includes(tag) ? '2px solid #09c' : '1px solid #888',
            backgroundColor: selectedTags.includes(tag) ? '#e6f7ff' : 'transparent',
            cursor: 'pointer',
          }}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}
