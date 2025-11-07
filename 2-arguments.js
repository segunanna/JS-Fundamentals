*
 * Script that prints a message based on the number of command-line arguments passed.
 * Constraints: No 'var' is allowed. Must use console.log().
 */

// process.argv is an array where:
// [0] = path to node executable
// [1] = path to the script itself
// [2...] = user-supplied arguments

// Calculate the number of actual arguments supplied by the user.
// Using 'const' adheres to the 'no var' constraint.
const numArguments = process.argv.length - 2;

if (numArguments === 0) {
    console.log("No argument");
} else if (numArguments === 1) {
    console.log("Argument found");
} else {
    // This case covers numArguments > 1
    console.log("Arguments found");
}
