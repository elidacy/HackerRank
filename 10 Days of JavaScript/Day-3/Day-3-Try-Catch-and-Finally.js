function reverseString(s) {
    try{
        let reversed = s.split("").reverse().join("");
        console.log(reversed);
    }
    catch(err){
        console.log(err.message);
        console.log(s);
    }
}
