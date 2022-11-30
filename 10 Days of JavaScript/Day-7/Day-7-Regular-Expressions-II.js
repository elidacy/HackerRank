function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    let re = /^(Mr|Mrs|Ms|Dr|Er)\.\w+$/;
    /*
     * Do not remove the return statement
     */
    return re;
    /*
    ^ - Matches beginning of input.
    | - symbol to match one thing or the other. For eg., (a|b) matches either a       or b.
    \ - Escape Sequences, To recognized as a period and not a wildcard symbol
    "+" - Matches the preceding item [A-Za-z], 1 or more times
    $ - Matches end of input.
    \w - A single alphanumeric word character, including the underscore (i.e.,        [A-Za-z0-9_]).   
     */
}
