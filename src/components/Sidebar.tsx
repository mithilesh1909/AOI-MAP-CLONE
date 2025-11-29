import { Layers, Map as MapIcon, MousePointer2, Trash2, PenTool } from 'lucide-react';

interface SidebarProps {
    showSatellite: boolean;
    onToggleSatellite: () => void;
    showLabels: boolean;
    onToggleLabels: () => void;
}

export default function Sidebar({ showSatellite, onToggleSatellite, showLabels, onToggleLabels }: SidebarProps) {
    return (
        <div className="w-80 h-full bg-zinc-900 text-white flex flex-col border-r border-zinc-800 shadow-xl z-10 flex-shrink-0">
            <div className="p-6 border-b border-zinc-800">
                <h1 className="text-xl font-bold flex items-center gap-2 text-white">
                    <MapIcon className="w-6 h-6 text-blue-500" />
                    MapClone
                </h1>
                <p className="text-xs text-zinc-400 mt-1">Satellite Imagery & Analysis</p>

                <div className="mt-4 relative">
                    <input
                        type="text"
                        placeholder="Search location..."
                        className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm rounded-md py-2 pl-3 pr-8 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-zinc-500"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-6 space-y-8 overflow-y-auto">
                <div className="space-y-4">
                    <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                        <Layers className="w-3 h-3" />
                        Layers
                    </h2>
                    <div className="space-y-2">
                        <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/50 hover:border-zinc-600 transition-colors">
                            <label className="flex items-center gap-3 cursor-pointer group select-none">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={showSatellite}
                                        onChange={onToggleSatellite}
                                        className="peer sr-only"
                                    />
                                    <div className="w-9 h-5 bg-zinc-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                </div>
                                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">NRW DOP (Satellite)</span>
                            </label>
                        </div>
                        <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/50 hover:border-zinc-600 transition-colors">
                            <label className="flex items-center gap-3 cursor-pointer group select-none">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={showLabels}
                                        onChange={onToggleLabels}
                                        className="peer sr-only"
                                    />
                                    <div className="w-9 h-5 bg-zinc-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                </div>
                                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">Labels (Hybrid)</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                        <MousePointer2 className="w-3 h-3" />
                        Tools
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm py-3 px-3 rounded-lg transition-all flex flex-col items-center gap-2 text-zinc-300 hover:text-white hover:border-zinc-500 active:scale-95">
                            <span className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700 shadow-inner">
                                <PenTool className="w-4 h-4" />
                            </span>
                            Draw AOI
                        </button>
                        <button className="bg-zinc-800 hover:bg-red-900/20 border border-zinc-700 hover:border-red-800 text-sm py-3 px-3 rounded-lg transition-all flex flex-col items-center gap-2 text-zinc-300 hover:text-red-400 active:scale-95">
                            <span className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700 shadow-inner">
                                <Trash2 className="w-4 h-4" />
                            </span>
                            Clear
                        </button>
                    </div>
                </div>

                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <h3 className="text-blue-400 text-xs font-bold mb-1">Instructions</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                        Use the map to navigate the North Rhine-Westphalia region. Toggle the satellite layer to view high-resolution imagery.
                    </p>
                </div>
            </div>

            <div className="p-4 border-t border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
                <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                    <div className="flex gap-4">
                        <span>LAT: 51.5136</span>
                        <span>LNG: 7.4653</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span>ONLINE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
