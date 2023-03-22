const lyrics = 'jonota shagore bole jete chai, muminer konodin porajoy nai. shudiner shopno venge gele klantite, shopner shomadhite shure shrantite...';

const doesExist = lyrics.toLowerCase().includes('mumIn'.toLowerCase());
console.log(doesExist);
console.log(lyrics.indexOf(','));

lyrics.indexOf('porajoy') != -1 ? console.log('exists inside the string') : console.log('Cannot find it');

console.log(lyrics.startsWith ('jon'));

const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log( fileName.endsWith('.pdf'));