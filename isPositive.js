function isPositive(a) {
    if(typeof a != "number")
        throw new Error ("Not number Error");
    else if(a===0)
        throw new Error ("ZERO Error");
    else if(a<0)
        throw new Error ("NEGATIVE Error");
    else return "YES";
}

try {  
    console.log(isPositive(-1));
} 
catch (e) {
    console.log(e.message);
}

try {  
    console.log(isPositive(1)); 
} 
catch (e) {
    console.log(e.message);
}

try {  
    console.log(isPositive(0));  

} 
catch (e) {
    console.log(e.message);
}

try {   
    console.log(isPositive("0"));
} 
catch (e) {
    console.log(e.message);
}

