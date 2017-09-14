// Chords

var chords = {};

require(['tonal', 'app/keys'],function(tonal,keys){

//import tonal from 'tonal'

// right

createChords = function(octave,type,addLowestTone){
  var val = keys.map(function(inNote){
    // We need to get rid of flats => simplify. We also need to lowercase everything to stay with the schema used in the original implementation
    chordList = Tonal.chord(inNote+octave.toString()+" "+type).map(function(x){return(Tonal.note.simplify(x).toLowerCase())})
    if(addLowestTone){
      chordList.push(Tonal.note.simplify(Tonal.note.name(inNote+(octave-1).toString())).toLowerCase());
    }
    return chordList;
  })

  // fill a dictionairy as output
  out = {};
  for(var k = 0; k<=keys.length;k++){
    out[keys[k]] = val[k];
  }
return out;
}

chords['right'] = {};
chords["right"]["open"] = {}
chords["left"] = {}
chords["left"]["open"] = {}
chords["right"]["open"]['M']  = createChords(2,"M");
chords["right"]["open"]['m']  = createChords(2,"m");
chords["right"]["open"]['M7'] = createChords(2,"M7");
chords["right"]["open"]['m7'] = createChords(2,"m7");
chords["right"]["open"]['7']  = createChords(2,"7");
chords["right"]["open"]['o7'] = createChords(2,"o7");


chords["left"]["open"] = {}
chords["left"]["open"]['M']  = createChords(1,"M",true);
chords["left"]["open"]['m']  = createChords(1,"m",true);
chords["left"]["open"]['M7'] = createChords(1,"M7");
chords["left"]["open"]['m7'] = createChords(1,"m7");
chords["left"]["open"]['7']  = createChords(1,"7");
chords["left"]["open"]['o7'] = createChords(1,"o7");

chords['left']['close'] = chords['left']['open'];
chords['right']['close'] = chords['right']['open'];

});
define(chords);
