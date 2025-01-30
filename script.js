
function convertfrombinary(){
    let binary = document.getElementById("binary").value;
    if(binary === ""){
        clearFields();
        return;
    }
    let decimal = parseInt(binary,2);
    if(isNaN(decimal)){
        clearFields();
        return;
    }
    document.getElementById("decimal").value = decimal; 
    document.getElementById("octal").value = decimal.toString(8); 
    document.getElementById("hexa").value = decimal.toString(16).toUpperCase();
}
function convertfromoctal(){
    let octal = document.getElementById("octal").value;
    if(octal === ""){
        clearFields();
        return;
    }
    let decimal = parseInt(octal,8);
    if(isNaN(decimal)){
        clearFields();
        return;
    }

     document.getElementById("decimal").value = decimal; 
     document.getElementById("binary").value = decimal.toString(2);
     document.getElementById("hexa").value = decimal.toString(16).toUpperCase();
}
function convertfromhexa(){
    let hexa = document.getElementById("hexa").value;
    if(hexa === ""){
        clearFields();
        return;
    }
    let decimal = parseInt(hexa,16);
    if(isNaN(decimal)){
        clearFields();
        return;
    }
    document.getElementById("decimal").value = decimal;
    document.getElementById("binary").value = decimal.toString(2);
    document.getElementById("octal").value = decimal.toString(8);

}
function convertfromdecimal(){
let decimal = document.getElementById("decimal").value;
 if (decimal === "") {
 clearFields();
 return;
 }
 decimal = parseInt(decimal, 10);
 if (isNaN(decimal)) {
 clearFields();
 return;
 }


 document.getElementById("octal").value = decimal.toString(8); 
 document.getElementById("binary").value = decimal.toString(2); 
 document.getElementById("hexa").value = decimal.toString(16).toUpperCase(); 

}



function clearFields(){
document.getElementById("decimal").value="";
document.getElementById("binary").value="";
document.getElementById("octal").value="";
document.getElementById("hexa").value = "";
}