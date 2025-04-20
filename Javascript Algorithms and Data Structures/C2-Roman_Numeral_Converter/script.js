const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.querySelector("#output");

const numToRoman = (val)=>{
    const map = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
      ];
    
      let roman = "";
      for (let i = 0; i < map.length; i++) {
        while (val >= map[i].value) {
          roman += map[i].symbol;
          val -= map[i].value;
        }
      }
    

      output.textContent = `${roman}`;
      output.classList.remove("invalid");
      output.style.display = "block";
};

const turnInvalid = ()=>{
    output.classList.add("output");
    output.classList.add("invalid");
    output.style.display = "block";
};

const converter = ()=>{
    const inputValue = parseInt(numberInput.value);
        if (isNaN(inputValue)){
            output.textContent = "Please enter a valid number";
            turnInvalid();
        }
        else if (inputValue < 1) {
            output.textContent = "Please enter a number greater than or equal to 1";
            turnInvalid();
        }  
        else if (inputValue >= 4000) {
            output.textContent = "Please enter a number less than or equal to 3999";
            turnInvalid();
        }
        else
            numToRoman(inputValue);
};

convertBtn.addEventListener("click", converter);

numberInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        converter();
    }
})