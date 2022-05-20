// hello Jack!

// 1. Amazon Transaction Logs

// Your Amazonian team is responsible for
// maintaining a monetary transaction service
// The transactions are tracked in a log file.

// A log file is provided as a string array where
// each entry represents a transaction to
// service. Each transaction consists of:

// • sender user id: Unique identifier for the
// user that initiated the transaction. It consists
// of only digits with at most 9 digits.

// • recipient user id: Unique identifier for the
// user that is receiving the transaction. It
// consists of only digits with at most 9 digits.

// • amount of transaction: The amount of the
// transaction. It consists of only digits with at
// most 9 digits.

// The values are separated by a space. For
// example, "sender user id recipient user id
// amount of transaction".

// Users that perform an excessive amount of
// transactions might be abusing the service so
// you have been tasked to identify the users
// that have a number of transactions over a
// threshold. The list of user ids should be
// ordered in ascending numeric value.


// Example
// logs = ["88 99 200" "88 99 300" "99 32
// 100", " 12 12 15"7
// threshold = 2

// The transactions count for each user,
//     regardless of role are:
// ID
// Transactions
// 99
// 3
// 88
// 2
// 12
// 32
// There are two users with at least threshold =
//     2 transactions: 99 and 88. In ascending
// order, the return array is['88', '99').
// Note: In the last log entry, user 12 was on
// both sides of the transaction.This counts as
//     only 1 transaction for user 12.

// Function Description
// Complete the function processLogs in the
// editor below.
// The function has the following parameter(s):
// string logs[n]: each logs[il denotes the ith
// entry in the logs
// int threshold: the minimum number of
// transactions that a user must have to be
// included in the result

// Returns:
// string[]: an array of user id's as strings,
// sorted ascending by numeric value

// Constraints
// • 1 5 n$ 105
// • 1 ≤ thresholds n
// The sender user id, recipient user id and
// amount of transaction contain only
// characters in the range asciil'O'-'9'].
// • The sender user id, recipient user id and
// amount of transaction start with a non-
// zero digit.
// • 0 < length of sender user id,
// recipient user id, amount of transaction < 9.
// The result will contain at least one element.

// * Complete the 'processLogs' function below.
// * The function is expected to return a STRING ARRAY.
// * The function accepts following parameters:
// 1. STRING_ARRAY logs
// 2. INTEGER threshold

// Main function
function processLogs(logs, threshold) {
    console.log(logs);
    let res = [];
    let dict = {};
    for (let i = 0; i < logs.length; i++) {
        console.log(logs[i]);
        let curr = logs[i].split(" ");
        console.log("Current log: ", curr);
        if (curr[0] == curr[1]) dict[curr[0]] ? dict[curr[0]] += 1 : dict[curr[0]] = 1;
        else {
            dict[curr[0]] ? dict[curr[0]] += 1 : dict[curr[0]] = 1;
            dict[curr[1]] ? dict[curr[1]] += 1 : dict[curr[1]] = 1;
        }
    }
    console.log(dict);
    for (const [key, val] of Object.entries(dict)) {
        console.log(key, val);
        if (val >= threshold) res.push(key);
    }
    return res.sort();
}
processLogs(["88 99 200", "88 99 300", "99 32 100", "12 12 15"], 2);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const logsCount = parseInt(readLine().trim(), 10);

    let logs = [];

    for (let i = 0; i < logsCount; i++) {
        const logsItem = readLine();
        logs.push(logsItem);
    }

    const threshold = parseInt(readLine().trim(), 10);

    const result = processLogs(logs, threshold);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
// Input:
// 4
// 1 2 50
// 1 7 70
// 1 3 20
// 2 2 17
// 2

// output:

// expected output: 
// 1
// 2