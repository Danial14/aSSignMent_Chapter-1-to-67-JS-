// Task 1 part 1
//var Maincontent = document.getElementById("main-content");

// Task 1 part 2
/* var MainChildren = Maincontent.children;
for(var i = 0; i < MainChildren.length; i++){
    alert(MainChildren[i].tagName);
} */
createHeading().innerHTML = "Render innerHTML";

// Task 1 part 3
/* var render = document.getElementsByClassName("render");
for(var i = 0; i < render.length; i++){
    createParagraph().innerHTML = render[i].innerHTML;
} */

// Task 1 part 4
//document.getElementById("first-name").value = "MUHAMMAD ALI";

// Task 1 part 5
/* document.getElementById("last-name").value = "GHANI";
document.getElementById("email").value = "MUHAMMAD ALI@gmail.com"; */

// Task 2 part 1
//createParagraph().innerHTML = "The node type of eleMent having id form-content is " + document.getElementById("form-content").nodeType;

// Task 2 part 2
/* var lastNaMe = document.getElementById("last-name");
var lastNaMeChildren = lastNaMe.childNodes;
createParagraph().innerHTML = "The node type of eleMent having id last-name is " + lastNaMe.nodeType;
if(lastNaMeChildren.length < 1){
    createParagraph().innerHTML = "There is no child of last-name";
}
for(var i = 0; i < lastNaMeChildren.length; i++){
    createParagraph().innerHTML = "The node type of child of last-name is " + lastNaMeChildren[i].nodeType;
} */

// Task 2 part 3
/* var laSt = document.getElementById("lastName");
laSt.innerText = laSt.innerText.slice(0, laSt.innerText.indexOf("B")) + "SMith";
createParagraph().innerHTML = laSt.innerText; */

// Task 2 part 4
/* var Main = document.getElementById("main-content");
var first = Main.firstChild;
var last = Main.lastChild;
createParagraph().innerHTML = first.textContent;
createParagraph().innerHTML = last.textContent; */

// Task 2 part 5
/* var laSt = document.getElementById("lastName");
var next = laSt.nextElementSibling;
var previous = laSt.previousElementSibling; */

// Task 2 part 6
/* var Mail = document.getElementById("email");
var eMailParent = Mail.parentNode;
var node_type = Mail.nodeType; */

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