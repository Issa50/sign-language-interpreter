import * as Elements from '../../utils/elements.js'
import { routePath } from '../../routing/route.js';
import { appointment_page } from '../appointments/appointments.js';
import * as UserAuth from '../../services/auth.js';




export function addEventListeners() {

    Elements.menuSignin.addEventListener('click', async () => {
        history.pushState(null, null, routePath.SIGNIN);
       
        await signin_page();
        await attachFormEvents();
    });  



     
}



function attachFormEvents(){    
    const formSignIn = document.getElementById('signin-form');
    const formSignUp = document.getElementById('signup-form');

     const passwordInput = document.getElementById('logpass');
 const showPasswordCheckbox = document.getElementById('showPassword');

    formSignIn?.addEventListener('submit', async e => {
        e.preventDefault(); // keeps from refreshing the current page.
        const email = e.target.logemail.value;
        const password = e.target.logpass.value;
        try {
                let userData = {
                    email: email,
                    password: password
                }
                fetch("http://localhost:3300/auth/sign_in", {
                    method: "POST",
                    body: JSON.stringify(
                        userData
                    ),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then((response) => response.json())
                    .then((json) => {
    
                    console.log("api response: ", json)
                    if(json.message == "Authentication failed. Invalid user or password."){
                        alert("Invalid username or password");
                        return
                    }
                    localStorage.setItem('userData', JSON.stringify(userData))
                    history.pushState(null, null, routePath.HOME);
                    appointment_page()
                    UserAuth.addEventListeners();
                }).catch(err => {
                    console.log("api error: ", err)
                });

            
        } catch (error) {

        }
    })
    
    formSignUp?.addEventListener('submit', async e => {
        e.preventDefault(); // keeps from refreshing the current page.
        const name = e.target.regname.value;
        const email = e.target.regemail.value;
        const password = e.target.regpass.value;
        var userType = document.getElementsByName('flexRadioDefault')[0]

        let userData = {
            fullName: name,
            email: email,
            password: password,
            user_type: userType.checked ? 1 : 2
        }

        console.log("data: ", userData)

        fetch("http://localhost:3300/auth/register", {
                    method: "POST",
                    body: JSON.stringify(
                        userData
                    ),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then((response) => response.json())
                    .then((json) => {
    
                    console.log("api response: ", json)
                    if(json.message == "Authentication failed. Invalid user or password."){
                        alert("Invalid username or password");
                        return
                    }
                    localStorage.setItem('userData', JSON.stringify(userData))
                    history.pushState(null, null, routePath.HOME);
                    appointment_page()
                    UserAuth.addEventListeners();
                }).catch(err => {
                    console.log("api error: ", err)
                });
    })

    showPasswordCheckbox?.addEventListener('change', () => {
        if (showPasswordCheckbox.checked) {
            passwordInput.type = 'text';
    } else {
          passwordInput.type = 'password';
    }
    }); 

}   



export function signin_page(){

    Elements.root.innerHTML = `



    <div class="main-signin">
    <div class="container">
        <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                    <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                      <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                      <label for="reg-log"></label>
                    <div class="card-3d-wrap mx-auto">
                        <div class="card-3d-wrapper">
                            <div class="card-front">
                                <div class="center-wrap">
                                    <div class="section text-center">
                                        <h4 class="mb-4 pb-3">Log In</h4>
                                        <form id="signin-form" method="post">
                                            <div class="form-group">
                                                <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off">
                                                <i class="input-icon uil uil-at"></i>
                                            </div>	
                                            <div class="form-group mt-2">
                                                <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off">
                                                <i class="input-icon uil uil-lock-alt"></i>
                                                <input  id="showPassword" style="position: unset;" type="checkbox">
                                                <strong>Show Password</strong>
                                            </div>
                                            <button type="submit" class="btn mt-4">submit</button>
                                            <p data-bs-toggle="modal" data-bs-target="#exampleModal" class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                                        </form>
                                    </div>
                                  </div>
                              </div>
                            <div class="card-back">
                                <div class="center-wrap">
                                <form id="signup-form" method="post">
                                    <div class="section text-center">
                                        <h4 class="mb-4 pb-3">Sign Up</h4>
                                        <div class="form-group">
                              
                                      
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          As User
                                        </label>
                                      </div>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" name="regname" class="form-style" placeholder="Your Full Name" id="regname" autocomplete="off">
                                            <i class="input-icon uil uil-user"></i>
                                        </div>	
                                        <div class="form-group mt-2">
                                            <input type="email" name="regemail" class="form-style" placeholder="Your Email" id="regemail" autocomplete="off">
                                            <i class="input-icon uil uil-at"></i>
                                        </div>	
                                        <div class="form-group mt-2">
                                            <input type="password" name="regpass" class="form-style" placeholder="Your Password" id="regpass" autocomplete="off">
                                            <i class="input-icon uil uil-lock-alt"></i>
                                        </div>
                                        <button type="submit" class="btn mt-4">submit</button>
                                      </div>
                                      </form>
                                  </div>
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









