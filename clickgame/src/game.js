import React, { Component } from "react";
import crafts from "./clickcard.json";
import Card from "./components/Card";
import Score from "./components/Score";

class game extends Component {
    state = {
        crafts,
        selectedCraftId: [],
        score: 0,
        maxscore: 8,
        status: ""
    };
    scoreCount = (id) => {
        let selectedCraftId = this.state.selectedCraftId;

        if (selectedCraftId.includes(id)) {
            this.setState({ selectedCraftId: [], score: 0, status: "You Lost the Game" });
            return;
        } else {
            selectedCraftId.push(id)

            if (selectedCraftId.length === 12) {
                this.setState({ score: 12, status: "You've Landed all the crafts", selectedCraftId: [] });
                console.log('You Win');
                return;
            }

            this.setState({ selectedCraftId, score: selectedCraftId.length, status: " " });

            for (let i = crafts.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [crafts[i], crafts[j]] = [crafts[j], crafts[i]];
            }
        }
    }

    render() {
        return (
            <div className="App-container">
                <header className="App-header">
                    <h1 className="App-title">Clicky Game</h1>
                    <p className="App-intro">
                        Try to click each image once 
          </p>
                </header>
                <Score total={this.state.score}
                    goal={12}
                    status={this.state.status}
                />
                {crafts.map(craft => (
                    <Card
                        scoreCount={this.scoreCount}
                        id={craft.id}
                        key={craft.id}
                        image={craft.image}
                    />

                ))}
            </div>
        )
    }

}

export default game;