window.onload = () => {
    const race = {
      tick: 0,
      hare: 0,
      tortoise: 0,
    };
  
    // Generate random positions for the hare and tortoise
    const tortoiseRand = (min, max) => Math.random() * (max - min) + min;
  
    const printPositions = () => {
      console.log(new Array(70).fill(" ").map((val, idx) => {
        if (idx === race.tortoise) {
          return "T";
        } else {
          return idx === race.hare ? "H" : val;
        }
      }).join(""));
    };
  
    // Update the tortoise position based on the random number generated
    const handleTortoise = () => {
      const tortoiseMove = tortoiseRand(0, 10);
      if (tortoiseMove <= 5) {
        race.tortoise += 3;
      } else if (tortoiseMove <= 7) {
        race.tortoise = Math.max(race.tortoise - 6, 1);
      } else {
        race.tortoise += 1;
      }
    };
  // Update the hare position based on the random number generated
    const handleHare = () => {
      const hareMove = tortoiseRand(0, 10);
      if (hareMove <= 2) {
        // hare rests
      } else if (hareMove <= 4) {
        race.hare += 9;
      } else if (hareMove <= 5) {
        race.hare += 12;
      } else if (hareMove <= 8) {
        race.hare += 1;
      } else {
        race.hare += 2;
      }
    };
  // Check for win conditions
    const checkWinner = () => {
      let winner = false;
      if (race.hare >= 70 && race.tortoise >= 70) {
        console.log("IT’S A TIE.");
        winner = true;
      } else if (race.hare >= 70) {
        console.log("HARE WINS. YUCK!");
        winner = true;
      } else if (race.tortoise >= 70) {
        console.log("TORTOISE WINS!!! YAY!!!");
        winner = true;
      }
      return winner;
    };
  
    start_button.onclick = () => {
      start_button.disabled = true;
      // Log the race starting message
      console.log(`ON YOUR MARK, GET SET\nBANG!!!\nAND THEY'RE OFF!!!`);
      const interval = setInterval(() => {
        race.tick++;
        handleTortoise();
        handleHare();
        if (race.hare === race.tortoise) {
          console.log("OUCH!!!");
        } else {
          printPositions();
        }
        if (checkWinner()) {
          clearInterval(interval);
          console.log(`Time elapsed: ${race.tick}`);
        }
      }, 1000);
    };
  };
  
  