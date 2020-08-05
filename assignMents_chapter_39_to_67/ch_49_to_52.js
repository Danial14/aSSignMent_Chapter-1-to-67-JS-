// Task no1
function displayUserData(){
    var forM = document.getElementById("rec");
    var inputs = forM.getElementsByTagName("input");
    createParagraph().innerHTML = "NaMe: " + inputs[0].value;
    createParagraph().innerHTML = "EMail: " + inputs[1].value;
    createParagraph().innerHTML = "PaSSword: " + inputs[2].value;
}
// Task no2
function showContent(){
    var hiddenEleMent = document.getElementById("hi");
    var toggle = document.getElementById("toggle");
    if(hiddenEleMent.style.visibility == "hidden"){
        hiddenEleMent.style.visibility = "visible";
        toggle.innerHTML = "Hide content";
    }
    else{
        hiddenEleMent.style.visibility = "hidden";
        toggle.innerHTML = "Read More";
    }
}
// Task no3
function populateTable(){
    var table = document.getElementById("stu_rec");
    var data = document.getElementById("stu").getElementsByTagName("input");
    var row = document.createElement("tr");
    var rowId = Date.now().toString();
    row.setAttribute("id", rowId);
    table.appendChild(row);
    for(var i = 0; i < 5; i++){
        var cell = document.createElement("td");
        switch(i){
            case 0:
                cell.innerHTML = data[i].value;
                data[i].value = "";
                break;
            case 1:
                cell.innerHTML = data[i].value;
                data[i].value = "";
                break;
            case 2:
                cell.innerHTML = data[i].value;
                data[i].value = "";
                break;
            case 3:
                var del = document.createElement("button");
                del.innerHTML = "Delete";
                del.setAttribute("onclick", "deleteRecord(" + rowId + ")");
                cell.appendChild(del);
                break;
            default:
                var edit = document.createElement("button");
                edit.innerHTML = "Edit";
                edit.setAttribute("onclick", "editRecord(" + rowId + ")");
                cell.appendChild(edit);
        }
        row.appendChild(cell);
    }
}
function deleteRecord(id){
    document.getElementById(id).remove();
}
var data;
var hiddenForM = document.getElementById("stu_hidden");
var hiddenForMFields = hiddenForM.getElementsByTagName("input");
function editRecord(id){
    data = document.getElementById(id).getElementsByTagName("td");
    if(hiddenForM.style.visibility == "hidden"){
        hiddenForM.style.visibility = "visible";
        for(var i = 0; i < 3; i++){
            hiddenForMFields[i].value = data[i].innerHTML;
        }
    }
}
function updateRecord(){
    if(hiddenForM.style.visibility == "visible"){
        hiddenForM.style.visibility = "hidden";
        for(var i = 0; i < 3; i++){
            data[i].innerHTML = hiddenForMFields[i].value;
            hiddenForMFields[i].value = "";
        }
    }
}
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