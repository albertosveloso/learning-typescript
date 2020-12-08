//accountInfo
//charInfo

//Estendendo Type Aliases com Intersection

type AccountInfo = {
  id: number;
  name: string;
  email?: string;  //não é obrigatorio
}

const account: AccountInfo = {
  id: 1,
  name: 'Beto'
}

type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  nickname: 'Betim',
  level: 100
}

//insersection (juntar os dois tipos)
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 1,
  name: 'Beto',
  nickname: 'Betim',
  level: 100
}