//    var elForm = document.querySelector('.js-form'); 
//    var elInp = document.querySelector('.js-inp');
//    var elList = document.querySelector('.js-list'); 
   
   


//    elForm.addEventListener('submit', function(evt) { 

    
//      evt.preventDefault(); 

//      var array = elInp.value.split(','); 
     
//      for (var el of array){ 

//         var niwInp = document.createElement('li'); 
//         niwInp.textContent = el; 
//         elList.appendChild(niwInp);
//      }
 
//    })

  

// for(var i = 2; i < 10; i++){ 

//     for(var j = 2; j <= 10; j++){  

//       console.log(`${i} x ${j} = ${i * j}`); 

//     }
// }
 


// let elBut = document.querySelector('.js-btn'); 
// let elInput = document.querySelector('.js-inp');  
// let elList = document.querySelector('.js-list');
// let record = new webkitSpeechRecognition(); 
// record.lang = 'uz-UZ'; 

// elBut.addEventListener('dblclick', function () { 

// record.start();  

// document.body.style.backgroundColor = 'green';

// });   

// record.onend = function () { 


//     console.log('-------------end----------------');
// };

// record.onerror = function(){ 

//    console.log('Error');
// };


// record.onresult = function (evt) { 
 
//     let res = evt.results[0][0].transcript; 

//     if(res == 'yashil'){ 

//         document.body.style.backgroundColor = 'green';
//     } 

//     if(res == 'qizil'){ 

//         document.body.style.backgroundColor = 'red';
//     } 

//     if(res == 'qora'){ 

//         document.body.style.backgroundColor = 'black';
//     } 
   
// }; 






//----------------------------------------uygavazifa----------------------------------------- 


var elForm = document.querySelector('.js-form');
var elInp = document.querySelector('.js-inp'); 
var elList = document.querySelector('.js-list'); 
var elBtn1 = document.querySelector('.butten1'); 
var elBtn2 = document.querySelector('.butten2'); 
var elBtn = document.querySelector('.js-btn'); 
var record = new webkitSpeechRecognition(); 
  record.lang = 'uz-UZ';
 

elForm.addEventListener('submit', function(evt){ 

evt.preventDefault(); 

var newItem = document.createElement("li");  
newItem.textContent = elInp.value; 
elInp.value = "";
newItem.classList.add("newItem");
newItem.style.color = "red";  
elList.appendChild(newItem);   
elList.value = "";


elBtn.addEventListener("click", function () {
    elList.removeChild(newItem);
     
});   

elBtn2.addEventListener("click", function () {
    elList.removeChild(newItem);
     
});

});


elBtn1.addEventListener("click", function () { 
record.start();  
   
});  


record.onresult = function (evt) { 
    elInp.value = evt.results[0][0].transcript;
    
 };