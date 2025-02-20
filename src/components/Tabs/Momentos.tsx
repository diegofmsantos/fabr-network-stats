// components/Tabs/Momentos.tsx
import React from 'react';

export const Momentos = () => {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/SF2ENJEVP6A"
        title="T-Rex x Mariners - Melhores Momentos"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default Momentos;