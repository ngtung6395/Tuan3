let Sothu1;
let Sothu2;
let result;
function Cong() {
     Sothu1=parseInt(document.getElementById("Sothu1").value);
     Sothu2=parseInt(document.getElementById("Sothu2").value);
     result=Sothu1+Sothu2;
    document.getElementById("Ketqua").innerText="result "+result;

}
function Tru() {
    Sothu1=parseInt(document.getElementById("Sothu1").value);
    Sothu2=parseInt(document.getElementById("Sothu2").value);
    result=Sothu1-Sothu2;
    document.getElementById("Ketqua").innerText="result "+result;

}
function Nhan() {
    Sothu1=parseInt(document.getElementById("Sothu1").value);
    Sothu2=parseInt(document.getElementById("Sothu2").value);
    result=Sothu1*Sothu2;
    document.getElementById("Ketqua").innerText="result "+result;

}
function Chia() {
    Sothu1=parseInt(document.getElementById("Sothu1").value);
    Sothu2=parseInt(document.getElementById("Sothu2").value);
    result=Sothu1/Sothu2;
    document.getElementById("Ketqua").innerText="result "+result;

}