// === Ecexcitiul nr.1,2 ===

let obj = { 
    nume: 'John',
    varsta: 30, 
    oras: 'New York' 
}

let key = 'varsta';
let checkKey = verifyKeyObj (obj, key);

function verifyKeyObj (obj, key){
    return obj.hasOwnProperty(key);
}

console.log (checkKey)



// === Exercitiul nr. 3 ===

const arr = 'Salut, ma numesc Maria';
let result = numarulVocale(arr);

function numarulVocale(arr) {
    
    let vocale = arr.match(/[aeiouAEIOU]/g);
     
    if (vocale === null) {
        return 0;
    }
    return vocale.length;
}

console.log(result);

// =================Intrebarea 1: de ce nu lucreaza daca declar vocale ca in modul mai jos? Am primit rezultatul 12.======================

//     //   let vocale = arr.match(/['a', 'o', 'e', 'i', 'u', 'A', 'E','I','O', 'U']/g);


// ==================Intrebarea 2: intelegca asa ar trebui sa lucreze, dar imi apare eroare peste eroare======================= 
// const arr = 'Salut, ma numesc Maria';
// let result = numarulVocale(arr);

// const func (arr, result) => {
// let vocale = ['a', 'o', 'e', 'i', 'u', 'A', 'E','I','O', 'U'];

//     result = 0;
 
//   for (let i = 0; i <= vocale.lenght; i++) if (result[i]=== vocale) result++
 
//   return result
// }
//   console.log(result);


// ====Exercitiul nr.4====

const note = {
    John: [8, 7, 9],
    Mary: [9, 9, 10],
    Alex: [6, 8, 7]
};

let result = media (note);


function media(studenti) {
    let result = Object.keys(studenti).reduce(function(acс, numeStudent) {
        let note1 = studenti[numeStudent];
        let sumaNotelor = note1.reduce((a, b) => a + b, 0);
        let media = sumaNotelor / note1.length;
        media = media.toFixed(2);
        acс[numeStudent] = 'Medie: ' + media;
        return acс;
    }, {});

    return result;
}

console.log(result);



// === Exercitiul nr.5 ===

const arr = 'Hello World!'
const output = inversat (arr)

function inversat(arr) {
    return arr.split('').reverse().join('')
}

console.log(output)



// ====Exercitiul nr.6======

const word = 'level';
let result = Palindrom(word);

function Palindrom(arr) {
   
    let invers = arr.split('').reverse().join('');
    
    return arr === invers;
}

console.log(result); 



// === Exercitiul nr. 7 ===

const k = 10;

let arr = [222, 8, 16, 4, 3664, 15, 19, 78];
let result = findBestMatch (k, arr);


function findBestMatch (k, arr) {
    if (arr.length === 0) {
        return null;
    }

    let Apropiat = arr[0];
    let difMinima = Math.abs(k - arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let dif = Math.abs(k - arr[i]);
        if (dif < difMinima) {
            Apropiat = arr[i];
            difMinima = dif;
        }
    }

    return Apropiat;
}

console.log(result);



// ==== Exercitiul nr.8 ====

const arr = [4,3,5,6,1,8,2,9]
let output = sortare(arr)

function sortare(arr) {
    let impare = arr.filter(num => num % 2 !== 0).sort((a,b)=>a-b);

    let pare = arr.filter(num => num % 2 === 0).sort((a,b)=>b-a);

   let result = impare.concat(pare);
    return result
}

console.log(output)
