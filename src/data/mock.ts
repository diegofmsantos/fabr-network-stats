// mocks/index.ts
import { MockData } from '@/types';

export const mockData: MockData = {
  ESTATISTICAS: {
    GERAIS: {
      'Tempo de Posse': { rex: '30:32', mariners: '29:28' },
      'Drives': { rex: '9', mariners: '10' },
      'Jogadas': { rex: '68', mariners: '63' },
      'Jardas Totais': { rex: '374', mariners: '368' },
      'Jardas por Jogada': { rex: '5.5', mariners: '5.8' },
      'TDs na Red Zone': { rex: '3', mariners: '4' },
      'Jogadas na Red Zone': { rex: '3', mariners: '6' },
      '3ª Descida': { rex: '5/14', mariners: '5/9' },
      '4ª Descida': { rex: '4/6', mariners: '1/1' },
      'Faltas': { rex: '6', mariners: '5' }
    },
    PASSE: {
      'Jardas Totais': { rex: '227', mariners: '233' },
      'Passes Completos': { rex: '22', mariners: '18' },
      'Passes Tentados': { rex: '34', mariners: '26' },
      'Jardas por Tentativa': { rex: '6.7', mariners: '9.0' },
      'TDs Passados': { rex: '2', mariners: '1' }
    },
    CORRIDA: {
      'Jardas Totais': { rex: '147', mariners: '135' },
      'Corridas': { rex: '32', mariners: '35' },
      'Jardas por Corrida': { rex: '4.6', mariners: '3.9' },
      'TDs Corridos': { rex: '2', mariners: '3' }
    },
    DEFESA: {
      'Sacks': { rex: '0', mariners: '1' },
      'Fumbles Forçados': { rex: '0', mariners: '1' },
      'Interceptações': { rex: '0', mariners: '0' }
    }
  },
  REX: {
    PASSANDO: [
      {
        jogador: 'Josh Allen',
        comp: '22/34',
        pct: '64.7',
        jds: '227',
        td: '2',
        int: '0'
      }
    ],
    CORRENDO: [
      {
        jogador: 'James Cook',
        att: '15',
        jds: '85',
        avg: '5.5',
        td: '2',
        lng: '23'
      },
      {
        jogador: 'Josh Allen',
        att: '8',
        jds: '55',
        avg: '6.2',
        td: '0',
        lng: '15'
      },
      {
        jogador: 'Ty Johnson',
        att: '6',
        jds: '15',
        avg: '2.5',
        td: '0',
        lng: '8'
      },
      {
        jogador: 'Roy Davis',
        att: '3',
        jds: '4',
        avg: '1.3',
        td: '0',
        lng: '4'
      }
    ],
    RECEBENDO: [
      {
        jogador: 'Mack Hollins',
        rec: '5',
        jds: '75',
        avg: '15.0',
        td: '1',
        lng: '25',
        tgt: '6'
      },
      {
        jogador: 'James Cook',
        rec: '4',
        jds: '55',
        avg: '13.8',
        td: '0',
        lng: '18',
        tgt: '5'
      },
      {
        jogador: 'Khalil Shakir',
        rec: '4',
        jds: '45',
        avg: '11.3',
        td: '0',
        lng: '15',
        tgt: '7'
      },
      {
        jogador: 'Dawson Knox',
        rec: '3',
        jds: '35',
        avg: '11.7',
        td: '0',
        lng: '14',
        tgt: '4'
      },
      {
        jogador: 'Dalton Kincaid',
        rec: '2',
        jds: '25',
        avg: '12.5',
        td: '0',
        lng: '15',
        tgt: '3'
      }
    ],
    DEFENDENDO: [
      {
        jogador: 'Mack Hollins',
        tkl: '8',
        ast: '3',
        sck: '1',
        tfl: '2',
        int: '0',
        pd: '0',
        td: '0'
      },
      {
        jogador: 'James Cook',
        tkl: '6',
        ast: '2',
        sck: '0',
        tfl: '1',
        int: '0',
        pd: '0',
        td: '0'
      },
      {
        jogador: 'Khalil Shakir',
        tkl: '5',
        ast: '2',
        sck: '0',
        tfl: '0',
        int: '0',
        pd: '0',
        td: '0'
      },
      {
        jogador: 'Amari Cooper',
        tkl: '4',
        ast: '2',
        sck: '0',
        tfl: '0',
        int: '0',
        pd: '0',
        td: '0'
      }
    ],
    RETORNANDO: [
      {
        jogador: 'Roy Davis',
        ret: '2',
        jds: '35',
        avg: '17.5',
        lng: '20',
        td: '0'
      },
      {
        jogador: 'Khalil Shakir',
        ret: '1',
        jds: '15',
        avg: '15.0',
        lng: '15',
        td: '0'
      }
    ],
    KICKER: [
      {
        jogador: 'TJ Bass',
        fg: '1/1',
        pct: '100',
        lng: '45',
        xp: '2/2',
        pts: '5'
      }
    ],
    PUNTER: [
      {
        jogador: 'TJ Bass',
        punt: '3',
        avg: '44.0',
        i20: '2',
        tb: '0',
        lng: '55',
        blk: '0'
      }
    ]
  },
  MARINERS: {
    PASSANDO: [
      {
        jogador: 'Tom Brady',
        comp: '18/26',
        pct: '69.2',
        jds: '233',
        td: '1',
        int: '0'
      }
    ],
    CORRENDO: [
      {
        jogador: 'Derrick Henry',
        att: '20',
        jds: '95',
        avg: '4.8',
        td: '2',
        lng: '28'
      },
      {
        jogador: 'Tom Brady',
        att: '3',
        jds: '12',
        avg: '4.0',
        td: '0',
        lng: '6'
      },
      {
        jogador: 'Tony Pollard',
        att: '12',
        jds: '28',
        avg: '2.3',
        td: '1',
        lng: '8'
      }
    ],
    RECEBENDO: [
      {
        jogador: 'Mike Evans',
        rec: '6',
        jds: '89',
        avg: '14.8',
        td: '1',
        lng: '32',
        tgt: '8'
      },
      {
        jogador: 'Chris Godwin',
        rec: '5',
        jds: '65',
        avg: '13.0',
        td: '0',
        lng: '22',
        tgt: '6'
      },
      {
        jogador: 'Derrick Henry',
        rec: '4',
        jds: '45',
        avg: '11.3',
        td: '0',
        lng: '18',
        tgt: '5'
      },
      {
        jogador: 'Tony Pollard',
        rec: '3',
        jds: '34',
        avg: '11.3',
        td: '0',
        lng: '15',
        tgt: '4'
      }
    ],
    DEFENDENDO: [
      {
        jogador: 'Devin White',
        tkl: '10',
        ast: '2',
        sck: '1',
        tfl: '2',
        int: '0',
        pd: '0',
        td: '0'
      },
      {
        jogador: 'Lavonte David',
        tkl: '8',
        ast: '3',
        sck: '0',
        tfl: '1',
        int: '0',
        pd: '1',
        td: '0'
      },
      {
        jogador: 'Antoine Winfield Jr.',
        tkl: '6',
        ast: '1',
        sck: '0',
        tfl: '0',
        int: '0',
        pd: '2',
        td: '0'
      }
    ],
    RETORNANDO: [
      {
        jogador: 'Tony Pollard',
        ret: '3',
        jds: '68',
        avg: '22.7',
        lng: '32',
        td: '0'
      }
    ],
    KICKER: [
      {
        jogador: 'Ryan Succop',
        fg: '3/3',
        pct: '100',
        lng: '48',
        xp: '3/3',
        pts: '12'
      }
    ],
    PUNTER: [
      {
        jogador: 'Jake Camarda',
        punt: '4',
        avg: '46.5',
        i20: '2',
        tb: '0',
        lng: '58',
        blk: '0'
      }
    ]
  },
  PLAYBYPLAY: [
    {
      tempo: 'Kickoff',
      tempo_desc: 'MAR35',
      camisa: '/camisa-recife-mariners-0.png',
      descricao: 'Chute de 65 jardas de Douglas Soares da linha de 35 do MAR até a End Zone do REX. Touchback.'
    },
    {
      tempo: '1ª & 10',
      tempo_desc: 'REX30',
      camisa: '/camisa-timbo-rex-0.png',
      descricao: 'Corrida de 4 jardas de Romário Reis. Tackleado por Samuel Braz na linha de 34 jardas de defesa.',
    }
  ],
  MELHORESMOMENTOS: {
    thumbnail: '/thumbnail-highlights.jpg',
    video: '/game-highlights.mp4'
  }
};