var name_of_the_student_array=[];                                                                                                               
function submit(){
    
    var inputs=[];
for(var i=1; i <=6;i++){
    inputs.push(document.getElementById("name_of_the_student_" + i).value);
}
document.getElementById("show PARAGRAPH 1").innerHTML=inputs.join(". ");
}
var name_of_the_student_array_1=[];
function sorting(){

    var input1=[];
for(var a=7; a <=12;a++){
    input1.push(document.getElementById("name_of_the_student_" + a).value);
}
document.getElementById("show PARAGRAPH 2").innerHTML=input1.join(". ");
}   

