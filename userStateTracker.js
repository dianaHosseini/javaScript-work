/*
Mini Project: User State Tracker
This project covers 5 JavaScript topics:
1. Syntax – proper code structure and template literals
2. Variables – using let/const for user properties
3. Operators – arithmetic and comparison operators (++, <=)
4. If Conditions – checking age and login status
5. Loops – iterating through multiple users with a for loop
*/

// ----- Users Array (Variables)
let Users = [
    { name: "Abbas", userAge: 39, isLoggedIn: true },
    { name: "Ali", userAge: 29, isLoggedIn: false },
    { name: "Reza", userAge: 14, isLoggedIn: true },
]

// ----- Loop through users (Loops)
for (let i = 0; i < Users.length; i++) {
    let user = Users[i]

    // ----- Check if user is under 18 (Operators + If Condination)
    let isUnder18 = user.userAge < 18 

    // ----- Condination logic to display messages (If Condination + logical Operators)
    if (!isUnder18 && user.isLoggedIn) {
        console.log(`${user.name} You can log in`);
    } else if (!isUnder18 && !user.isLoggedIn) {
        console.log(`${user.name} You is adult but not logged in`);
    } else {
        console.log(`${user.name} You under 18, and can NOT log in`);
    }
}

