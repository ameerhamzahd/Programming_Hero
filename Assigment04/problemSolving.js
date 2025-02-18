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
//         if (email.includes(" ")) {
//             return false;
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


// function electionResult() {
//     let candidate1 = 0, candidate2 = 0;
//     let parties = ["mango", "BananA", "na vote", "na vote"];

//     if (!Array.isArray(parties)) {
//         return "Invalid";
//     }

//     for (let party of parties) {
//         if (typeof party !== "string") {
//             return "Invalid.";
//         }

//         if (party === "mango") {
//             candidate1++;
//         }
//         else if (party === "banana") {
//             candidate2++;
//         }
//     }

//     if (candidate1 > candidate2) {
//         return "Mango.";
//     }
//     else if (candidate1 < candidate2) {
//         return "Banana.";
//     }
//     else {
//         return "Draw.";
//     }
// }


// function isBestFriend() {
//     const friend1 = {
//         name: 'Tajbedur Rahman',
//         roll: 23,
//         bestFriend: 2
//     };

//     const friend2 = {
//         name: 'Kausarul Alam Navin',
//         roll: 2,
//         bestFriend: 23
//     };

//     if(typeof friend1 !== 'object' || typeof friend2 !== 'object') {
//         return 'Invalid.';
//     }

//     if(friend1.bestFriend === friend2.roll && friend2.bestFriend === friend1.roll) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }


// function calculateWatchTime() {
//     let watchTime = [100, 3800, "90" ];
//     let totalWatchTime = 0;
//     let objectWatchTime = {
//         hour: 0,
//         minute: 0,
//         second: 0
//     }

//     if (!Array.isArray(watchTime)) {
//         return "Invalid.";
//     }

//     for (let time of watchTime) {
//         if (typeof time !== "number") {
//             return "Invalid.";
//         }

//         totalWatchTime += time;
//     }

//     objectWatchTime.hour = Math.floor(totalWatchTime / 3600);
//     objectWatchTime.minute = Math.floor((totalWatchTime % 3600) / 60);
//     objectWatchTime.second = totalWatchTime % 60;

//     return objectWatchTime;
// }