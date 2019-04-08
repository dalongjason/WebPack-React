import Home from '../Views/Home/index.jsx';
import My from '../Views/My/index.jsx';
import Error from '../Views/Error/index.jsx';


const Route=[
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/my',
        exact: true,
        component: My
    },
    {
        path: '**',
        component: Error
    }
]
export default Route;