'use client'

import { mockData } from '@/data/mock';
import React, { useState } from 'react';
import { MainTab, SubTab } from '@/types';

const GameStatsPage = () => {

  const mainTabs: MainTab[] = ['ESTATÍSTICAS', 'REX', 'MARINERS', 'PLAY BY PLAY', 'MELHORES MOMENTOS'];
  const subTabs: SubTab[] = ['GERAIS', 'PASSE', 'CORRIDA', 'DEFESA'];

  const [activeMainTab, setActiveMainTab] = useState<MainTab>('ESTATÍSTICAS');
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('GERAIS');

  const renderStatsTable = () => {
    if (activeMainTab === 'ESTATÍSTICAS' && mockData.ESTATISTICAS[activeSubTab]) {
      return (
        <div className="space-y-5">
          {Object.entries(mockData.ESTATISTICAS[activeSubTab]).map(([label, values], index) => (
            <div key={label} className="flex items-center">
              <div className="w-32 flex items-center">
                {index === 0 && (
                  <>
                    <img src="/timbo-rex.png" alt="TR" className="w-6 h-6" />
                    <span className="mx-2">REX</span>
                  </>
                )}
                <span className="text-right font-medium ml-auto">{values.rex}</span>
              </div>
              <div className="flex-1 px-6">
                <div className="text-gray-500 text-center">{label}</div>
                <div className="h-px bg-gray-200 my-2"></div>
              </div>
              <div className="w-32 flex items-center">
                <span className="font-medium">{values.mariners}</span>
                {index === 0 && (
                  <>
                    <span className="mx-2">MAR</span>
                    <img src="/recife-mariners.png" alt="MAR" className="w-6 h-6" />
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

  const renderTeamStats = () => {
    if (activeMainTab === 'REX') {
      const teamData = mockData.REX;
      return (
        <div className="space-y-8">
          <section>
            <h3 className="font-bold mb-4 text-xl">PASSANDO</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">JOGADOR</th>
                  <th className="py-2">COMP</th>
                  <th className="py-2">PCT</th>
                  <th className="py-2">JDS</th>
                  <th className="py-2">TD</th>
                  <th className="py-2">INT</th>
                </tr>
              </thead>
              <tbody>
                {teamData.PASSANDO.map((player, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{player.jogador}</td>
                    <td className="py-2">{player.comp}</td>
                    <td className="py-2">{player.pct}%</td>
                    <td className="py-2">{player.jds}</td>
                    <td className="py-2">{player.td}</td>
                    <td className="py-2">{player.int}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h3 className="font-bold mb-4 text-xl">CORRENDO</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">JOGADOR</th>
                  <th className="py-2">ATT</th>
                  <th className="py-2">JDS</th>
                  <th className="py-2">AVG</th>
                  <th className="py-2">TD</th>
                  <th className="py-2">LNG</th>
                </tr>
              </thead>
              <tbody>
                {teamData.CORRENDO.map((player, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{player.jogador}</td>
                    <td className="py-2">{player.att}</td>
                    <td className="py-2">{player.jds}</td>
                    <td className="py-2">{player.avg}</td>
                    <td className="py-2">{player.td}</td>
                    <td className="py-2">{player.lng}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h3 className="font-bold mb-4 text-xl">RECEBENDO</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">JOGADOR</th>
                  <th className="py-2">REC</th>
                  <th className="py-2">JDS</th>
                  <th className="py-2">AVG</th>
                  <th className="py-2">TD</th>
                  <th className="py-2">LNG</th>
                  <th className="py-2">TGT</th>
                </tr>
              </thead>
              <tbody>
                {teamData.RECEBENDO.map((player, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{player.jogador}</td>
                    <td className="py-2">{player.rec}</td>
                    <td className="py-2">{player.jds}</td>
                    <td className="py-2">{player.avg}</td>
                    <td className="py-2">{player.td}</td>
                    <td className="py-2">{player.lng}</td>
                    <td className="py-2">{player.tgt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h3 className="font-bold mb-4 text-xl">DEFENDENDO</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">JOGADOR</th>
                  <th className="py-2">TCL</th>
                  <th className="py-2">FUM</th>
                  <th className="py-2">SCK</th>
                  <th className="py-2">TFL</th>
                  <th className="py-2">INT</th>
                  <th className="py-2">PD</th>
                  <th className="py-2">TD</th>
                </tr>
              </thead>
              <tbody>
                {teamData.DEFENDENDO.map((player, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{player.jogador}</td>
                    <td className="py-2">{player.tkl}</td>
                    <td className="py-2">{player.ast}</td>
                    <td className="py-2">{player.sck}</td>
                    <td className="py-2">{player.tfl}</td>
                    <td className="py-2">{player.int}</td>
                    <td className="py-2">{player.pd}</td>
                    <td className="py-2">{player.td}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h3 className="font-bold mb-4 text-xl">RETORNANDO</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">JOGADOR</th>
                  <th className="py-2">RET</th>
                  <th className="py-2">JDS</th>
                  <th className="py-2">AVG</th>
                  <th className="py-2">LNG</th>
                  <th className="py-2">TD</th>
                </tr>
              </thead>
              <tbody>
                {teamData.RETORNANDO.map((player, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{player.jogador}</td>
                    <td className="py-2">{player.ret}</td>
                    <td className="py-2">{player.jds}</td>
                    <td className="py-2">{player.avg}</td>
                    <td className="py-2">{player.lng}</td>
                    <td className="py-2">{player.td}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h3 className="font-bold mb-4 text-xl">KICKER</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">JOGADOR</th>
                  <th className="py-2">FG</th>
                  <th className="py-2">%</th>
                  <th className="py-2">LNG</th>
                  <th className="py-2">XP</th>
                  <th className="py-2">PTS</th>
                </tr>
              </thead>
              <tbody>
                {teamData.KICKER.map((player, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{player.jogador}</td>
                    <td className="py-2">{player.fg}</td>
                    <td className="py-2">{player.pct}</td>
                    <td className="py-2">{player.lng}</td>
                    <td className="py-2">{player.xp}</td>
                    <td className="py-2">{player.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h3 className="font-bold mb-4 text-xl">PUNTER</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">JOGADOR</th>
                  <th className="py-2">PUN</th>
                  <th className="py-2">AVG</th>
                  <th className="py-2">20</th>
                  <th className="py-2">TB</th>
                  <th className="py-2">LNG</th>
                  <th className="py-2">BLK</th>
                </tr>
              </thead>
              <tbody>
                {teamData.PUNTER.map((player, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{player.jogador}</td>
                    <td className="py-2">{player.punt}</td>
                    <td className="py-2">{player.avg}</td>
                    <td className="py-2">{player.i20}</td>
                    <td className="py-2">{player.tb}</td>
                    <td className="py-2">{player.lng}</td>
                    <td className="py-2">{player.blk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      );
    }
    return null;
  };

  const renderPlayByPlay = () => {
    if (activeMainTab === 'PLAY BY PLAY') {
      return (
        <div className="space-y-4">
          <div className=" p-4 rounded-lg">
            <div className="flex flex-col">
              <div className='text-xs mb-4 flex justify-between'>
                <div>19/02/2025 às 15h:30</div>
                <div>Semifinal Nacional - Liga BFA</div>
                <div>Complexo Esportivo Timbó/SC</div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className='flex justify-center items-center gap-5'>
                  <div>
                    <div className='font-bold text-5xl'>REX</div>
                    <div className='text-xs font-bold'>(6-0)</div>
                  </div>
                  <div className="flex flex-col">
                    <div className='flex items-center gap-5'>
                      <img src="/capacete-timbo-rex.png" alt="Rex" className="w-24 h-20" />
                      <span className=" font-bold border rounded-md py-5 px-7 text-5xl">16</span>
                    </div>
                    <div className='flex justify-end gap-1 mt-1 text-right'>
                      <div className='text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl'>TEMPO</div>
                      <div className='text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl opacity-60'>TEMPO</div>
                      <div className='text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl opacity-60'>TEMPO</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className='font-bold text-xl'>2º & 10</div>
                  <table className="flex flex-col text-[10px]">
                    <thead>
                      <tr className='flex justify-center gap-5'>
                        <th className="text-center w-4">1</th>
                        <th className="text-center w-4">2</th>
                        <th className="text-center w-4">3</th>
                        <th className="text-center w-4">4</th>
                        <th className="text-center w-4">OT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='flex justify-center gap-5'>
                        <td className="text-center w-4">14</td>
                        <td className="text-center w-4">0</td>
                        <td className="text-center w-4">0</td>
                        <td className="text-center w-4">0</td>
                        <td className="text-center w-5 font-bold"></td>
                      </tr>
                      <tr className='flex justify-center gap-5'>
                        <td className="text-center w-4">0</td>
                        <td className="text-center w-4">10</td>
                        <td className="text-center w-4">0</td>
                        <td className="text-center w-4">14</td>
                        <td className="text-center w-4 font-bold"></td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                <div className='flex justify-center items-center gap-5'>
                  <div className='flex flex-col'>
                    <span className="font-bold border rounded-md py-5 px-7 text-5xl">24</span>
                    <div className='flex justify-end gap-1 mt-1 text-right'>
                      <div className='text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl'>TEMPO</div>
                      <div className='text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl'>TEMPO</div>
                      <div className='text-[8px] font-bold text-white bg-blue-600 w-9 text-center rounded-2xl opacity-60'>TEMPO</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="/capacete-recife-mariners.png" alt="Rex" className="w-24 h-20 scale-x-[-1]" />
                    <div>
                      <div className='font-bold text-5xl'>MAR</div>
                      <div className='text-xs font-bold text-right'>(5-1)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full w-2xl my-2 h-40 bg-green-500"></div>

            <div className='font-bold text-2xl'>1º QUARTO</div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-2 border-b">
                <img src="/timbo-rex.png" alt="logo-timbó-rex" width={70} height={70} />
                <div className='flex flex-col items-start'>
                  <div className="text-center text-xl font-bold">Punt</div>
                  <div className='text-gray-400 font-bold'>3 jogadas, 4 jardas</div>
                </div>
                <div className="flex-1 font-bold text-gray-400">
                  <div className="font-bold"></div>
                  <div></div>
                </div>
                <div className='font-bold text-gray-400 text-center'>
                  <div>REX</div>
                  <div>0</div>
                </div>
                <div className='font-bold text-gray-400 text-center'>
                  <div>MAR</div>
                  <div>0</div>
                </div>
              </div>
              {mockData.PLAYBYPLAY.map((play, idx) => (
                <div key={idx} className="flex items-center gap-4 p-2 border-b">
                  <div className='flex flex-col items-center'>
                    <div className="w-240text-center font-bold">{play.tempo}</div>
                    <div className='text-xs font-bold text-gray-400'>{play.tempo_desc}</div>
                  </div>
                  <div className="flex-1 flex items-center gap-4 font-bold ml-3">
                    <img src={play.camisa} alt="camisa-mariners" width={50} height={50} />
                    <div>{play.descricao}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderMelhoresMomentos = () => {
    if (activeMainTab === 'MELHORES MOMENTOS') {
      return (
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/SF2ENJEVP6A"
            title="T-Rex x Mariners - Melhores Momentos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      );
    }
    return null;
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
            <div className="w-[400px] max-h-[650px] p-6 border border-gray-300 rounded-lg flex flex-col justify-start">
              <div className='mb-40'>
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
                  <div className='flex flex-col tracking-[-3px]'>
                    <h2 className="text-4xl font-bold text-gray-400">Rex</h2>
                    <h2 className="text-4xl font-bold">Mariners</h2>
                  </div>
                  <div className='flex flex-col tracking-[-3px]'>
                    <span className="text-4xl text-gray-400 font-bold">16</span>
                    <span className="text-4xl font-bold">24</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full flex flex-col justify-center">
                <div className='-mb-[78px] font-bold'>
                  <div className='border-b'>REX</div>
                  <div>MAR</div>
                </div>
                <div>
                  <table className="flex flex-col">
                    <thead>
                      <tr className='flex justify-center gap-5'>
                        <th className="text-center w-5">1</th>
                        <th className="text-center w-5">2</th>
                        <th className="text-center w-5">3</th>
                        <th className="text-center w-5">4</th>
                        <th className="text-center w-5">F</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='flex justify-center gap-5'>
                        <td className="text-center w-5">14</td>
                        <td className="text-center w-5">0</td>
                        <td className="text-center w-5">0</td>
                        <td className="text-center w-5">0</td>
                        <td className="text-center w-5 font-bold">16</td>
                      </tr>
                      <tr className='flex justify-center gap-5'>
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

            {/* Right Column - Stats */}
            <div className="flex-1">
              {/* Main Navigation */}
              <div className="flex gap-6 mb-6 justify-between rounded-full bg-gray-100 tracking-[-1px]">
                {mainTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveMainTab(tab)}
                    className={`px-4 py-2 rounded-full ${activeMainTab === tab
                      ? 'bg-black text-white'
                      : 'text-gray-500  hover:text-gray-700'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Sub Navigation for ESTATÍSTICAS */}
              {activeMainTab === 'ESTATÍSTICAS' && (
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
              )}

              {/* Dynamic Content */}
              <div className="mt-8 tracking-[-1px]">
                {renderStatsTable()}
                {renderTeamStats()}
                {renderPlayByPlay()}
                {renderMelhoresMomentos()}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
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