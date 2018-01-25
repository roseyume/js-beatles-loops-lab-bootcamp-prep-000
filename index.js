function theBeatlesPlay(musicians, instruments){
  var empty= [];
  for(var x = 0; x < musicians.length; x++)
  {
  empty.push( musicians[x]+" plays "+ instruments[x]);
  }
  return empty;
}

function johnLennonFacts(facts){
  var newFacts = [];
  while(facts.length>0){
    newFacts.push(facts.pop()+"!!!");
  }
  return newFacts;
}