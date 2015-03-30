function move(numDisks, fromPin, toPin, viaPin) {
  if(numDisks == 1) {
    console.log("Move a disk from " + fromPin + " to " + toPin);
  } else {
    move(numDisks - 1, fromPin, viaPin, toPin);
    move(1, fromPin, toPin, viaPin);
    move(numDisks - 1, viaPin, toPin, fromPin);
  }
}

move(64, "left", "right", "middle");
