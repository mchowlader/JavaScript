console.clear();

function HighestScore(score)
{
    var max = score[0];

    for(var x = 1; x<score.length; x++)
    {
        if(max < score[x])
        {
            max = score[x];
        }
    }

    return max;
}

var score = [2,100,10,5,9,22,44];
var maxScore = HighestScore(score);
console.log(maxScore);