import { routing } from '../routing/route.js';
import * as Elements from '../utils/elements.js'

export let currentUser = null;

export function addEventListeners() {
    localStorageEventListener();
    checkAuth(getUserData());

    
    Elements.menuSignOut.addEventListener('click', async () => {
        checkAuth(null);
        localStorage.removeItem("userData")
        routing('/')
    })

}

function localStorageEventListener(){
    window.addEventListener('storage', handleStorageChange)
}

function handleStorageChange(event){
    checkAuth(getUserData());

}

function getUserData(){
    return JSON.parse(localStorage.getItem("userData"))
}

function checkAuth(userData){
    if(userData == null){
        let elements = document.getElementsByClassName('pre-auth');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'inline-block';
        }
        elements = document.getElementsByClassName('post-auth');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }

    }else{
        let elements = document.getElementsByClassName('pre-auth');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
        elements = document.getElementsByClassName('post-auth');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'inline-block';
        }
        Elements.topEmail.innerHTML = userData.email

    }

}