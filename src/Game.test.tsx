/*
    - It must render
    - Given a set of props, must return the correct output
    - States and conditionals, all of them
    - Events
    - Edge cases
*/

import * as React from "react";
import * as ReactDOM from "react-dom";
import Game from "./Game";

it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game />, div);
});
