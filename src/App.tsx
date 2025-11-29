import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MapComponent from './map/MapComponent';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [showSatellite, setShowSatellite] = useState(true);
  const [showLabels, setShowLabels] = useState(true);

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar
        showSatellite={showSatellite}
        onToggleSatellite={() => setShowSatellite(!showSatellite)}
        showLabels={showLabels}
        onToggleLabels={() => setShowLabels(!showLabels)}
      />
      <div className="flex-1 relative">
        <ErrorBoundary fallback={<div className="flex items-center justify-center h-full text-gray-400">Map unavailable in this environment</div>}>
          <MapComponent showSatellite={showSatellite} showLabels={showLabels} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
