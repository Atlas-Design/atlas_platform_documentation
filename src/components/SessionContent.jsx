import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
//import { VALID_TAGS } from '@site/src/data/tagList';

export default function SessionContent({
  description,
  folder,
  tags = [],
}) {
  // Validate tags
  tags.forEach(tag => {
    if (!VALID_TAGS.includes(tag)) {
      console.warn(`[Invalid tag] "${tag}" is not in the list of VALID_TAGS`);
    }
  });

  // Convention: image and JSON filenames
  const defaultImages = ['preview1.png', 'preview2.png', 'preview3.png', 'preview4.png', 'preview5.png'];
  const resolvedImages = defaultImages.map((name) =>
    useBaseUrl(`${folder}/${name}`)
  );
  const folderName = folder.split('/').filter(Boolean).pop();
  const jsonPath = useBaseUrl(`${folder}/${folderName}.json`);
  return (
    <>
      <div className="session-header">
        <p className="session-description">
          <strong>Description:</strong> {description}
        </p>
        <Link to={jsonPath} download className="session-download-link">
          📁 <strong>Download Session</strong>
        </Link>
      </div>

      <div className="session-image-row">
        {resolvedImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Sample ${i + 1}`}
            className="session-preview-img"
            onError={(e) => (e.target.style.display = 'none')}
          />
        ))}
      </div>

      {tags.length > 0 && (
        <p className="session-tags">
          Tags: {tags.join(', ')}
        </p>
      )}
    </>
  );
}
