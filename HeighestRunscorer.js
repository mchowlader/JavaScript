function HeighestRunscorer(playerInfo)
{
    var heightScorer = playerInfo[0][0]
    var heightScore = playerInfo[0][1]

    for(var x = 1; x < playerInfo.length; x++)
    {
        if(heightScore < playerInfo[x][1])
        {
            heightScore = playerInfo[x][1]
            heightScorer = playerInfo[x][0]
        }
    }

    return heightScorer

}



var playersInfo = 
[
    ["Anamul", 51],
    ["Liton", 45],
    ["Soumya", 30],
    ["Munim", 70]
]

var playerName = HeighestRunscorer(playersInfo);
console.log(playerName);