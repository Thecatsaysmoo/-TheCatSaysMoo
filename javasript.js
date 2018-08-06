var animal=document.getElementById('animalPic');
//alert(animal.innerHTML);

animal.onclick= function(){
  var animalSounds=['moo.','quack.','oink.','woof.','caw.'];

var beginningOfPhrase = 'The cat says ';
var sound;

var randomIndex = Math.floor(Math.random() * animalSounds.length)
sound= animalSounds[randomIndex];
alert(beginningOfPhrase + sound);






};
