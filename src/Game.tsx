import * as React from "react";
import Board from "./components/Board";

import "./Game.css";


export default class Game extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }

}
