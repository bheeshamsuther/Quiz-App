
var allQuestions = [{
    "question": "Javascript is _________ language.",
    "option1": "Application",
    "option2": "Scripting",
    "option3": "Programming",
    "option4": "None Of These",
    "answer": "Scripting"
},
{
    "question": "JavaScript is ______ Side scripting language",
    "option1": " Server",
    "option2": "Browser",
    "option3": "ISP",
    "option4": "Client",
    "answer": "Browser"
},
{
    "question": "The _______ method of an Array object adds and/or removes elements from an array.",
    "option1": "Reverse",
    "option2": "Shift",
    "option3": " Slice",
    "option4": "Splice",
    "answer": "Splice"
},
{
    
    "question": "var y = 10, <br/>" +
    "var y = hello,  <br/> " +
    "x + y is show thw alert",
    "option1": "10 hello",
    "option2": "!Nan",
    "option3": "error",
    "option4": "10",
    "answer": "10 hello"
},
{
    "question": "______ tag is an extension to HTML that can enclose any number of JavaScript statements",
    "option1": "SCRIPT",
    "option2": "BODY",
    "option3": "HEAD",
    "option4": "TITLE",
    "answer": "SCRIPT"
},
{
    "question": "Using _______ statement is how you test for a specific condition.",
    "option1": "Select ",
    "option2": " If",
    "option3": " Switch",
    "option4": " For",
    "answer": "If"
},
{
    "question": "JavaScript is interpreted by ______.",
    "option1": "Client",
    "option2": " Server",
    "option3": "Object",
    "option4": "None of the above",
    "answer": "Client"
},
{
    "question": "Choose the client-side JavaScript object?",
    "option1": " Database",
    "option2": "Cursor",
    "option3": "Client",
    "option4": "FileUpLoad",
    "answer": "FileUpLoad"
},
{
    "question": " Which types of image maps can be used with JavaScript?",
    "option1": "Server-side image maps",
    "option2": "Client-side image maps",
    "option3": " Server-side image maps and Client-side image maps",
    "option4": "None of the above",
    "answer": "Client-side image maps"
},
{
    "question": "Choose the server-side JavaScript object? ",
    "option1": "FileUpLoad",
    "option2": " Function",
    "option3": "  File",
    "option4": " Date",
    "answer": " File"
},]

var count = 0;
var marks = 0;

var box = document.getElementById("box");
var p = document.createElement("h2");
    p.setAttribute("id", "question")
    var ptext = document.createTextNode(allQuestions[count].question);
    p.appendChild(ptext);
    box.appendChild(p);
    //1
    var br0 = document.createElement("br")
    
    var op1 = document.createElement("input")
    op1.setAttribute("type","radio");
    op1.setAttribute("name","answer");
    op1.setAttribute("value",allQuestions[count].option1);
    op1.setAttribute("id", 'op1');
    box.appendChild(br0)
    box.appendChild(op1);
    var  span = document.createElement("span");
    span.setAttribute("id", "option1")
    var span_text1 =document.createTextNode(allQuestions[count].option1);
    span.appendChild(span_text1);
    box.appendChild(span);
    var br1 = document.createElement("br")
    box.appendChild(br1);
   //1
   
   //2
    var op2 = document.createElement("input")
    op2.setAttribute("type","radio");
    op2.setAttribute("name","answer");
    op2.setAttribute("value",allQuestions[count].option2);
    op2.setAttribute("id", 'op2');
    box.appendChild(op2);
    var  span2 = document.createElement("span");
    span2.setAttribute("id", "option2")

    var span_text2 =document.createTextNode(allQuestions[count].option2);
    span2.appendChild(span_text2);
    box.appendChild(span2);
    var br2 = document.createElement("br")
    box.appendChild(br2);
//2

// //3
    var op3 = document.createElement("input")
    op3.setAttribute("type","radio");
    op3.setAttribute("name","answer");
    op3.setAttribute("value",allQuestions[count].option3);
    op3.setAttribute("id", 'op3');
    box.appendChild(op3);

    var  span3 = document.createElement("span");
    span3.setAttribute("id", "option3")
    var span_text3 =document.createTextNode(allQuestions[count].option3);
    span3.appendChild(span_text3);
    box.appendChild(span3);
    var br3 = document.createElement("br")
    box.appendChild(br3);
//3


//4
    var op4 = document.createElement("input")
    op4.setAttribute("type","radio");
    op4.setAttribute("name","answer");
    op4.setAttribute("value",allQuestions[count].option4);
    op4.setAttribute("id", 'op4');
    box.appendChild(op4);
    var  span4 = document.createElement("span");
    span4.setAttribute("id", "option4")
    var span_text4 =document.createTextNode(allQuestions[count].option4);
    span4.appendChild(span_text4);
    box.appendChild(span4);
    var br4 = document.createElement("br")
    box.appendChild(br4);


    function  next() {
        var selcted = document.querySelector("input[type = radio]:checked");
        console.log(selcted.value);
       selcted.checked = false;
        var flag = false;
       if(selcted.value === allQuestions[count].answer){
           flag = true
           marks++
           console.log(marks)   
       }
    
        if(count  < allQuestions.length-1){
            
            count++;
            document.getElementById('question').innerHTML = allQuestions[count].question;
            document.getElementById('option1').innerHTML= allQuestions[count].option1;
            document.getElementById('op1').value= allQuestions[count].option1;
            document.getElementById('option2').innerHTML = allQuestions[count].option2;
            document.getElementById('op2').value= allQuestions[count].option2;
            document.getElementById('option3').innerHTML = allQuestions[count].option3;
            document.getElementById('op3').value= allQuestions[count].option3;
            document.getElementById('option4').innerHTML = allQuestions[count].option4;
            document.getElementById('op4').value= allQuestions[count].option4;
            // console.log(marks * 10) 
        }
        else{
            
            window.location.href = "result.html";
            x = marks * 10;
            localStorage.setItem("marks",JSON.stringify(x))
            
        }
       }

 

        /*timer*/

      var seconds = 240;
      function secondPassed() {
          var minutes = Math.round((seconds - 30)/60),
              remainingSeconds = seconds % 60;
      
          if (remainingSeconds < 10) {
              remainingSeconds = "0" + remainingSeconds;
          }
      
          document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
          if (seconds == 0) {
              clearInterval(countdownTimer);
               
            window.location.href = "final.html";
            x = marks * 10;
            localStorage.setItem("marks",JSON.stringify(x))
            
             
      
          } else {
              seconds--;
          }
      }
      var countdownTimer = setInterval('secondPassed()', 1000);


