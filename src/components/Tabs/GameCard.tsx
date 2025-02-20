// components/GameCard.tsx
import React from 'react';

export const GameCard = () => {
  return (
    <div className="w-[400px] max-h-[650px] p-6 border border-gray-300 rounded-lg flex flex-col justify-start">
      <div className="mb-40">
        <div className="flex justify-center items-center gap-10 mb-4">
          <div className="text-center">
            <img src="/capacete-timbo-rex.png" alt="Rex Helmet" className="w-32 h-24" />
          </div>
          <div className="text-center">
            <img src="/capacete-recife-mariners.png" alt="Mariners Helmet" className="w-32 h-24" />
          </div>
        </div>
        <div className="ml-10">
          <p className="text-sm text-gray-500">Semifinal Nacional</p>
        </div>
        <div className="flex justify-between px-8 mt-4">
          <div className="flex flex-col tracking-[-3px]">
            <h2 className="text-4xl font-bold text-gray-400">Rex</h2>
            <h2 className="text-4xl font-bold">Mariners</h2>
          </div>
          <div className="flex flex-col tracking-[-3px]">
            <span className="text-4xl text-gray-400 font-bold">16</span>
            <span className="text-4xl font-bold">24</span>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full flex flex-col justify-center">
        <div className="-mb-[78px] font-bold">
          <div className="border-b">REX</div>
          <div>MAR</div>
        </div>
        <div>
          <table className="flex flex-col">
            <thead>
              <tr className="flex justify-center gap-5">
                <th className="text-center w-5">1</th>
                <th className="text-center w-5">2</th>
                <th className="text-center w-5">3</th>
                <th className="text-center w-5">4</th>
                <th className="text-center w-5">F</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex justify-center gap-5">
                <td className="text-center w-5">14</td>
                <td className="text-center w-5">0</td>
                <td className="text-center w-5">0</td>
                <td className="text-center w-5">0</td>
                <td className="text-center w-5 font-bold">16</td>
              </tr>
              <tr className="flex justify-center gap-5">
                <td className="text-center w-5">0</td>
                <td className="text-center w-5">10</td>
                <td className="text-center w-5">0</td>
                <td className="text-center w-5">14</td>
                <td className="text-center w-5 font-bold">24</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-8 text-center border-t pt-4 tracking-[-1px]">
            <p className="text-sm">Complexo Esportivo de Timbó,</p>
            <p className="text-sm">Timbó/SC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;