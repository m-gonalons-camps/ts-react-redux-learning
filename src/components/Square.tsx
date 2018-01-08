import * as React from "react";

export type TSquareValue = "O" | "X" | null;

interface Props {
    value: TSquareValue;
    squareNumber: number;
    onClick: (clickedSquare: Square) => void;
}

export class Square extends React.Component<Props> {

    public render(): JSX.Element {
        const onClick = () => this.props.onClick(this);

        return (
            <button className="square" onClick={onClick}>
                {this.props.value}
            </button>
        );
    }

}
