// function cashOut() {
//     let cashoutAmount = 2000;
//     let cashoutCharge = 1.75;
//     let cashoutOutput = 'Invalid.';

//     if (cashoutAmount < 0 || typeof cashoutAmount !== 'number') {
//         return cashoutOutput;
//     }
//     else {
//         cashoutOutput = (cashoutAmount * (cashoutCharge / 100)).toFixed(2);

//         return cashoutOutput;
//     }
// }


// function validEmail() {
//     let email = "ameerhamzah.daiyan@gmail.com";
//     let flag = 0;

//     if (typeof email !== 'string') {
//         return 'Invalid.';
//     }

//     if (email[0] == '.' || email[0] == '-' || email[0] == '_' || email[0] == '+' || email[0] == '@') {
//         return false;
//     }

//     if (email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
//         return false;
//     }

//     if (email[email.length - 1] !== 'm' || email[email.length - 2] !== 'o' || email[email.length - 3] !== 'c' || email[email.length - 4] !== '.') {
//         return false;
//     }

//     if (typeof email === 'string') {
//         for (let i = 0; i < email.length; i++) {
//             if (email[i] === ' ') {
//                 return false;
//             }
//         }

//         for (let i = 0; i < email.length; i++) {
//             if (email[i] === '@') {
//                 flag = 1;
//             }
//         }

//         if (flag) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     return true;
// }


function electionResult() {
    let candidate1 = 0, candidate2 = 0;
    let parties = ["mango", "BananA", "na vote", "na vote"]

    if (!Array.isArray(parties)) {
        return "Invalid";
    }

    for (let party of parties) {
        if (typeof party !== "string") {
            return "Invalid.";
        }

        if (party === "mango") {
            candidate1++;
        }
        else if (party === "banana") {
            candidate2++;
        }
    }

    if (candidate1 > candidate2) {
        return "Mango.";
    }
    else if (candidate1 < candidate2) {
        return "Banana.";
    }
    else {
        return "Draw.";
    }
}
