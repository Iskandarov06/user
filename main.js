let user = {}
for (let i = 0; i < 10; i++) {
    let id =  i+1;
    let name = prompt('Ismingizni kiriting' )
    let age = +prompt('Yoshingizni kiriting' )
    user.id = 'Foydalanuvchi : ' + id
    user.name = 'Ismingiz : ' + name
    user.age = 'Yoshingiz : ' + age 
    for (const key in user) {
      console.log(user[key]);  
    }
}