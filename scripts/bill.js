var bList = localStorage.getItem("bill")

bList = JSON.parse(bList);
console.log(typeof(bList));
// bList = Array(bList)

var node = document.createElement("div")
node.classList.add("bRow")

for (var i=0; i < bList.length; i++) {
    // console.log();
    console.log(bList[i]);
    if(bList[i].id && bList[i].title && bList[i].price) {
        // console.log(bList[i]%2!=0);
        if(typeof(bList[i])==Number) {
            console.log(bList[i]);
        }
        var pid = document.createElement("p")
        var pTitle = document.createElement("p")
        var pPrice = document.createElement("p")
        pPrice.classList.add("pr")
        pid.innerHTML = bList[i].id
        pTitle.innerHTML = bList[i].title + ":"
        pPrice.innerHTML = bList[i].price +" Rs &nbsp;=>" + " <i>&nbsp;x</i>" + bList[i].quantity+"(quantity)" + " = " + bList[i].quantity*bList[i].price
        var dataDiv = document.createElement("div")
        dataDiv.classList.add("test")
        dataDiv.appendChild(pid)
        dataDiv.appendChild(pTitle)
        dataDiv.appendChild(pPrice)
        node.appendChild(dataDiv)
    }
    // console.log(bList[i]);

}

function number2text(value) {
    var fraction = Math.round(frac(value)*100);
    var f_text  = "";

    if(fraction > 0) {
        f_text = "AND "+convert_number(fraction)+" PAISE";
    }

    return convert_number(value)+" RUPEE "+f_text+" ONLY";
}

function frac(f) {
    return f % 1;
}

function convert_number(number)
{
    if ((number < 0) || (number > 999999999)) 
    { 
        return "NUMBER OUT OF RANGE!";
    }
    var Gn = Math.floor(number / 10000000);  /* Crore */ 
    number -= Gn * 10000000; 
    var kn = Math.floor(number / 100000);     /* lakhs */ 
    number -= kn * 100000; 
    var Hn = Math.floor(number / 1000);      /* thousand */ 
    number -= Hn * 1000; 
    var Dn = Math.floor(number / 100);       /* Tens (deca) */ 
    number = number % 100;               /* Ones */ 
    var tn= Math.floor(number / 10); 
    var one=Math.floor(number % 10); 
    var res = ""; 

    if (Gn>0) 
    { 
        res += (convert_number(Gn) + " CRORE"); 
    } 
    if (kn>0) 
    { 
            res += (((res=="") ? "" : " ") + 
            convert_number(kn) + " LAKH"); 
    } 
    if (Hn>0) 
    { 
        res += (((res=="") ? "" : " ") +
            convert_number(Hn) + " THOUSAND"); 
    } 

    if (Dn) 
    { 
        res += (((res=="") ? "" : " ") + 
            convert_number(Dn) + " HUNDRED"); 
    } 


    var ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX","SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN","FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN","NINETEEN"); 
var tens = Array("", "", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY","SEVENTY", "EIGHTY", "NINETY"); 

    if (tn>0 || one>0) 
    { 
        if (!(res=="")) 
        { 
            res += " AND "; 
        } 
        if (tn < 2) 
        { 
            res += ones[tn * 10 + one]; 
        } 
        else 
        { 

            res += tens[tn];
            if (one>0) 
            { 
                res += ("-" + ones[one]); 
            } 
        } 
    }

    if (res=="")
    { 
        res = "zero"; 
    } 
    return res;
}

const numbertext = document.getElementById("num2text")


const total = document.getElementById("t")
const grandT = document.getElementById("gt")


const finalVal = (bList[bList.length-1]*0.05 + bList[bList.length-1]).toFixed(2)
grandT.innerHTML = finalVal + "Rs"

numbertext.innerHTML = number2text(finalVal)

total.innerHTML = bList[bList.length-1]+"Rs"


const bData = document.getElementById("bMain")

bData.appendChild(node)













