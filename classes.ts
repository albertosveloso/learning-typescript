//É possível utilizar classes abstratas q não é possível criar um objeto diretamente dela
class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  logDetails(){
    console.log(`This user is ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string; //Só poderá ser alterado no construtor e nem lido
  level: number; // pode ser somente lido (pode ser utilizado public (explicito), private, protected e readonly)

  constructor(name: string, age: number, nickname: string, level: number){
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }


  //Accessor GET
  get getLevel(){
    console.log("-----GET-----")
    return this.level;
  }

  //Accessor SET
  set setLevel(level: number){
    this.level = level;
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`
    );
  }

}

const beto = new UserAccount("Beto", 22);
console.log(beto);
beto.logDetails();

const carol = new CharAccount("Carol", 19,"Badgirl", 89);
//carol.nickname = 'carolzita'; Não é possível alterar pois nickname é private
console.log(carol);
carol.logDetails();
carol.logCharDetails();

carol.setLevel = 999;

console.log(carol.getLevel); //Não é chamado como método, mas como função o get