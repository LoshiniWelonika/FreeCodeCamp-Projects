const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const cleanText = (text) => {
    const lowerText = text.toLowerCase();
    const textArray = [...lowerText];
    const newArray = [];
    
    for(const letter of textArray){
        if(/^[a-z0-9]$/i.test(letter)){
            newArray.push(letter);
        }
    }
    return newArray;
};

const checkText = (text) => {
    const returnedArray = cleanText(text);

    for (let i=0; i < returnedArray.length / 2 ; i++){
        if (returnedArray[i] !== returnedArray[returnedArray.length-1-i]){
            return false;
        }
    }
    return true;
};


checkBtn.addEventListener('click', () => {
    if(textInput.value === ""){
        alert("Please input a value");
    }
    else{
        if(checkText(textInput.value)){
            result.innerText = `${textInput.value} is a palindrome.`
        }
        else{
            result.innerText = `${textInput.value} is not a palindrome.`
        }
    }
});
