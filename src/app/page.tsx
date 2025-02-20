// pages/GameStatsPage.tsx
'use client'

import React, { useState } from 'react';
import { MainTab, SubTab } from '@/types';
import { Stats } from '@/components/Tabs/Stats';
import { Rex } from '@/components/Tabs/Rex';
import { Mariners } from '@/components/Tabs/Mariners';
import { PlayByPlay } from '@/components/Tabs/PlayByPlay';
import { Momentos } from '@/components/Tabs/Momentos';
import GameCard from '@/components/Tabs/GameCard';

const GameStatsPage = () => {
  const mainTabs: MainTab[] = ['ESTATÍSTICAS', 'REX', 'MARINERS', 'PLAY BY PLAY', 'MELHORES MOMENTOS'];
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('ESTATÍSTICAS');
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('GERAIS');
  const [isPlayDetailExpanded, setIsPlayDetailExpanded] = useState(true);

  const renderContent = () => {
    switch (activeMainTab) {
      case 'ESTATÍSTICAS':
        return <Stats activeSubTab={activeSubTab} setActiveSubTab={setActiveSubTab} />;
      case 'REX':
        return <Rex />;
      case 'MARINERS':
        return <Mariners />;
      case 'PLAY BY PLAY':
        return (
          <PlayByPlay
            isPlayDetailExpanded={isPlayDetailExpanded}
            setIsPlayDetailExpanded={setIsPlayDetailExpanded}
          />
        );
      case 'MELHORES MOMENTOS':
        return <Momentos />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-black px-6 flex justify-center items-center">
        <img src="/logo-fabr-color.png" alt="Fabr Network" className="w-44 h-20" />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-[1400px] mx-auto p-6">
          <div className="flex gap-8">
            {/* Left Column - Game Card */}
            <GameCard />

            {/* Right Column - Stats */}
            <div className="flex-1">
              {/* Main Navigation */}
              <div className="flex gap-6 mb-6 justify-between rounded-full bg-gray-100 tracking-[-1px]">
                {mainTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveMainTab(tab)}
                    className={`px-4 py-2 rounded-full ${
                      activeMainTab === tab
                        ? 'bg-black text-white'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Dynamic Content */}
              <div className="mt-8 tracking-[-1px]">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button className="text-green-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Times
          </button>
          <button className="text-gray-400">Ranking</button>
          <button className="text-gray-400">Notícias</button>
          <button className="text-gray-400">Menu</button>
        </div>
      </footer>
    </div>
  );
};

export default GameStatsPage;