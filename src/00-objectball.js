function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["turquoise", "purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    asssists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "Desagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}
console.log(gameObject())
function homeTeam() {
    let object = gameObject();
    return object["home"]["teamName"];
}
//console.log(homeTeam());
function numPointsScored(playerName) {
    const gameData = gameObject();
    for(const team in gameData) {
        if (gameData[team].players[playerName]) {
            return gameData[team].players[playerName].points;
        }
    }
    return "player is unavailable";

}
function shoeSize(playerName)  {
    const gameData = gameObject();
    for(const team in gameData) {
        if (gameData[team].players[playerName]) {
            return gameData[team].players[playerName].shoe;
        }
    }
    return "player is unavailable";
}
function teamColors(teamName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData[team].teamName === teamName) {
            return gameData[team].colors;
        }
    }
    return "team is unavailable";
}
function teamNames() {
    const gameData = gameObject();
    return [gameData.home.teamName, gameData.teamName];;
}
function playerNumbers(teamName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData[team].teamName === teamName) {
            return object.values(gameData[team].players).map(player => player.number);
        }
    }
    return "team not availble";
}
function playerStats(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData[team].players[playerName]) {
            return gameData[team].players[playerName];
        }
    }
    return "player not available"
}
function bigShoeRebounds() {
    const gameData = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (const team in gameData) {
    for (const player in gameData[team].players) {
        if (gameData[team].players[player].shoe > largestShoeSize) {
            largestShoeSize = gameData[team].players[player].shoe;
            rebounds = gameData[team].players[player].rebounds;
        }
    }
}
return rebounds;
}

function mostPointsScored() {
    const gameData = gameObject();
    let topPlayer = "";
    let maxPoints = 0;
    for (let teamKey in gameData) {
        const players = gameData[teamKey].players;
        for (let player in players) {
            if (players[player].points > maxPoints) {
                maxPoints = players[player].points;
                topPlayer = player;
            }
        }
    }
    return topPlayer;
}

function winningTeam() {
    const gameData = gameObject();
    let highestScoringTeam = "";
    let maxTeamPoints = 0;
    for (let teamKey in gameData) {
        const team = gameData[teamKey];
        let teamPoints = 0;
        for (let player in team.players) {
            teamPoints += team.players[player].points;
        }
        if (teamPoints > maxTeamPoints) {
            maxTeamPoints = teamPoints;
            highestScoringTeam = team.teamName;
        }
    }
    return highestScoringTeam;
}

function playerWithLongestName() {
    const gameData = gameObject();
    let longestName = "";
    for (let teamKey in gameData) {
        const players = gameData[teamKey].players;
        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    const gameData = gameObject();
    let longestName = "";
    let mostSteals = 0;
    for (let teamKey in gameData) {
        const players = gameData[teamKey].players;
        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player;
                longestNameSteals = players[player].steals;
            }
            if (players[player].steals > mostSteals) {
                mostSteals = players[player].steals;
            }
        }
    }
    return longestNameSteals === mostSteals;
}

