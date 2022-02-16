
//keeps track of numbers for the top of the pyramid
var count1 = 0;
 var plusbutton1 = document.getElementById("plus-button");
  var one = document.getElementById("one");
  var minusbutton1 =document.getElementById("minus-button1");
 
    plusbutton1.onclick = function() {
      count1++;
      one.innerHTML = count1;
      }

      minusbutton1.onclick = function(){
        if(count1>0){
          count1--;
          one.innerHTML =count1;}
          else if(count1==0){count1=0;
            one.innerHTML = count1}
      }

    //keeps track of numbers for the fats and oils group
var count2 = 0;
var plusbutton2 = document.getElementById("plus-button2");
 var two = document.getElementById("two");
 var minusbutton2 =document.getElementById("minus-button2");

   plusbutton2.onclick = function() {
     count2++;
     two.innerHTML = count2;
     }

     minusbutton2.onclick = function(){
       if(count2>0){
         count2--;
         two.innerHTML =count2;}
         else if(count2==0){count2=0;
           two.innerHTML = count2}
     }
      
//keeps track of numbers for the eat and poultry group
var count3 = 0;
var plusbutton3 = document.getElementById("plus-button3");
 var three = document.getElementById("three");
 var minusbutton3 =document.getElementById("minus-button3");

   plusbutton3.onclick = function() {
     count3++;
     three.innerHTML = count3;
     }

     minusbutton3.onclick = function(){
       if(count3>0){
         count3--;
         three.innerHTML =count3;}
         else if(count3==0){count3=0;
           three.innerHTML = count3}
     }

//keeps track of numbers for the milk, yoghurt and cheese group
var count4 = 0;
var plusbutton4 = document.getElementById("plus-button4");
 var four = document.getElementById("four");
 var minusbutton4 =document.getElementById("minus-button4");

   plusbutton4.onclick = function() {
     count4++;
     four.innerHTML = count4;
     }

     minusbutton4.onclick = function(){
       if(count4>0){
         count4--;
         four.innerHTML =count4;}
         else if(count4==0){count4=0;
           four.innerHTML = count4}
     }

//keeps track of numbers for the wholemeal and cereal group
var count5 = 0;
var plusbutton5 = document.getElementById("plus-button5");
 var five = document.getElementById("five");
 var minusbutton5 =document.getElementById("minus-button5");

   plusbutton5.onclick = function() {
     count5++;
     five.innerHTML = count5;
     }

     minusbutton5.onclick = function(){
       if(count5>0){
         count5--;
         five.innerHTML =count5;}
         else if(count5==0){count5=0;
           five.innerHTML = count5}
     }

//keeps track of numbers for the fruits and veg group
var count6 = 0;
var plusbutton6 = document.getElementById("plus-button6");
 var six = document.getElementById("six");
 var minusbutton6 =document.getElementById("minus-button6");

   plusbutton6.onclick = function() {
     count6++;
     six.innerHTML = count6;
     }

     minusbutton6.onclick = function(){
       if(count6>0){
         count6--;
         six.innerHTML =count6;}
         else if(count6==0){count6=0;
           six.innerHTML = count6}
     }
      
     