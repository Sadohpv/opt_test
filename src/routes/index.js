// Import Layout
// import { DefaultLayout, HeaderOnly } from '~/Layouts';

// Import Routes Configuration
import config from '../config';
// Import Pages
import OTP from '../pages/OTP/OTP';
import Home from '../pages/Home';


//Public Route
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.otp,
        component: OTP,
    },
 
    
];


// Private Route
const privateRoutes = [

];

export {publicRoutes, privateRoutes}