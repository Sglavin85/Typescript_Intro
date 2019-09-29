//Classes
var Team = /** @class */ (function () {
    function Team(teamName) {
        this.teamName = teamName;
        this.createDate = Date.now();
    }
    Team.prototype.score = function () {
        console.log("GOOAAALLL");
        return "GOAL";
    };
    Team.prototype.showTeamName = function () {
        console.log(this.teamName);
    };
    return Team;
}());
var redWings = new Team("Red Wings");
redWings.score();
redWings.showTeamName();
