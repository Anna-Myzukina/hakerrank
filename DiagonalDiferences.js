/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

arr: an array of integers .
Input Format

The first line contains a single integer, , the number of rows and columns in the matrix . 
Each of the next  lines describes a row, , and consists of  space-separated integers .

*/

// Complete the diagonalDifference function below.
// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    const n = arr[0].length;

    for (var i = 0; i < n; i++) {
        var j = i;
        diagonal1 += arr[i][j];
        var k = n - i - 1;
        diagonal2 += arr[i][k];
    }


    return Math.abs(diagonal1 - diagonal2);
}


/*
function diagonalDifference(arr) {
    var LeftToRightDiagonal = [];
    var RightToLeftDiagonal = [];
    var sum = 0;

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j--){
            LeftToRightDiagonal = arr[0][0] + arr[1][1] + arr[2][2];
            RightToLeftDiagonal = arr[0][2] + arr[1][1] + arr[2][0];
            sum = LeftToRightDiagonal + RightToLeftDiagonal;
        }
    }
    return sum;
}
/**
 * var n = parseInt(readLine());
var suma = 0, sumb = 0;
for(var i = 0; i < n; i++){
   var line = readLine().split(' ');
   suma += Number(line[i]);
   sumb += Number(line[n-i-1]);
}
console.log(Math.abs(sumb-suma));
 */
