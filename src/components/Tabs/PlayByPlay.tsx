// components/Tabs/PlayByPlay.tsx
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { mockData } from '@/data/mock';

interface PlayByPlayProps {
  isPlayDetailExpanded: boolean;
  setIsPlayDetailExpanded: (expanded: boolean) => void;
}

export const PlayByPlay: React.FC<PlayByPlayProps> = ({
  isPlayDetailExpanded,
  setIsPlayDetailExpanded
}) => {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg">
        <div className="flex flex-col">
          <div className="text-xs mb-4 flex justify-between">
            <div>19/02/2025 às 15h:30</div>
            <div>Semifinal Nacional - Liga BFA</div>
            <div>Complexo Esportivo Timbó/SC</div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex justify-center items-center gap-5">
              <div>
                <div className="font-bold text-5xl">REX</div>
                <div className="text-xs font-bold">(6-0)</div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-5">
                  <img src="/capacete-timbo-rex.png" alt="Rex" className="w-24 h-20" />
                  <span className="font-bold border rounded-md py-5 px-7 text-5xl">16</span>
                </div>
                <div className="flex justify-end gap-1 mt-1 text-right">
                  <div className="text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl">TEMPO</div>
                  <div className="text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl opacity-60">TEMPO</div>
                  <div className="text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl opacity-60">TEMPO</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl">2º & 10</div>
              <table className="flex flex-col text-[10px]">
                <thead>
                  <tr className="flex justify-center gap-5">
                    <th className="text-center w-4">1</th>
                    <th className="text-center w-4">2</th>
                    <th className="text-center w-4">3</th>
                    <th className="text-center w-4">4</th>
                    <th className="text-center w-4">OT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex justify-center gap-5">
                    <td className="text-center w-4">14</td>
                    <td className="text-center w-4">0</td>
                    <td className="text-center w-4">0</td>
                    <td className="text-center w-4">0</td>
                    <td className="text-center w-5 font-bold"></td>
                  </tr>
                  <tr className="flex justify-center gap-5">
                    <td className="text-center w-4">0</td>
                    <td className="text-center w-4">10</td>
                    <td className="text-center w-4">0</td>
                    <td className="text-center w-4">14</td>
                    <td className="text-center w-4 font-bold"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="flex flex-col">
                <span className="font-bold border rounded-md py-5 px-7 text-5xl">24</span>
                <div className="flex justify-end gap-1 mt-1 text-right">
                  <div className="text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl">TEMPO</div>
                  <div className="text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl">TEMPO</div>
                  <div className="text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl opacity-60">TEMPO</div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <img src="/capacete-recife-mariners.png" alt="Rex" className="w-24 h-20 scale-x-[-1]" />
                <div>
                  <div className="font-bold text-5xl">MAR</div>
                  <div className="text-xs font-bold text-right">(5-1)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-72 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent h-8 z-10 rounded-t-3xl" />
          <img src="/campo.jpeg" alt="campo" className="w-full h-72 object-cover" />
        </div>

        <div className="font-bold text-2xl mb-4">1º QUARTO</div>

        <div className="flex items-start gap-4 p-2 border-b">
          <div className="flex items-center gap-2 min-w-[88px]">
            <button
              onClick={() => setIsPlayDetailExpanded(!isPlayDetailExpanded)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isPlayDetailExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            <img src="/timbo-rex.png" alt="logo-timbó-rex" className="w-16 h-16" />
          </div>
          <div className="flex flex-col items-start">
            <div className="text-center text-xl font-bold">Punt</div>
            <div className="text-gray-400 font-bold">3 jogadas, 4 jardas</div>
          </div>
          <div className="flex-1 font-bold text-gray-400">
            <div className="font-bold"></div>
            <div></div>
          </div>
          <div className="font-bold text-gray-400 text-center">
            <div>REX</div>
            <div>0</div>
          </div>
          <div className="font-bold text-gray-400 text-center">
            <div>MAR</div>
            <div>0</div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ${
            isPlayDetailExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          {mockData.PLAYBYPLAY.map((play, idx) => (
            <div key={idx} className="flex items-start gap-4 p-2 border-b">
              <div className="flex flex-col items-center min-w-[88px]">
                <div className="text-center font-bold">{play.tempo}</div>
                <div className="text-xs font-bold text-gray-400">{play.tempo_desc}</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="min-w-[48px]">
                  <img src={play.camisa} alt="camisa-mariners" className="w-12 h-12" />
                </div>
                <div className="font-bold">{play.descricao}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayByPlay;