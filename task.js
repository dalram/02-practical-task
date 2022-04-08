// 1
function kurisDidesnis(a, b) {
    if (a > b) {
        console.log(`Nurodytas skaicius ${a} didesnis uz skaiciu ${b}`);
    } else if (a < b) {
        console.log(`Nurodytas skaicius ${b} didesnis uz skaiciu ${a}`);
    } else {
        console.log(`Nurodyti skaiciai ${a} ir ${b} lygus`);
    }
}
kurisDidesnis(6, 7);

// 2

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 3
console.log('=============================');
for (let i = 0; i < 11; i += 2) {
    console.log(i);
}

// 4
console.log('=============================');
for (let i = 0; i < 5; i++) {
    console.log(Math.ceil(Math.random() * 10));
}

// 5
console.log('=============================');
let n;
while (n !== 5) {
    n = Math.ceil(Math.random() * 10);
    console.log(n);
    
};

// 6
console.log('=============================');
let masyvas = [10, 25, 29, 11, 12, 17, 22, 16, 25, 13, 28, 11, 12, 17, 22, 16, 25, 13, 30, 11, 12, 22];
function didziausiasSkaicius(a) {
    let n = a[0];
    for (let i = 0; i < a.length; i++){
        const number = a[i];
        if (number > n) {
            n = a[i];
        }
    }
    return console.log(n);
}

didziausiasSkaicius(masyvas);

// 7
console.log('=============================');
let abcd = 'abcdabdcabdcaaaaabdcabcdabdcabdcabdcabdcabcdabdcabdcabdcabdcabcdabdcabdcabdcabdcabcdabdcabdcabdcabdc'

const abcdArray =Array.from(abcd);

console.log(abcdArray.length);
let a = 0;
let b = 0;
let c = 0;
let d = 0;
for (let i = 0; i < abcdArray.length; i++) {
    if (abcdArray[i] === 'a'){
        a++;
    } else if (abcdArray[i] === 'b') {
        b++; 
    } else if (abcdArray[i] === 'c') {
        c++; 
    } else {
        d++;
    }
}
console.log(`a raidziu skaicius: ${a}, b raidziu skaicius: ${b}, c raidziu skaicius: ${c}, d raidziu skaicius: ${d}`);

//  8
console.log('=============================');
function lygineSuma(a, b) {
    let suma = a + b;
    let ilgis = a.length + b.length;
    if (typeof a!== 'number' && typeof a!== 'object') {
        return 'ERROR: nurodyti blogi duomenu tipai';
    }
    if (typeof b!== 'number' && typeof b!== 'object') {
        return 'ERROR: nurodyti blogi duomenu tipai';
    } 
    if (typeof a === 'object' && typeof b === 'number' || typeof b === 'object' && typeof a === 'number') {
        return 'ERROR:'
    }
    if (typeof a === 'number' && typeof b === 'number') {
        if (suma % 2 === 0) {
            return suma;
        } else {
            return 'Suma nelygine';
        }
    }
    if (typeof a === 'object' && typeof b === 'object') {
        if (ilgis % 2 === 0) {
            return ilgis;
        } else {
            return 'Ilgio suma nelygine';
        }
    }
    
}
console.log(lygineSuma('7', 7));
console.log(lygineSuma([7, 8], 7));
console.log(lygineSuma(7, [7]));
console.log(lygineSuma(7, 7));
console.log(lygineSuma(7, 8));
console.log(lygineSuma([7, 8], [7, 9, 20]));
console.log(lygineSuma([7, 8], [7, 9, 20, 5]));


// 9
console.log('=============================');
function pirminisSkaicius(a) {
    let arPirminis = true;
    if (typeof a !== 'number') {
        return 'ERROR'
    }
    if (a === 1) {
        return '1 nera nei pirminis, nei antrinis skaicius';
    }
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            arPirminis = false;
            break;
        }
    
    }
    if (arPirminis === true) {
        return 'Nurodytas skaicius yra pirminis'
    } else {
        return 'Nurodytas skaicius nera pirminis'
    }
};


console.log(pirminisSkaicius('a'));
console.log(pirminisSkaicius(1));
console.log(pirminisSkaicius(2));
console.log(pirminisSkaicius(5));
console.log(pirminisSkaicius(12));
console.log(pirminisSkaicius(13));

// 10
function telefonoNumeris(arr) {
    if (typeof arr !== 'object') {
        return 'Error: funkcijai turi buti pateiktas masyvas';
    }
    if (arr.length !== 10) {
        return 'Error: funkcijai turi buti pateiktas 10 skaiciu masyvas';
    }
    let telNr = '';
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (typeof number !== 'number') {
            return 'Error: Masyva turi sudaryt desimt skaiciu.'
        } 
        if (number >= 10 || number < 0) {
            return 'Error: Visu masyve nurodytu skaiciu reiksmes turi buti nuo 0 iki 9.'
        }
        telNr += number;
    }
    return `(${telNr[0] + telNr[1] + telNr[2]}) ${telNr[3] + telNr[4] + telNr[5]}-${telNr[6] + telNr[7] + telNr[8] + telNr[9]}`;
};

console.log(telefonoNumeris([10, 20, 30, 40, 50, 1, 2, 3, 4]));
console.log(telefonoNumeris([9, 0, 3, 4, 5, 1, 2, 3, 4, 5]));