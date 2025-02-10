 var x=100; //global
 function varDemo(){
    console.log("x ben trong ham:",x);
 }
 //
 console.log("x ben ngoai ham:",x);
 //thuc thi quan
 varDemo();

 //local
 function fn_demo(){
    var y=200; local
    console.log("y ben trong ham",x);
 }
 console.log("y ben ngoai ham",x);
 fn_demo(); //error


