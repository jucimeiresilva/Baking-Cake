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
let decoracaoChocolate= document.querySelector('.enfeites-chocolate');
  decoracaoChocolate.addEventListener("click", function(){
        console.log("decoracaoChocolate");
    document.querySelector('.decoracao').className = "decoracao chocolate";

    })

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

    let decoracaoChantilly= document.querySelector('.enfeites-chantilly');
  decoracaoChantilly.addEventListener("click", function(){
        console.log("decoracaoChantilly");
    document.querySelector('.decoracao').className = "decoracao chantilly";

    })



