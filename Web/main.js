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
fade: false,
singleSelect: true,
render_select: {
    fade: false,
    altImage: '../Maps/OutlandDetailed.jpg'
},
render_highlight: {
    fade: false,
    altImage: '../Maps/OutlandDetailed.jpg'
},

onClick: function (data) {
  console.log("Clicked " + data.key);
  for(var audio in audioLib){
    audioLib[audio].pause();
    audioLib[audio].load();
  }
  audioLib[data.key].play();
  }
});




