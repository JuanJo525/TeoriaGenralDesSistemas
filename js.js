function Calcular() {

    var Banda1 = parseInt(document.getElementById("Banda1").value);
    var Banda2 = parseInt(document.getElementById("Banda2").value);
    var Banda3 = parseInt(document.getElementById("Banda3").value);
    var Banda4 = parseFloat(document.getElementById("Banda4").value);
    console.log(Banda1);
    console.log(Banda2);
    console.log(Banda3);
    console.log(Banda4);

    // Color(Banda1,Banda2,Banda3,Banda4);

    Vtotal = (Banda1 + Banda2) * Banda3;
    Vmaximo = Vtotal + (Vtotal * Banda4);
    Vminimo = Vtotal - (Vtotal * Banda4);
    
    $('#AAA').html("Valor Total:  " + Vtotal + "Ω");
    $('#AAB').html("Valor Maximo:  " + Vmaximo + "Ω");
    $('#AAC').html("Valor Minimo:  " + Vminimo + "Ω");

    console.log("total ",Vtotal);
    console.log("Maximo ",Vmaximo);
    console.log("minimo ",Vminimo);



 Vtotal = 0;
 Vmaximo = 0;
 Vminimo = 0;

}



var inputElement = document.getElementById("Banda1");
inputElement.addEventListener("change", function() {
    key = parseInt(inputElement.value);

    switch (key) {
        case 0:
            inputElement.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement.classList.add("BGnegro");
            break;




        case 10:
            inputElement.classList.remove("BGw","BGCafe", "BGnegro","BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement.classList.add("BGCafe");
        break;

        
        case 20:
                inputElement.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
                inputElement.classList.add("BGrojo");
        break;

        case 30:
            inputElement.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement.classList.add("BGnaranja");
        break;


        case 40:
            inputElement.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement.classList.add("BGamarillo");
        break;

        case 50:
            inputElement.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement.classList.add("BGverde");
        break;

        case 60:
            inputElement.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement.classList.add("BGazul");
        break;

        case 70:
            inputElement.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement.classList.add("BGmorado");
        break;

        case 80:
            inputElement.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement.classList.add("BGgris");
        break;

    
        default:
            inputElement.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement.classList.add("BGw");
            break;
    }

});




var inputElement2 = document.getElementById("Banda2");
inputElement2.addEventListener("change", function() {
    key2 = parseInt(inputElement2.value);

    switch (key2) {
        case 0:
            inputElement2.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement2.classList.add("BGnegro");
            break;




        case 1:
            inputElement2.classList.remove("BGw","BGCafe", "BGnegro","BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement2.classList.add("BGCafe");
        break;

        
        case 2:
                inputElement2.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
                inputElement2.classList.add("BGrojo");
        break;

        case 3:
            inputElement2.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement2.classList.add("BGnaranja");
        break;


        case 4:
            inputElement2.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement2.classList.add("BGamarillo");
        break;

        case 5:
            inputElement2.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement2.classList.add("BGverde");
        break;

        case 6:
            inputElement2.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement2.classList.add("BGazul");
        break;

        case 7:
            inputElement2.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement2.classList.add("BGmorado");
        break;

        case 8:
            inputElement2.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement2.classList.add("BGgris");
        break;


                

    
        default:
            inputElement2.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement2.classList.add("BGw");
            break;
    }

});



var inputElement3 = document.getElementById("Banda3");
inputElement3.addEventListener("change", function() {
    key3 = parseInt(inputElement3.value);

    switch (key3) {
        case 1:
            inputElement3.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement3.classList.add("BGnegro");
            break;




        case 10:
            inputElement3.classList.remove("BGw","BGCafe", "BGnegro","BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement3.classList.add("BGCafe");
        break;

        
        case 100:
                inputElement3.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
                inputElement3.classList.add("BGrojo");
        break;

        case 1000:
            inputElement3.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement3.classList.add("BGnaranja");
        break;


        case 10000:
            inputElement3.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement3.classList.add("BGamarillo");
        break;

    
        default:
            inputElement3.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement3.classList.add("BGw");
            break;
    }

});


var inputElement4 = document.getElementById("Banda4");
inputElement4.addEventListener("change", function() {
    key4 = parseFloat(inputElement4.value);

    switch (key4) {
       

        case 0.01:
            inputElement4.classList.remove("BGw","BGCafe", "BGnegro","BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement4.classList.add("BGCafe");
        break;

        
        case 0.02:
                inputElement4.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
                inputElement4.classList.add("BGrojo");
        break;

        case 0.005:
            inputElement4.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement4.classList.add("BGverde");
        break;


        case 0.05:
            inputElement4.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement4.classList.add("BGamarillo");
        break;

        case 0.10:
            inputElement4.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement4.classList.add("BGgris");
        break;

    
        default:
            inputElement4.classList.remove("BGw","BGCafe", "BGrojo","BGnaranja","BGamarillo","BGverde","BGazul","BGmorado","BGgris");
            inputElement4.classList.add("BGw");
            break;
    }

});

