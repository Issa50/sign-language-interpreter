
//main root element
export const root = document.getElementById('root');


// menus 
export const menuHome = document.getElementById('menu-home');
export const menuAbout = document.getElementById('menu-about');
export const menuContact = document.getElementById('menu-contact');
export const menuAppointments = document.getElementById('menu-appointments');
export const menuSignin = document.getElementById('menu-signin');
export const menuSignOut = document.getElementById('sign-out');
export const topEmail = document.getElementById('top-email');

// buttons
export let searchButton = document.getElementById('search-button');
export let bookAppointmentBtn = document.getElementById('book-appointment-btn');
export let allBookingBtns = document.querySelectorAll('.booking-btn');
export let allSeeProfileBtns = document.querySelectorAll('.profile-view-btn');
export let myAccountBtn = document.getElementById('my-account-btn');
export let viewProfileBtn = document.getElementById('view-profile-btn');

export function reloadAll(){
    searchButton = document.getElementById('search-button');
    bookAppointmentBtn = document.getElementById('book-appointment-btn');
    myAccountBtn = document.getElementById('my-account-btn');
    viewProfileBtn = document.getElementById('view-profile-btn');
    allBookingBtns = document.querySelectorAll('.booking-btn');
    allSeeProfileBtns = document.querySelectorAll('.profile-view-btn');
    console.log("asdfsfd ", allBookingBtns)

}


