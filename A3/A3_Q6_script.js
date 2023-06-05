//convert To PigLatin
function convertToPigLatin(englishPhrase) {
    let words = englishPhrase.split(" ");
    let pigLatinWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstLetter = word[0];
        let restOfWord = word.slice(1);
        let pigLatinWord = restOfWord + firstLetter + "ay";
        pigLatinWords.push(pigLatinWord);
    }

    return pigLatinWords.join(" ");
}
// print  the pig Latin 
function printLatinWord(word) {
    let pigLatinWord = convertToPigLatin(word);
    let display = document.getElementById("display");
    display.value += pigLatinWord + " ";
}


// convert and  print  
function convertAndPrint() {
    let englishPhrase = document.getElementById("english-phrase").value;
    let words = englishPhrase.split(" ");

    let display = document.getElementById("display");
    display.value += "English: " + englishPhrase + "\n";
    display.value += "Pig Latin: ";

    for (let i = 0; i < words.length; i++) {
        printLatinWord(words[i]);
    }

    display.value += "\n\n";
}
