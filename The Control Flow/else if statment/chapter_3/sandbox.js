// else if statment

const password = 'p@ssword1234';

if (password.length >= 12) {
    console.log('that password is might strong');
}
else if (password.length >= 8) {
    console.log('that password is long enough!');
    
}else{
    console.log('password is not long enough!');
}