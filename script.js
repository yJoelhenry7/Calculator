let output = document.getElementById('output');
let icon = document.getElementById('icon');
icon.onclick = function(){
    document.body.classList.toggle('dark-theme');
   if( document.body.classList.contains('dark-theme')){
    icon.src="sun.png";
   }else{
    icon.src="moon.png";
   }
}
function display(num){
    output.value += num ;
}
function equal(){
    try{
        output.value = eval(output.value);
    }
    catch{
        output.value="error";
    }
}
function clr(){
    output.value = "";
}

function del(){
    output.value =output.value.slice(0,-1);
}