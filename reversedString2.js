function reverseString(s) {
    // typeof s !== "string"
    // ? console.log("s.split is not a function")
    // : (s = s.split("").reverse().join(""));
    // console.log(s);
    if(typeof s!= "string") 
        throw new Error ("s.split is not a function");
    else{
        s = s.split("").reverse().join(""); 
        console.log(s);
    }
}

  try{
    console.log(reverseString(478));
    }
    catch (e){
        console.log(e.message);
    }
    
  try{
    console.log(reverseString("hello"));
    }
    catch (e){
        console.log(e.message);
    }
