let map = []

const col = ['a','b','c','d','e','f','g','h','i','j']


for(let i = 0; i < 9; i++){
    // let linha = document.createElement('div') 
    //map.push(i);
    for ( let j = 0; j < 9 ; j++) {
        map.push([i, j])
        // let celula = document.createElement('div')
        // linha.appendChild(celula)
        
    }
    console.log(map);
}


