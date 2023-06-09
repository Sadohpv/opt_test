// Import Layout
// import { DefaultLayout, HeaderOnly } from '~/Layouts';

// Import Routes Configuration
import config from '../config';
// Import Pages
import OTP from '../pages/OTP/OTP';
import Home from '../pages/Home';
import ListUser from '../pages/ListUser';
import Login from '../pages/Login';

//Public Route
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
   
    {
        path: config.routes.list,
        component: ListUser,
    },
    {
        path: config.routes.login,
        component: Login,
    }

    
];


// Private Route
const privateRoutes = [
    {
        path: config.routes.otp,
        component: OTP,
    },
];

export {publicRoutes, privateRoutes}