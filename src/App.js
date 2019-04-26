import React, { Component } from "react";
import crafts from "./clickcard.json";
import Card from "./components/Card";
import Score from "./components/Score";
import "./App.css";

class App extends Component {
    state = {
        crafts,
        selectedCraftId: [],
        score: 0,
        maxscore: 8,
        topscore: 0,
        status: "",
        counter: 1
    };
    
    scoreCount = (id) => {
        let selectedCraftId = this.state.selectedCraftId;

        if (selectedCraftId.includes(id)) {
            if(this.state.counter > this.state.topscore){
            this.setState({ selectedCraftId: [], score: 0, topscore: this.state.counter, counter: 0, status: "You Lost the Game" });
            }
            else
            {
                this.setState({ selectedCraftId: [], score: 0, counter: 0, status: "You Lost the Game" });
            }
            return;
        } else {
            selectedCraftId.push(id)
            this.setState({ counter: this.state.counter + 1});

            if(this.state.counter > this.state.topscore){
                this.setState({topscore: this.state.counter});
            }
            if (selectedCraftId.length === 12) {
                this.setState({ score: 0, topscore: this.state.counter, counter: 0, status: "You've Landed all the crafts", selectedCraftId: [], });
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
            <div className="App">
             <div class="App-container">
                <header className="App-header">
                    <h1 className="App-title">Clicky Game</h1>
                    <p className="App-intro">
                        Try to click each image once 
          </p>
                </header>
                <Score total={this.state.score}
                    goal={12}
                    status={this.state.status}
                    topscore={this.state.topscore}
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
            </div>
        )
    }

}

export default App;