const lyrics = 'jonota shagore bole jete chai, muminer konodin porajoy nai. shudiner shopno venge gele klantite, shopner shomadhite shure shrantite...';
const parts = lyrics.split(' ');
const sentences = lyrics.split ('.');
const chars = lyrics.split('');
console.log(parts);
console.log(sentences);
console.log(chars);

const partial = lyrics.slice(5, 8);
console.log(partial);
const partial2 = lyrics.substring(5, 8);
console.log(partial2);

const lines = ['jonota shagore bole jete chai, muminer konodin porajoy nai',   
'shudiner shopno venge gele klantite, shopner shomadhite shure shrantite'];

const newSong = lines.join('. ');
console.log(newSong);