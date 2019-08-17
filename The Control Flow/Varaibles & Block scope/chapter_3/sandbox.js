// varaibls & block scopes
 
const age = 30;



if (true) {
    const age = 40;
    const name = 'kashaf';
    console.log('inside 1st code block:', age, name);

    if (true) {
        const age = 50;
        console.log('inside 2nd code block:',age);
        
    }
    
}

console.log('outside an code block:',age);

