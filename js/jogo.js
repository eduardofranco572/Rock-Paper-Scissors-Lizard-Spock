// Cumputer 

var elementos = ['tesoura', 'papel', 'pedra', 'lagarto', 'spoke']
var random = Math.floor(Math.random() * 100) % elementos.length
var random_elementos = elementos[random]

// eventos de click

$("#click-btn-t").click(function() {
    $(".game").hide()
    $(".game2").css("display", "flex")
    $("#btn-escolhe").removeClass()
    $("#btn-escolhe").toggleClass("tesoura")
    $("footer").css("display", "none")
    tempoPulso()

})

$("#click-btn-pa").click(function() {
    $(".game").hide()
    $(".game2").css("display", "flex")
    $("#btn-escolhe").removeClass()
    $("#btn-escolhe").toggleClass("papel")
    $("footer").css("display", "none")
    tempoPulso()
})

$("#click-btn-pe").click(function() {
    $(".game").hide()
    $(".game2").css("display", "flex")
    $("#btn-escolhe").removeClass()
    $("#btn-escolhe").toggleClass("pedra")
    $("footer").css("display", "none")
    tempoPulso()

})

$("#click-btn-la").click(function() {
    $(".game").hide()
    $(".game2").css("display", "flex")
    $("#btn-escolhe").removeClass()
    $("#btn-escolhe").toggleClass("lagarto")
    $("footer").css("display", "none")
    tempoPulso()

})

$("#click-btn-sp").click(function() {
    $(".game").hide()
    $(".game2").css("display", "flex")
    $("#btn-escolhe").removeClass()
    $("#btn-escolhe").toggleClass("spoke")
    $("footer").css("display", "none")
    tempoPulso()

})


function tempoPulso() {
    $("#btn-comp").removeClass()
    $("#btn-comp").toggleClass("btn-pulse")

    setTimeout(function() {
        tempoVerOp()
    }, 5000);
}

function tempoVerOp() {
    $("#btn-comp").removeClass().addClass(random_elementos);
    ResutadoJogo()
}


// resultado do jogo

const resultados = {
    "tesoura": {
      "tesoura": "draw",
      "papel": "you win",
      "pedra": "you lose",
      "lagarto": "you win",
      "spoke": "you lose"
    },
    "papel": {
      "tesoura": "you lose",
      "papel": "draw",
      "pedra": "you win",
      "lagarto": "you lose",
      "spoke": "you win"
    },
    "pedra": {
        "tesoura": "you win",
        "papel": "you lose",
        "pedra": "draw",
        "lagarto": "you win",
        "spoke": "you lose"
    },
    "lagarto": {
        "tesoura": "you lose",
        "papel": "you win",
        "pedra": "you lose",
        "lagarto": "draw",
        "spoke": "you win"
    },
    "spoke": {
        "tesoura": "you win",
        "papel": "you lose",
        "pedra": "you win",
        "lagarto": "you lose",
        "spoke": "draw"
    },
    
  };
  
let contador = 0

function ResutadoJogo() {

    function novoElementoAleatorio() {
        var random = Math.floor(Math.random() * 100) % elementos.length;
        random_elementos = elementos[random];
    }
    
    const jogadorEscolha = $("#btn-escolhe").attr("class");
    const computerEscolha = $("#btn-comp").attr("class");

    const resultado = resultados[jogadorEscolha][computerEscolha];

    const result = `
        <div class="elemento-resp" id="elementoresp">
            <h1>${resultado.toUpperCase()}</h1>
            <button id="buttondenovo">PLAY AGAIN</button>
        </div>
    `
    $('.resposta').append(result);



    $("#buttondenovo").click(function() {
        $(".game").css("display", "flex")
        $("#elementoresp").remove() 
        $(".game2").hide()
        $("footer").css("display", "block")
        novoElementoAleatorio();
        $("#btn-comp").removeClass().addClass(random_elementos);  
    })

    if (resultado === "you win") {
        contador++;
    }

    if (resultado === "you lose") {
        contador--;
    }
    $('#pontos').html(contador);
    
}

$("#Reset").click(function() {
    contador = 0
    $('#pontos').html(contador);
})

