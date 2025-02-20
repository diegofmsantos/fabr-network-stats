// components/Tabs/Rex.tsx
import React from 'react';
import { mockData } from '@/data/mock';

export const Rex = () => {
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
};

export default Rex;