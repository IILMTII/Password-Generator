const passwordDisplay = document.getElementById('passwordDisplay'); 
const form = document.getElementById('passgen');
const charList= list(33, 126);

form.addEventListener('submit', e=>{
    e.preventDefault();
    const pass = generatePass();
    passwordDisplay.innerText = pass;
})

function generatePass(){
    const passChar=[];
    for( let i=0; i<10; i++){
        const character=charList[Math.floor(Math.random()*charList.length)];
        passChar.push(String.fromCharCode(character));
    }
    return passChar.join('');
}

function list(low, high){
    const array=[];
    for(let i=low; i<=high; i++){
        array.push(i);
    }
    return array;
}

function btncopy() {
    var change = document.getElementById("btn2");
    if (change.innerHTML == "Copy to Clipboard"){   
        change.innerHTML = "Copied !";
//         var aux = document.createElement("input");

//   // Get the text from the element passed into the input
//   aux.setAttribute("value", pass);

//   // Append the aux input to the body
//   document.body.appendChild(aux);

//   // Highlight the content
//   aux.select();

//   // Execute the copy command
//   document.execCommand("copy");

//   // Remove the input from the body
//   document.body.removeChild(aux);
    }
    else {
        change.innerHTML = "Copy to Clipboard";
    }
}    



// const btn2 = document.getElementById('btn2');
// btn2.onclick = function(){
//      passwordDisplay.innerText.select();

// }