// Chapters 38-42

// Task no1
/* function calculatePower(nuMber, power){
    if(power == 0){
        alert(nuMber + " raise to power " + power + " is " + 1);
        return;
    }
    else if(power == 1){
        alert(nuMber + " raise to power " + power + " is " + nuMber);
        return; 
    }
    else{
        var poweredNuMber = nuMber;
        for(var i = 0; i < power - 1; i++){
            poweredNuMber *= nuMber;
        }
        alert(nuMber + " raise to power " + power + " is " + poweredNuMber);
    }
}
calculatePower(12, 3); */

// Task no2
/* function checkLeapYear(year){
    var date = new Date();
    date.setFullYear(year);
    date.setMonth(1);
    date.setDate(29);
    if(date.getMonth() == 1){
        alert("This is a leap year");
    }
    else{
        alert("This is not a leap year");
    }
}
var year = parseInt(prompt("Please enter any year"));
if(isNaN(year)){
    alert("Please enter a valid year");
}
else{
    checkLeapYear(year);
} */


// Task no3
/* function calculateAreaOfTriangle(){
    var side1 = 3, side2 = 5, side3 = 6;
    var S = calculate_S().toFixed(2);
    function calculate_S(){
        return (side1 + side2 + side3) / 2;
    }
    var area = S*(S - side1)*(S - side2)*(S - side3);
    alert("Area of triangle is " + area);
}
calculateAreaOfTriangle(); */

// Task no4
/* function MainFunction(subOneMarkS, subTwoMarkS, subThreeMarkS){
    function calculatePercentage(){
        class Studentreport{
            constructor(percentage, average){
                this.percentage = percentage;
                this.average = average;
            }
        }
        function calcAverageMarkS(){
            return ((subOneMarkS + subTwoMarkS + subThreeMarkS) / 3).toFixed(2);
        }
        var studentAverageMarkS = calcAverageMarkS();
        var studentPercentage = (((subOneMarkS + subTwoMarkS + subThreeMarkS) / 300) * 100).toFixed(2);
        return new Studentreport(studentPercentage, studentAverageMarkS);
    }
    var studentReport = calculatePercentage();
    alert("Student percentage is: " + studentReport.percentage + "%\nStudent average MArkS are: " + studentReport.average);
}
MainFunction(78, 85, 82); */

// Task no5
/* function custoMIndexOf(str, char){
    var charNotFound = true;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) == char){
            return i;
        }
    }
    if(charNotFound){
        return -1;
    }
}
char = "i";
var index = custoMIndexOf("Pakistan", char);
alert("Index of " + char + " is " + index); */

// Task no6
/* function deleteAllVowels(str){
    str = str.toLowerCase();
    alert("String with vowels: " + str);
    str = str.replace(/a/g, "");
    str = str.replace(/e/g, "");
    str = str.replace(/i/g, "");
    str = str.replace(/o/g, "");
    str = str.replace(/u/g, "");
    alert("String without vowels: " + str);
}
deleteAllVowels("a vowElS i"); */

// Task no7
/* function findtwoSuccessiveVowels(sentence){
    var vowels = [];
    for(var i = 0; i < sentence.length - 1; i++){
        var char = sentence.charAt(i);
        var nextChar = sentence.charAt(i + 1);
        var teMpStr = "";
        var isPreviousAlphabetVowel = false;
        switch(char){
            case "a":
            case "A":
                teMpStr += char;
                isPreviousAlphabetVowel = true;
                break;
            case "e":
            case "E":
                teMpStr += char;
                isPreviousAlphabetVowel = true;
                break;
            case "i":
            case "I":
                teMpStr += char;
                isPreviousAlphabetVowel = true;
                break;
            case "o":
            case "O":
                teMpStr += char;
                isPreviousAlphabetVowel = true;
                break;
            case "u":
            case "U":
                teMpStr += char;
                isPreviousAlphabetVowel = true;
                break;        
        }
        if(isPreviousAlphabetVowel){
        switch(nextChar){
            case "a":
            case "A":
                teMpStr += nextChar;
                break;
            case "e":
            case "E":
                teMpStr += nextChar;
                break;
            case "i":
            case "I":
                teMpStr += nextChar;
                break;
            case "o":
            case "O":
                teMpStr += nextChar;
                break;
            case "u":
            case "U":
                teMpStr += nextChar;
                break;        
        }
    }
        if(teMpStr.length >= 2){
            vowels.push(teMpStr);
        }
    }
    if(vowels.length > 0){
        alert("Successive vowels in sentence " + sentence + " are\n" + vowels);
    }
    else{
        alert("There are no successive vowels in sentence");
    }
}
findtwoSuccessiveVowels("Pleases read this application and give me gratuity"); */

