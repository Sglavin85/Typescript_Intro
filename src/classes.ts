//Classes

class Team {
    private teamName: string
    readonly createDate: number

    constructor(teamName) {
        this.teamName = teamName
        this.createDate = Date.now();
    }

    score(): string {
        console.log("GOOAAALLL");
        return "GOAL"
    }

    showTeamName() {
        console.log(this.teamName);
    }
}

const redWings = new Team("Red Wings");

redWings.score();
redWings.showTeamName();
