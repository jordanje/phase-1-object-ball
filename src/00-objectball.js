function gameObect(){
    let obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["black", "white"],
            players: {
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                }
            }

    }, away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "purple"],
        players: {
            "Jeff Adrien":{
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
           
        }
    }
 }

    return obj;
}

function numPointsScored(playersName){
    let game = gameObect()
    for(let teams in game){
        const teamObj = game[teams]
        
        if(teamObj.players[playersName]){
            const pointsScored = teamObj.players[playersName].points
            return pointsScored
         }
    }
}

