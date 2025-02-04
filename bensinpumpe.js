window.onload = oppstart;

function oppstart(){
    document.querySelector("#regnUtKnapp").onclick = beregn;
}

function beregn(){
    let liter = document.querySelector("#liter").value;
    let pris = 22.57;

    if(liter > 80){
        document.querySelector("#utskrift").innerHTML = "Du har ikke nok plass i tanken din";
    }

    else if((liter > 0) & (liter < 5)){
        document.querySelector("#utskrift").innerHTML = "Vi selger ikke så lite";
    }
    else if(liter<=0){ 
        document.querySelector("#utskrift").innerHTML = "Skriv inn et positivt tall større enn 5"
    }
    else if(liter > 50){
        let betaling = liter * pris * 0.9;
        document.querySelector("#utskrift").innerHTML = betaling;

    }
    else{
        let betaling = liter * pris;
        document.querySelector("#utskrift").innerHTML = betaling;
    }

    let kvittering = "Takk for kjøp";
    document.querySelector("#kvittering").innerHTML = kvittering;   
}