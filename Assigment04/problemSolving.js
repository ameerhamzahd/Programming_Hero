function cashOut(money) {
    let cashoutCharge = 1.75;
    let cashoutOutput = 0;

    if (money < 0 || typeof money !== 'number') {
        return 'Invalid.';
    }
    else {
        cashoutOutput = (money * (cashoutCharge / 100)).toFixed(2);

        return cashoutOutput;
    }
}


function validEmail(email) {
    if (typeof email !== 'string') {
        return 'Invalid.';
    }

    if (email[0] == '.' || email[0] == '-' || email[0] == '_' || email[0] == '+' || email[0] == '@') {
        return false;
    }

    if (email[email.length - 1] !== 'm' || email[email.length - 2] !== 'o' || email[email.length - 3] !== 'c' || email[email.length - 4] !== '.') {
        return false;
    }

    if (email.includes(" ")) {
        return false;
    }

    let atsignCount = email.split("@").length - 1;
    if (atsignCount !== 1) return false;

    return true;
}


function electionResult(votes) {
    let candidate1 = 0, candidate2 = 0;

    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    for (let vote of votes) {
        if (typeof vote !== "string") {
            return "Invalid.";
        }

        if (vote === "mango") {
            candidate1++;
        }
        else if (vote === "banana") {
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


function isBestFriend(f1, f2) {
    if (typeof f1 !== 'object' || typeof f2 !== 'object') {
        return 'Invalid.';
    }

    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    }
    else {
        return false;
    }
}


function calculateWatchTime(times) {
    let totalWatchTime = 0;
    let objectWatchTime = {
        hour: 0,
        minute: 0,
        second: 0
    }

    if (!Array.isArray(times)) {
        return "Invalid.";
    }

    for (let time of times) {
        if (typeof time !== "number") {
            return "Invalid.";
        }

        totalWatchTime += time;
    }

    objectWatchTime.hour = Math.floor(totalWatchTime / 3600);
    objectWatchTime.minute = Math.floor((totalWatchTime % 3600) / 60);
    objectWatchTime.second = totalWatchTime % 60;

    return objectWatchTime;
}