// Task no8
/* function convertToMeterS(kiloMeterS){
    alert("distance travel in MeterS is " + kiloMeterS * 1000);
}
function convertToFeets(kiloMeterS){
    alert("distance travel in FeetS is " + (kiloMeterS * 3280.84).toFixed(2));
}
function convertToInches(kiloMeterS){
    alert("distance travel in Inches is " + (kiloMeterS * 39370.1).toFixed(2));
}
function convertToCentiMeterS(kiloMeterS){
    alert("distance travel in CentiMeterS is " + kiloMeterS * 100000);
}
var distance = parseInt(prompt("Enter distance between any two cities in kilo Meters"));
if(isNaN(distance)){
    alert("Please enter a valid distance in kilo MeterS");
}
else{
    convertToMeterS(distance);
    convertToFeets(distance);
    convertToInches(distance);
    convertToCentiMeterS(distance);
} */

// Task no9
/* function calculateOvertiMePayMent(){
    alert("Enter overtiMe hours like this let's aSSuMe eMployee have worked 3 hours overtiMe\nso enter overtiMe hours like this 3.00\nplease first Mention hours than place dot than after dot please Mention Minutes in 2 digits like 3.45");
    var regex = /^[0-9]{1,16}\.[0-9]{2}$/;
    var overtiMeRate = 12;
    var basicSalary = 25000;
    var overtiMeHours = prompt("Enter total nuMber of overtiMe hours that eMployee have worked");
    if(regex.test(overtiMeHours)){
        var dotIndex = overtiMeHours.indexOf(".");
        var Minutes = overtiMeHours.slice(dotIndex + 1);
        if(Minutes == "00"){
            var totalSalary = (basicSalary + overtiMeRate * parseInt(overtiMeHours)).toFixed(2);
            alert("Your total salary is " + totalSalary);
        }
        else if(Minutes < "60"){
            var percentMinutes = (parseInt(Minutes) / 60) * 100;
            var overtiMeRateInMinutes = (percentMinutes * overtiMeRate) / 100;
            var totalSalary = (basicSalary + overtiMeRate * parseInt(overtiMeHours) + overtiMeRateInMinutes).toFixed(2);
            alert("Your total salary is " + totalSalary);
        }
        else{
            alert("You have enter invalid nuMber of Minutes");
        }
    }
    else{
        alert("Please give the overtiMe hours according to the forMat");
    }
    
}
calculateOvertiMePayMent(); */

