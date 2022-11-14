function vowelsAndConsonants(s) {
    for(let ind=0 ; ind<s.length; ind++){
        if(s.charAt(ind).match(/[aeiou]/))
        console.log(s.charAt(ind));
    }
     for(let ind=0 ; ind<s.length; ind++){
        if(s.charAt(ind).match(/[^aeiou]/))
        console.log(s.charAt(ind));
    }
}
