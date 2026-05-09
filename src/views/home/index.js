import React from 'react';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div>首页</div>
            <button onClick={() => navigate('my')}>去我的页面</button>
        </div>
    );
}

export default Home;
