import * as React from "react";
import { Square, TSquareValue } from "./Square";

interface Props {
    onClick: (clickedSquare: Square) => void;
    squaresValues: TSquareValue[];
}

export default class Board extends React.Component<Props> {

    public static readonly totalRows = 3;
    public static readonly totalCols = 3;

    public render(): JSX.Element {
        return (
            <div>{this.renderBoardRows()}</div>
        );
    }

    private renderBoardRows(): JSX.Element[] {
        const rows = [] as JSX.Element[];

        for (let i = 0; i < Board.totalRows; i += 1) {
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

        for (let i = 0; i < Board.totalCols; i += 1)
            squares.push(this.renderSquare(i, row));

        return squares;
    }

    private renderSquare(row: number, column: number): JSX.Element {
        const squareNumber: number = column + (Board.totalCols * row);

        return (
            <Square
                squareNumber={squareNumber}
                value={this.props.squaresValues[squareNumber]}
                onClick={this.props.onClick}
            />
        );
    }

}
