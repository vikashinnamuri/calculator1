let input=document.getElementById('inputbox');//input
let buttons=document.querySelectorAll('button');//input from any button
let string="";//to strore the values
let arr=Array.from(buttons);//array 
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{    // to know the action that they click the button 
    if(e.target.innerHTML=='=')//if the button is =
    {
        string=eval(string);
        input.value=string;
    }

    else if(e.target.innerHTML=='AC')// ac button
    {
        string="";   // it will clear the value in the input and assign 0
        input.value=string;// this line assign the string to value
    }
    else if(e.target.innerHTML=='DEL')//del button
    {
        string=string.substring(0,string.length-1); //this lines makes the del th elast number by using length-1
        input.value=string;
    }
    else{
        string+=e.target.innerHTML;  //else part if the button is not =
        input.value=string; //to add the value to the string
    }
          
    
  }) 
})