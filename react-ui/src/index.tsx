import {render} from "react-dom";
import "./index.scss";
import CssBaseline from "@mui/material/CssBaseline";
import * as serviceWorker from "./serviceWorker";
import { GlobalStore } from "./store/GlobalStore";
import HomePage from "./pages/HomePage";

render(
  <CssBaseline>
    <GlobalStore>
      <HomePage/>
    </GlobalStore>
  </CssBaseline>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();