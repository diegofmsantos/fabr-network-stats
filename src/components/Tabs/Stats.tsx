import React from 'react';
import { SubTab } from '@/types';
import { mockData } from '@/data/mock';

interface StatsProps {
    activeSubTab: SubTab;
    setActiveSubTab: (tab: SubTab) => void;
}

export const Stats: React.FC<StatsProps> = ({ activeSubTab, setActiveSubTab }) => {
    const subTabs: SubTab[] = ['GERAIS', 'PASSE', 'CORRIDA', 'DEFESA'];

    const renderStatsTable = () => {
        if (mockData.ESTATISTICAS[activeSubTab]) {
            return (
                <div className="space-y-5">
                    {Object.entries(mockData.ESTATISTICAS[activeSubTab]).map(([label, values], index) => (
                        <div key={label} className="flex items-center">
                            <div className="w-32 flex items-center">
                                {index === 0 && (
                                    <>
                                        <img src="/timbo-rex.png" alt="TR" className="w-10 h-10" />
                                        <span className="mx-2 font-bold">REX</span>
                                    </>
                                )}
                                <span className="text-right font-medium ml-auto">{values.rex}</span>
                            </div>
                            <div className="flex-1 px-6">
                                <div className="text-gray-500 text-center">{label}</div>
                                <div className="h-px bg-gray-200 my-2"></div>
                            </div>
                            <div className="w-32 flex items-center">
                                <span className="text-right font-medium mr-2">{values.mariners}</span>
                                {index === 0 && (
                                    <>
                                        <span className="mx-2 font-bold">MAR</span>
                                        <img src="/recife-mariners.png" alt="MAR" className="w-10 h-10" />
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <div className="flex gap-6 mb-8 justify-center tracking-[-1px]">
                {subTabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveSubTab(tab)}
                        className={`font-bold text-2xl ${activeSubTab === tab ? 'text-black' : 'text-gray-400'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="mt-8 tracking-[-1px]">
                {renderStatsTable()}
            </div>
        </>
    );
};

export default Stats;