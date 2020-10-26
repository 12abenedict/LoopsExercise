// 1
for (i = 1; i <= 7; i++){
    console.log(i);   
}

// 2
for (i = 6; i <= 26; i += 4){
    console.log(i);  
}

// 3a
const wizards = [
    `Harry Potter`, 
    `Hermione Granger`, 
    `Ron Weasley`
];
// 3b
for (const list of wizards) {
    console.log(list);
}

// 4a 
let harryPotterMovies = 0;

// 4b
    while (harryPotterMovies < 8){
    harryPotterMovies++;
    console.log(harryPotterMovies);
    };

// Bonus
// 5a
const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
// 5b
        for(letters of hogwartsHouses[0]){
            console.log(letters);  
        }for(letters of hogwartsHouses[1]){
            console.log(letters);  
        }for(letters of hogwartsHouses[2]){
            console.log(letters);  
        }for(letters of hogwartsHouses[3]){
            console.log(letters)
        };  
// 6a 
const quote = [`Yer`, `A`, `Wizard`, `Harry`];
// 6b

for(const quote = 0; i < 3; i += 1 ){
    quote += i + "";
}
console.log(quote);

