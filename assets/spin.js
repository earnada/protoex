// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const back= document.querySelector('.back')
  let deg = 0;


  startButton.addEventListener('click', () => {
    var audio = new Audio('sound.mp3');
    audio.play();
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    //deg =40 ;
    // Set the transition on the wheel
    wheel.style.transition = 'all 10s ease ';
    back.style.transition = 'all 14s ease-out';
    
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
    back.classList.add('rainbow');
  });
  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    back.classList.remove('rainbow');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    
    
    // var element = document.getElementById("result");
    let resultSpin = document.querySelector('#resultSpin')
    
    
    if (actualDeg>=0 && actualDeg<10 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=10 && actualDeg<20 ){
      resultSpin.innerHTML = 1
    }
    if (actualDeg>=20 && actualDeg<30 ){
      resultSpin.innerHTML = 1
    }
    if (actualDeg>=30 && actualDeg<39 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=39 && actualDeg<49 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=49 && actualDeg<59 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=59 && actualDeg<69 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=69 && actualDeg<78 ){
      resultSpin.innerHTML = 3
    }
    if (actualDeg>=78 && actualDeg<88 ){
      resultSpin.innerHTML = 3
    }
    if (actualDeg>=88 && actualDeg<98 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=98 && actualDeg<107 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=107 && actualDeg<117 ){
          resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=117 && actualDeg<127 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=127 && actualDeg<137 ){
          resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=137 && actualDeg<146 ){
      resultSpin.innerHTML = 6
    }
    if (actualDeg>=146 && actualDeg<156 ){
          resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=156 && actualDeg<166 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=166 && actualDeg<176 ){
          resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=176 && actualDeg<185 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=185 && actualDeg<195 ){
          resultSpin.innerHTML = 23
    }
    if (actualDeg>=195 && actualDeg<205 ){
      resultSpin.innerHTML = 2
    }
    if (actualDeg>=205 && actualDeg<215 ){
          resultSpin.innerHTML = 2
    }
    if (actualDeg>=215 && actualDeg<224 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=224 && actualDeg<234 ){
          resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=234 && actualDeg<244 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=244 && actualDeg<253 ){
          resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=253 && actualDeg<263 ){
      resultSpin.innerHTML = 4
    }
    if (actualDeg>=263 && actualDeg<273 ){
          resultSpin.innerHTML = 34
    }
    if (actualDeg>=273 && actualDeg<283 ){
      resultSpin.innerHTML = 4
    }
    if (actualDeg>=283 && actualDeg<292 ){
          resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=292 && actualDeg<302 ){
      resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=302 && actualDeg<312 ){
          resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=312 && actualDeg<322 ){
      resultSpin.innerHTML = 5
    }
    if (actualDeg>=322 && actualDeg<331 ){
          resultSpin.innerHTML = 5
    }
    if (actualDeg>=331 && actualDeg<341 ){
      resultSpin.innerHTML = "Zonk"
     }
    if (actualDeg>=341 && actualDeg<350 ){
          resultSpin.innerHTML = "Zonk"
    }
    if (actualDeg>=350 && actualDeg<360 ){
      resultSpin.innerHTML = "Zonk"
    }

  
    console.log(actualDeg);
  }
  );
})();
