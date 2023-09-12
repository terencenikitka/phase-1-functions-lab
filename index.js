function distanceFromHqInBlocks(block) {
    if (block<42){return 42-block}
    return block-42
  }
  function distanceFromHqInFeet(blocks) {
   return distanceFromHqInBlocks(blocks)*264 
    
  }
  function distanceTravelledInFeet(start, destination) {
    if (start>destination)return (start-destination)*264
    return (destination-start)*264
  }
  function calculatesFarePrice(start, destination) {
    let distance
    if (start>destination){
         distance = (start-destination)*264
    }
    else{ 
         distance = (destination-start)*264
    }
    if (distance>2500){return 'cannot travel that far'}
    else if (distance>2000){return 25}
    else if (distance>400){return (distance-400)*0.02}
    else return 0
  }