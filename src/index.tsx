import registerServiceWorker from "./registerServiceWorker";

import * as React from "react";
import * as ReactDOM from "react-dom";

import "../node_modules/css-reset/reset.css";
import Game from "./Game";

ReactDOM.render(
    <Game /> as JSX.Element,
    document.getElementById("root") as HTMLElement
);


registerServiceWorker();
