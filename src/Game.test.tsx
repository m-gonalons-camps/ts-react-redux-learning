import * as React from "react";
import * as ReactDOM from "react-dom";
import Game from "./Game";

it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game />, div);
});
