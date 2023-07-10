const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagens/logo.jpg'){
        myImage.setAttribute('src', 'imagens/logo2.jpg');
} else{
    myImage.setAttribute('src', 'imagens/logo.jpg');
}
};


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');
function setUserName(){
    const myName = prompt('Por favor, digite seu nome:');
    if (!myName) {
        setUserName();
    } else {
 
    localStorage.setItem('name', myName);
    myHeading.textContent= `Seja Bem Vindo(a), ${myName}`;
    }
}


if(!localStorage.getItem('name')){
    setUserName();
} else{
    const storageName = localStorage.getItem('name');
    myHeading.textContent = `Bem Vindo(a) de volta, ${storageName}`;
}


myButton.onclick = () => {
    setUserName();
};

fin