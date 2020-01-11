// const passwordDisplay = document.getElementById('passwordDisplay'); 
// const form = document.getElementById('passgen');
// const charList= list(33, 126);

// form.addEventListener('submit', e=>{
//     e.preventDefault();
//     const pass = generatePass();
//     passwordDisplay.innerText = pass;
// })

// function generatePass(){
//     const passChar=[];
//     for( let i=0; i<10; i++){
//         const character=charList[Math.floor(Math.random()*charList.length)];
//         passChar.push(String.fromCharCode(character));
//     }
//     return passChar.join('');
// }

// function list(low, high){
//     const array=[];
//     for(let i=low; i<=high; i++){
//         array.push(i);
//     }
//     return array;
// }

// function btnCopy() {
//     var change = document.getElementById("btn2");
//     if (change.innerHTML == "Copy to Clipboard"){   
//         change.innerHTML = "Copied !";
//     }
//     else {
//         change.innerHTML = "Copy to Clipboard";
//     }
// } 


const charList= list(33, 126);
function list(low, high){
    const array=[];
    for(let i=low; i<=high; i++){
        array.push(i);
    }
    return array;
}

function passGen(){
    const passLength = prompt("Password Length ?")
    if (passLength>=8 && passLength<=128){
    const pass = generatePass(passLength);
    document.getElementById("passwordDisplay").value = pass;
    }else{
        alert("Enter a password of length between 8 and 128.")
        return false;
    }
    return true;
}

function generatePass(passLength){
    const passChar=[];
    for( let i=0; i<passLength; i++){
        const character=charList[Math.floor(Math.random()*charList.length)];
        passChar.push(String.fromCharCode(character));
    }
    return passChar.join('');
}

function btnCopy(){
    var change = document.getElementById("btn2");
    if (change.innerHTML == "Copy to Clipboard"){   
        change.innerHTML = "Copied !";
        document.getElementById("passwordDisplay").select();
        document.execCommand("Copy");
        //alert("Copied to clipboard.");
    }
    else{
        change.innerHTML = "Copy to Clipboard";
    }
}
