/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    // no need to simulate student queue
    let squareStudents = students.filter(x => x===1).length;
    let roundStudents = students.length - squareStudents;

    const n = sandwiches.length;
    let i = 0;
    while (i < n && (squareStudents > 0 || roundStudents > 0)) {
        if (sandwiches[i] === 1 && squareStudents > 0) {
            squareStudents--;
        } else if (sandwiches[i] === 0 && roundStudents > 0) {
            roundStudents--;
        } else {
            // no students left to take next sandwich
            break;
        }
        i++;
    }

    return Math.abs(squareStudents-roundStudents);
};