// types/index.ts

export interface StatValue {
    rex: string;
    mariners: string;
  }
  
  export interface GeneralStats {
    'Tempo de Posse': StatValue;
    'Drives': StatValue;
    'Jogadas': StatValue;
    'Jardas Totais': StatValue;
    'Jardas por Jogada': StatValue;
    'TDs na Red Zone': StatValue;
    'Jogadas na Red Zone': StatValue;
    '3ª Descida': StatValue;
    '4ª Descida': StatValue;
    'Faltas': StatValue;
  }
  
  export interface PassStats {
    'Jardas Totais': StatValue;
    'Passes Completos': StatValue;
    'Passes Tentados': StatValue;
    'Jardas por Tentativa': StatValue;
    'TDs Passados': StatValue;
  }
  
  export interface RunStats {
    'Jardas Totais': StatValue;
    'Corridas': StatValue;
    'Jardas por Corrida': StatValue;
    'TDs Corridos': StatValue;
  }
  
  export interface DefenseStats {
    'Sacks': StatValue;
    'Fumbles Forçados': StatValue;
    'Interceptações': StatValue;
  }
  
  export interface Statistics {
    GERAIS: GeneralStats;
    PASSE: PassStats;
    CORRIDA: RunStats;
    DEFESA: DefenseStats;
  }
  
  interface Player {
    jogador: string;
  }
  
  export interface PassingPlayer extends Player {
    comp: string;
    pct: string;
    jds: string;
    td: string;
    int: string;
  }
  
  export interface RunningPlayer extends Player {
    att: string;
    jds: string;
    avg: string;
    td: string;
    lng: string;
  }
  
  export interface ReceivingPlayer extends Player {
    rec: string;
    jds: string;
    avg: string;
    td: string;
    lng: string;
    tgt: string;
  }
  
  export interface DefendingPlayer extends Player {
    tkl: string;
    ast: string;
    sck: string;
    tfl: string;
    int: string;
    pd: string;
    td: string;
  }
  
  export interface ReturningPlayer extends Player {
    ret: string;
    jds: string;
    avg: string;
    lng: string;
    td: string;
  }
  
  export interface KickerPlayer extends Player {
    fg: string;
    pct: string;
    lng: string;
    xp: string;
    pts: string;
  }
  
  export interface PunterPlayer extends Player {
    punt: string;
    avg: string;
    i20: string;
    tb: string;
    lng: string;
    blk: string;
  }
  
  export interface TeamStats {
    PASSANDO: PassingPlayer[];
    CORRENDO: RunningPlayer[];
    RECEBENDO: ReceivingPlayer[];
    DEFENDENDO: DefendingPlayer[];
    RETORNANDO: ReturningPlayer[];
    KICKER: KickerPlayer[];
    PUNTER: PunterPlayer[];
  }
  
  export interface PlayByPlayAction {
    tempo: string;
    tempo_desc: string;
    camisa: string;
    descricao: string;
  }
  
  export interface HighlightMedia {
    thumbnail: string;
    video: string;
  }
  
  export interface MockData {
    ESTATISTICAS: Statistics;
    REX: TeamStats;
    MARINERS: TeamStats;
    PLAYBYPLAY: PlayByPlayAction[];
    MELHORESMOMENTOS: HighlightMedia;
  }
  
  export type MainTab = 'ESTATÍSTICAS' | 'REX' | 'MARINERS' | 'PLAY BY PLAY' | 'MELHORES MOMENTOS';
  export type SubTab = 'GERAIS' | 'PASSE' | 'CORRIDA' | 'DEFESA';