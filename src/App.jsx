import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
    const routeElement = useRoutes(routes); // 路由管理

    return (
        <div>
            {routeElement}
        </div>
    )
}

export default App;