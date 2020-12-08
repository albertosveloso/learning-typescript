interface Game {
  id?: string | IDBArrayKey;
  title: string;
  description: string;
  readonly genre: string; //propriedade pode ser apenas lida
  platform?: string[]; //? plataforma é opcional
  getSimilars?: (title:string) => void; //Assinatura de método recebe title como parametro com retorno vazio
}

const gow: Game = {
  title: 'God of War',
  description: 'The Best game in the world',
  genre: 'Action',
  platform: ['PS4' ,'PS5'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: The Witcher 3, Dragon Age, Shadow of Mordor.`);
  }
}

// gow.genre = 'new'; Não funciona pois a propriedade está readonly
console.log(gow.title);
if(gow.getSimilars){ 
  gow.getSimilars(gow.title);
}

//Extendendo de outra interface
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const gowEternal: DLC = {
  title: 'God of War Eternal',
  description: 'Next experience level',
  genre: 'Action',
  platform: ['PS5'],
  originalGame: gow,
  newContent: ['4 hours story', 'new characters'],
};

//Implementar classe baseada em uma interface
class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string){
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}

//Type aliases = objetos pequenos
//Interfaces = objetos grandes