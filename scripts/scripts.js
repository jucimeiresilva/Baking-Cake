// Botões das Massas
let massaChocolate = document.querySelector('.massa-chocolate');
massaChocolate.addEventListener("click", function () {
    console.log("massaChocolate");
     document.querySelector('.bolo').className = "bolo chocolate";
})


let massaRedVelvet = document.querySelector('.massa-redvelvet');
massaRedVelvet.addEventListener("click", function(){
    console.log("massaRedVelvet");
    document.querySelector('.bolo').className = "bolo red-velvet";
})


let massaBaunilha = document.querySelector('.massa-baunilha');
massaBaunilha.addEventListener("click", function(){
    console.log("massaBaunilha");
    document.querySelector('.bolo').className = "bolo baunilha";
})


// Botões dos Recheios
let recheioAmora = document.querySelector('.recheio-amora');
recheioAmora.addEventListener("click", function(){
    console.log("recheioAmora");
    document.querySelector('.recheio').className = "recheio amora";
})

let recheioMorango = document.querySelector('.recheio-morango');
recheioMorango.addEventListener("click", function(){
    console.log("recheioMorango");
    document.querySelector('.recheio').className = "recheio morango";
})

let recheioAbacaxi = document.querySelector('.recheio-abacaxi');
recheioAbacaxi.addEventListener("click", function(){
    console.log("recheioAbacaxi");
    document.querySelector('.recheio').className = "recheio abacaxi";
})


//Botões das Coberturas
let chantilly = document.querySelector('.chantilly');
chantilly.addEventListener("click", function(){
    console.log("chantilly");
    document.querySelector('.cobertura').className = "cobertura chantilly";

})

let cremeDeManteiga = document.querySelector('.creme-de-manteiga');
cremeDeManteiga.addEventListener("click", function(){
    console.log("cremeDeManteiga");
    document.querySelector('.cobertura').className = "cobertura creme-de-manteiga";

})

let ganache = document.querySelector('.ganache');
ganache.addEventListener("click", function(){
    console.log("ganache");
    document.querySelector('.cobertura').className = "cobertura ganache";

})


//Botões Decoração


    let decoracaoCereja= document.querySelector('.enfeites-cereja');
  decoracaoCereja.addEventListener("click", function(){
        console.log("decoracaoCereja");
    document.querySelector('.decoracao').className = "decoracao cereja";

    })
    
    let decoracaoMorango= document.querySelector('.enfeites-morango');
  decoracaoMorango.addEventListener("click", function(){
        console.log("decoracaoMorango");
    document.querySelector('.decoracao').className = "decoracao morango";

    })

   

    //cronometro

    function paddedFormat(num) {
      return num < 10 ? "0" + num : num; 
  }
  
  function startCountDown(duration, element) {
  
      let secondsRemaining = duration;
      let min = 0;
      let sec = 0;
  
      let countInterval = setInterval(function () {
  
          min = parseInt(secondsRemaining / 60);
          sec = parseInt(secondsRemaining % 60);
  
          element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;
  
          secondsRemaining = secondsRemaining - 1;
          if (secondsRemaining < 0) { clearInterval(countInterval) };
  
      }, 1000);
  }
  
  window.onload = function () {
      let time_minutes = 0; // Value in minutes
      let time_seconds = 20; // Value in seconds
  
      let duration = time_minutes * 60 + time_seconds;
  
      element = document.querySelector('#count-down-timer');
      element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;
  
      startCountDown(--duration, element);

      let myGreeting = setTimeout(function() {
        alert('Game Over!!!');
      }, 20000)

  };


  
  

 