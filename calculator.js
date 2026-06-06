const result = document.getElementById("result");
const expression = document.getElementById("expression");

let current = "";

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", () => {

        let value = btn.textContent;

        if(value === "CLR"){
            current = "";
            result.textContent = "0";
            expression.textContent = "";
        }

        else if(value === "⌫"){
            current = current.slice(0,-1);
            result.textContent = current || "0";
        }

        else if(value === "="){

            try{
                let exp = current
                .replace(/×/g,"*")
                .replace(/÷/g,"/")
                .replace(/−/g,"-");

                let ans = eval(exp);

                expression.textContent = current + " =";
                result.textContent = ans;

                current = ans.toString();
            }
            catch{
                result.textContent = "Error";
            }
        }

        else if(value === "%"){
            current = (parseFloat(current)/100).toString();
            result.textContent = current;
        }

        else{
            current += value;
            result.textContent = current;
        }
    });

});