'use client';
import { useState } from 'react';

const DropArea = ({ onDrop }: { onDrop: Function }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        console.log('onDrop function exe');
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={`${showDrop ? 'opacity-100 p-2 w-80 h-12 bg-gray-100 flex items-center justify-center rounded-md border border-dashed border-slate-500 transition-all delay-200 ease-in-out' : 'opacity-0 h-1'}`}
    >
      Drop Here
    </section>
  );
};

export default DropArea;
