import * as Elements from '../../utils/elements.js'
import { routePath } from '../../routing/route.js';


export function addEventListeners(){
    Elements.menuAbout.addEventListener('click', async () => {
        history.pushState(null, null, routePath.ABOUT);
        await about_page();
    });
   
}

export function about_page(){
    Elements.root.innerHTML = `
    <div class="aboutus-area">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <div class="aboutus-content ">
                        <h1>Aboutus <span>SLIBS</span></h1>
                        <h4>Sign Language Interpreter Booking System</h4>
                        <p>The Sign Language Interpreter Booking System is a web-based application that connects individuals
                        in need of sign language interpretation services with qualified interpreters. The system allows users
                        to register, login, and request an interpreter for a specific date, time, and duration. Interpreters can
                        also register, login, set their availability, specify their specialization, and set their rates. The system
                        will notify available interpreters of new requests and provide users with a list of available interpreters
                        to choose from. Once the user selects an interpreter, they can confirm the booking.
                        
                        </p>

                        <div class="counter ">

                            <div class="single-counter text-center">
                                <h2 class="counter">1500</h2>
                                <p>Total Projects</p>
                            </div>

                            <div class="single-counter text-center">
                                <h2 class="counter">10</h2>
                                <p>Users</p>
                            </div>

                            <div class="single-counter text-center">
                                <h2 class="counter">5</h2>
                                <p>Interpreters</p>
                            </div>

                            <div class="single-counter text-center">
                                <h2 class="counter">6</h2>
                                <p>Total</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}