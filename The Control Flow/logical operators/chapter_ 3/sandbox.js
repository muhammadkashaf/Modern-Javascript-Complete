// logical operators = OR  || and AND &&

const password = 'p@ssword';

if (password.length >= 12 && password.includes('@')) {
    console.log('that password is might strong');
}
else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
    console.log('that password is strong enough!');
    
}else{
    console.log('password is not strong enough!');
}