import * as UserAuth from './services/auth.js';
import * as Home from './pages/home/home.js'
import * as About from './pages/about-us/about-us.js'
import * as Contact from './pages/contact-us/contact-us.js'
import * as Sign from './pages/signin/signin.js'
import * as Appointments from './pages/appointments/appointments.js'
import * as MyAccount from './pages/my-account/my-account.js'
import {routing} from './routing/route.js'

UserAuth.addEventListeners();
Home.addEventListeners();
About.addEventListeners();
Sign.addEventListeners();
Contact.addEventListeners();
Appointments.addEventListeners();
MyAccount.addEventListeners();

window.onload = () => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;

    routing(pathname,hash);
};

window.addEventListener('popstate', e => {
 e.preventDefault(); //no refreshing
 const pathname = e.target.location.pathname;
 const hash = e.target.location.hash;

 routing(pathname,hash);
});