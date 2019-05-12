/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, 
awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .

Your task is to find their comparison points by comparing  with ,  with , and  with .

If , then Alice is awarded  point.
If , then Bob is awarded  point.
If , then neither person receives a point.
Comparison points is the total points a person earned.

Given  and , determine their respective comparison points.

For example,  and . For elements , Bob is awarded a point because . For the equal elements  and , 
no points are earned. Finally, for elements ,  
so Alice receives a point. Your return array would be  with Alice's score first and Bob's second.
*/

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    var result = [];
    var alice = 0;
    var bob = 0;

    for (var i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]){
            bob++;
        } else {
            alice , bob = 0;
        }
    }
    result[0] = alice;
    result[1] = bob;
    return result;
}
