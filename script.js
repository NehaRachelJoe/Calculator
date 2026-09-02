function getnumbers(){
    let a=Number(document.getElementById("num1").value)
    let b=Number(document.getElementById("num2").value)
    return[a,b]
}
function add(){
    let[a,b]=getnumbers();
    document.getElementById("result").innerHTML="Result:"+(a+b) 
}
function sub(){
    let [a,b]=getnumbers();
    document.getElementById("result").innerHTML="Result:"+(a-b)
}
function mul(){
    let [a,b]=getnumbers();
    document.getElementById("result").innerHTML="Result:"+(a*b)
}
function div(){
    let [a,b]=getnumbers();
    document.getElementById("result").innerHTML="Result:"+(a/b)
}