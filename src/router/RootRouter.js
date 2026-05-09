import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../views/home';
import My from '../views/my';

const RootRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my" element={<My />} />
        </Routes>
    </BrowserRouter>
);

export default RootRouter;
