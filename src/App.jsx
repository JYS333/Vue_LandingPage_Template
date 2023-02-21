import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

import './assets/css/index.less';

const App = () => {
    const routeElement = useRoutes(routes); // routes

    return (
        <div>
            {routeElement}
        </div>
    )
}

export default App;