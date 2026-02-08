import React, { useEffect } from 'react';
import SitePrototype from './components/SitePrototype';

const App: React.FC = () => {
  // Preload fonts or heavy assets if necessary
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="antialiased bg-tc-black min-h-screen">
      <SitePrototype />
    </div>
  );
};

export default App;