// Task no10
/* function withdrawMoney(){
    var regex = /^[0-9]{3}$/;
    var aMount = prompt("Enter aMount to withdraw but you are allowed to enter three digits only");
    if(regex.test(aMount)){
        var digitsInAMount = aMount.length;
        if(digitsInAMount == 3){
            var hunderedNotes = aMount.charAt(0);
            if((parseInt(hunderedNotes) * 100) == aMount){
                alert("You will have " + hunderedNotes + " hundered notes");
            }
            else{
                var tens = aMount.charAt(1);
                var ones = aMount.charAt(2);
                if(tens == "5" && ones == "0"){
                    alert("You will have " + hunderedNotes + " hundered notes, 1 fifty note");
                }
                else if(tens == "5" && ones != "0"){
                    alert("You will have " + hunderedNotes + " hundered notes, 1 fifty note but we cannot give you the reMaining aMount because we only have 100, 50 and 10 denoMinations in currency");
                }
                else if(tens < "5"){
                    if(ones == "0"){
                        switch(tens){
                            case "1":
                                alert("You will have " + hunderedNotes + " hundered notes, 1 ten note");
                                break;
                            case "2":
                                alert("You will have " + hunderedNotes + " hundered notes, 2 ten notes");
                                break;
                            case "3":
                                alert("You will have " + hunderedNotes + " hundered notes, 3 ten notes");
                                break;
                            case "4":
                                alert("You will have " + hunderedNotes + " hundered notes, 4 ten notes");
                                break;    
                        }
                    }
                    else{
                        switch(tens){
                            case "0":
                                alert("You will have " + hunderedNotes + " hundered notes but we cannot give you the reMaining aMount because we only have 100, 50 and 10 denoMinations in currency");
                                break;
                            case "1":
                                alert("You will have " + hunderedNotes + " hundered notes, 1 ten note but we cannot give you the reMaining aMount because we only have 100, 50 and 10 denoMinations in currency");
                                break;
                            case "2":
                                alert("You will have " + hunderedNotes + " hundered notes, 2 ten notes but we cannot give you the reMaining aMount because we only have 100, 50 and 10 denoMinations in currency");
                                break;
                            case "3":
                                alert("You will have " + hunderedNotes + " hundered notes, 3 ten notes but we cannot give you the reMaining aMount because we only have 100, 50 and 10 denoMinations in currency");
                                break;
                            case "4":
                                alert("You will have " + hunderedNotes + " hundered notes, 4 ten notes but we cannot give you the reMaining aMount because we only have 100, 50 and 10 denoMinations in currency");
                                break;    
                        }
                    }

                }
                else if(tens > "5"){
                    if(ones == "0"){
                        switch(tens){
                            case "6":
                                alert("You will have " + hunderedNotes + " hundered notes, 1 fifty note and 1 ten note");
                                break;
                            case "7":
                                alert("You will have " + hunderedNotes + " hundered notes, 1 fifty note and 2 ten notes");
                                break;
                            case "8":
                                alert("You will have " + hunderedNotes + " hundered notes, 1 fifty note and 3 ten notes");
                                break;
                            case "9":
                                alert("You will have " + hunderedNotes + " hundered notes, 1 fifty note and 4 ten notes");
                                break;    
                        }
                    }
                    else{
                        switch(tens){
                            case "6":
                                alert("You will have " + hunderedNotes + " hundered notes, 1 fifty note and 1 ten note but we cannot give you the reMaining aMount because we only have 100, 50 and 10 denoMinations in currency");
                                break;
                            case "7":
                                alert("You will have " + hunderedNotes + " hundered notes, 1 fifty note and 2 ten note but we cannot give you the reMaining aMount because we only have 100, 50 and 10 denoMinations in currency");
                                break;
                            case "8":
                                alert("You will have " + hunderedNotes + " hundered notes, 1 fifty note and 3 ten notes but we cannot give you the reMaining aMount because we only have 100, 50 and 10 denoMinations in currency");
                                break;
                            case "9":
                                alert("You will have " + hunderedNotes + " hundered notes, 1 fifty note and 4 ten notes but we cannot give you the reMaining aMount because we only have 100, 50 and 10 denoMinations in currency");
                                break;    
                        }
                    }
                    
                }
            }
        }
    }
    else{
        alert("Please enter three digits only");
    }
}
withdrawMoney(); */

// ChapterS 43-48

function createParagraph(){
    var p = document.createElement("p");
    document.body.appendChild(p);
    return p;
}
function createHeading(){
    var heading = document.createElement("h1");
    document.body.appendChild(heading);
    return heading;
}
function createLineBreaks(){
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
}