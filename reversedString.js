function reverseString(s){
    rs=""
        try {
            rs = s.split('').reverse().join('');

        } 
        catch (e){

            console.log(e.message);
        }
        
        console.log(rs);
    
}

reverseString("hello");
reverseString(123);