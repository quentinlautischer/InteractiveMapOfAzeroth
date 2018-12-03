var audioLib = {
  HellfirePeninsula: new Audio("../Music/Hellfire Peninsula.mp3"),
  Zangarmarsh: new Audio("../Music/Zangarmarsh.mp3"),
  TerokkarForest: new Audio("../Music/Terokkar Forest.mp3"),
  Nagrand: new Audio("../Music/Nagrand.mp3"),
  BladesEdgeMountains: new Audio("../Music/Blades Edge Mountains.mp3"),
  Netherstorm: new Audio("../Music/Netherstorm.mp3"),
  ShadowmoonValley: new Audio("../Music/Shadowmoon Valley.mp3"),
  ShattrathCity: new Audio("../Music/Shattrath City.mp3")
}

$('#img').mapster({
mapKey: 'zone',
fillColor: 'ffffff',
fillOpacity: 0.3,
singleSelect: true,
onClick: function (data) {
  console.log("Clicked " + data.key);
  for(var audio in audioLib){
    audioLib[audio].pause();
    audioLib[audio].fastSeek(0);
  }
  audioLib[data.key].play();
  }
});




