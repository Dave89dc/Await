
// Async e Await:

async function loadData(){
    // DataService.getData().then(data => console.log(data)); modo solito con then...
    const data = await DataService.getData();
    console.log(data);
}

loadData();


// ESERCIZIO DATOMI DA FARE DA ANDREA:


// Funzione che ritorna true o false se, 
// in base alla lunghezza dei segmenti dati, essi formano un triangolo:

function isTriangle(a, b, c){

    if(a < b + c && b < a + c && c < a + b){
        return true;
    };

}

// Funzione che ritorna true o false se, in base alla lunghezza 
// di vari segmenti presenti in un array, essi formano una figura chiusa:

function isFigure(array){
    for (let i = 0; i < array.length; i++) {
        const segmentsLength = array[i];
        
    }
}; 

// let arrayOfSegmentLength = [10, 5, 10, 5];

// console.log(isFigure(arrayOfSegmentLength));