import React  from "react";
import {BrowserRouter,Switch} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import HomeRoter from '../views/home/router';
import MyRoter from '../views/my/router';

const routes=[
    ...HomeRoter,
    ...MyRoter
]

const RootRouter=()=>(
    <BrowserRouter>
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </BrowserRouter>
);
export default RootRouter;