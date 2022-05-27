let dict1 = JSON.parse(document.getElementById('dictdata').textContent)
console.log(dict1)
let score=0;
let i = Math.round(Math.random()*9+1);
let quescount=0;
let refradio = document.getElementsByTagName('input');
let reflabelarr = document.getElementsByTagName('label');
let correctoption = dict1['correctoption'][0];
function checkButton() {

    if(document.getElementById('A').checked) {
        if(correctoption=='A'){
            score+=1;
            document.getElementById("disp").innerHTML   
                = 'Score: '+score +"/10";
        }
        refradio[0].checked=false;   
    }   
    else if(document.getElementById('B').checked) {
        if(correctoption=='B'){
            score+=1;   
            document.getElementById("disp").innerHTML   
                = 'Score: '+score +"/10";
        }
        refradio[1].checked=false;      
    }   
    else if(document.getElementById('C').checked) {
        if(correctoption=='C'){
            score+=1;   
            document.getElementById("disp").innerHTML
                = 'Score: '+score +"/10";
        }
        refradio[2].checked=false;      
    }   
    else if(document.getElementById('D').checked) {
        if(correctoption=='D'){
            score+=1;   
            document.getElementById("disp").innerHTML   
                = 'Score: '+score +"/10";
        }
        refradio[3].checked=false;      
    }  
    else {   
        alert("You have not selected any option");
        return;   
    }
    document.getElementById('question').innerText=dict1['question'][i];
    reflabelarr[0].innerHTML=dict1['option1'][i];
    reflabelarr[1].innerHTML=dict1['option2'][i];
    reflabelarr[2].innerHTML=dict1['option3'][i];
    reflabelarr[3].innerHTML=dict1['option4'][i];
    correctoption = dict1['correctoption'][i];
    i = Math.round(Math.random()*9+1);
    quescount+=1;
    if(quescount==10){
        document.getElementById('disp').remove();
        document.getElementById('questionportion').remove();
        document.getElementById('final-result').innerHTML="Well done!! your final score is<br>"+score+"/10"
    }   
}