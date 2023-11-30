import { about_page } from "../pages/about-us/about-us.js"
import { appointment_page } from "../pages/appointments/appointments.js";
import { contact_page } from "../pages/contact-us/contact-us.js";
import { home_page } from "../pages/home/home.js"
import { signin_page } from "../pages/signin/signin.js";
import { search_page } from "../pages/search/search.js";
import { book_appointment_page } from "../pages/book-appointment/book-appointment.js";
import { my_account_page } from "../pages/my-account/my-account.js";
import { profile_view_page } from "../pages/profile-view/profile-view.js";


export const routePath = {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    APPOINTMENTS: '/appointments',
    SIGNIN: '/signin',
    SEARCH: '/search',
    BOOK_APPOINTMENT: '/book-appointment',
    MY_ACCOUNT: '/my-account',
    PROFILE_VIEW: '/view-profile',
}


export const routes = [
    { path: routePath.HOME, page: home_page },
    { path: routePath.ABOUT, page: about_page },
    { path: routePath.CONTACT, page: contact_page },
    { path: routePath.APPOINTMENTS, page: appointment_page },
    { path: routePath.SIGNIN, page: signin_page },
    { path: routePath.SEARCH, page: search_page },
    { path: routePath.BOOK_APPOINTMENT, page: book_appointment_page },
    { path: routePath.MY_ACCOUNT, page: my_account_page },
    { path: routePath.PROFILE_VIEW, page: profile_view_page },
];


export function routing(pathname, hash) {
    const route = routes.find(element => element.path == pathname);
    if (route) {
        if (hash && hash.length > 1)
            route.page(hash.substring(1));
        else
            route.page();
    }
    else routes[0].page();
}