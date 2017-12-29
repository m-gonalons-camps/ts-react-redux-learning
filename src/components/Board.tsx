import * as React from "react";
import { Square, TSquareValue } from "./Square";


interface State {
    squaresValues: TSquareValue[];
    xIsNext: boolean;
    winner: TSquareValue;
}

export default class Board extends React.Component<{}, State> {

    private readonly totalRows = 3;
    private readonly totalCols = 3;

    public constructor(props: any) {
        super(props);
        this.initState();

        this.handleClick = this.handleClick.bind(this);
    }

    public render(): JSX.Element {


        const status = "Next player: " + (this.state.xIsNext ? "X" : "O");

        return (
            <div>
                <div className="status">{status}</div>
                {this.renderBoardRows()}
            </div>
        );
    }

    private renderBoardRows(): JSX.Element[] {
        const rows = [] as JSX.Element[];

        for (let i = 0; i < this.totalRows; i += 1) {
            rows.push(
                <div className="board-row">
                    {this.renderRowSquares(i)}
                </div>
            );
        }

        return rows;
    }

    private renderRowSquares(row: number): JSX.Element[] {
        const squares = [] as JSX.Element[];

        for (let i = 0; i < this.totalCols; i += 1) {
            squares.push(this.renderSquare(i, row));
        }

        return squares;
    }

    private renderSquare(row: number, column: number): JSX.Element {
        const squareNumber: number = column + (this.totalCols * row);

        return (
            <Square
                squareNumber={squareNumber}
                value={this.state.squaresValues[squareNumber]}
                onClick={this.handleClick}
            />
        );
    }

    private handleClick(clickedSquare: Square): void {
        const squaresValues = this.state.squaresValues.slice();
        const clickedSquareValue = squaresValues[clickedSquare.props.squareNumber];

        if (! this.canSetSquareValue(clickedSquareValue)) return;

        squaresValues[clickedSquare.props.squareNumber] = this.state.xIsNext ? "X" : "O";

        this.setState({
            squaresValues,
            xIsNext: !this.state.xIsNext
        });
    }

    private canSetSquareValue(clickedSquareValue: TSquareValue): boolean {
        return (
            this.state.winner === null &&
            clickedSquareValue === null
        );
    }

    private initState(): void {
        this.state = {
            squaresValues: Array(this.totalCols * this.totalRows).fill(null),
            xIsNext: true,
            winner: null
        };
    }

}
