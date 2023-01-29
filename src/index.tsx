import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemProvider from "./theme/ThemProvider";

render(
    <BrowserRouter>
        <ThemProvider>
            <App/>
        </ThemProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
