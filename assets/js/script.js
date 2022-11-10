
let stu_list=document.querySelector("#st_list");

document.querySelector("#btn_add").onclick=function(){
let student=document.querySelector("#student").value;
if (student.trim()!="") {
  stu_list.innerHTML+="<li>"+student+"</li>"; 


}else{
    alert("bosh metin");
}

 
}

let test=document.querySelectorAll("#st_list");


console.log(test[0].value);


