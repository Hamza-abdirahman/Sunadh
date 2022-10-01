window.onresize = func_one;
window.onload = func_one;
function func_one(){
    let x = window.innerWidth;
    document.getElementById("size").innerHTML = "Size "+x+"px";
}