// Type Aliases para não ter que ficar escrevendo várias vezes
type Uid = number | string;  // o uso do | é o Union (ou)

function logDetails(uid: Uid | string, item: string){
  console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: number | string, user: string){
  console.log(`A user with ${uid} has a name as ${user}.`)
}

//Type Aliases
type Platform = 'Windows' | 'Linux' | 'Mac OS' | 'ios';

function renderPlatform(platform: Platform){
  return platform;
}

renderPlatform("Linux");


logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "William");
logInfo("123", "William");

