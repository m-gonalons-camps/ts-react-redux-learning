import * as React from "react";
import Board from "./components/Board";
import { Square, TSquareValue } from "./components/Square";

import "./Game.css";


interface State {
    squaresValues: TSquareValue[];
    xIsNext: boolean;
    winner: TSquareValue;
}

export default class Game extends React.Component<{}, State> {

    public constructor(props: any) {
        super(props);
        this.initState();
        this.bindings();
    }

    public render(): JSX.Element {
        return (
            <div className="game">
                <div className="game-board">
                    <div className="status">{this.getBoardStatusDescription()}</div>
                    <Board
                        onClick={this.handleSquareClick}
                        squaresValues={this.state.squaresValues}
                    />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }


    private handleSquareClick(clickedSquare: Square): void {
        const squaresValues = this.state.squaresValues.slice();
        const clickedSquareValue = squaresValues[clickedSquare.props.squareNumber];

        if (! this.canSetSquareValue(clickedSquareValue)) return;

        squaresValues[clickedSquare.props.squareNumber] = this.state.xIsNext ? "X" : "O";

        this.setState({
            squaresValues,
            xIsNext: !this.state.xIsNext,
            winner: this.getWinner(squaresValues)
        });
    }

    private canSetSquareValue(clickedSquareValue: TSquareValue): boolean {
        return (
            this.state.winner === null &&
            clickedSquareValue === null
        );
    }

    private getWinner(squaresValues: TSquareValue[]): TSquareValue {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const i in lines) {
            const [a, b, c] = lines[i];
            if (squaresValues[a] && squaresValues[a] === squaresValues[b] && squaresValues[a] === squaresValues[c])
                return squaresValues[a];
        }

        return null;
    }

    private getBoardStatusDescription(): string {
        return (
            this.state.winner ?
            ("Winner: " + this.state.winner) :
            ("Next player: " + (this.state.xIsNext ? "X" : "O"))
        );
    }

    private bindings(): void {
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }

    private initState(): void {
        this.state = {
            squaresValues: Array(Board.totalCols * Board.totalRows).fill(null),
            xIsNext: true,
            winner: null
        };
    }

}
