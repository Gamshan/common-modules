import ReactDOM from "react-dom";
import React from "react";
import Auth from "./common/Auth";

import Test from "./Test";

Auth.appName = "common-modules"

ReactDOM.render(<Test/>, document.getElementById('root'));