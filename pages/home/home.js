import * as Elements from '../../utils/elements.js'
import { routePath } from '../../routing/route.js';
import * as Search from '../search/search.js'
import * as Book_Appointment from '../book-appointment/book-appointment.js'
import * as Profile_View from '../profile-view/profile-view.js'



export function addEventListeners() {
  

  loadScript('./../assets/libs/choices.js', function (){
    console.log('script loaded')
  })
    Elements.menuHome.addEventListener('click', async () => {
        history.pushState(null, null, routePath.HOME);
        await home_page();
    });

}

function loadScript(url, callback){
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url

  script.onload = callback;

  document.head.appendChild(script)
}


export async function home_page() {

    let html = `
    <!-- <div class="hero" style="background-image: url('assets/imgs/hero_1.jpg');"></div> -->



<div class="s132">
  <video playsinline autoplay muted loop poster="cake.jpg">
    <source src="/assets/imgs/bannervid.mp4" type="video/webm">
    Your browser does not support the video tag.
  </video>

  <form>
    <div class="inner-form">
      <div class="input-field first-wrap">
        <div class="input-select">
          <select id="lang-from" data-trigger="" name="choices-single-defaul">
            <option placeholder="">Language From</option>
            <option value="1">English</option>
            <option value="2">Zulu</option>
      
          </select>
        </div>
      </div>
      <div class="input-field first-wrap">
        <div class="input-select">
          <select id="lang-to" data-trigger="" name="choices-single-defaul">
            <option placeholder="">Language To</option>
            <option value="1">English</option>
            <option value="2">Zulu</option>
   
          </select>
        </div>
      </div>
      <div class="input-field first-wrap">
        <div class="input-select">
          <select id="trans-mode" data-trigger="" name="choices-single-defaul">
            <option placeholder="">Mode</option>
            <option value="3">On video Call</option>
            <option value="2">Audio to Text</option>
            <option value="5">On Sit ( everywhere )</option>
          </select>
        </div>
      </div>
      <div class="input-field first-wrap">
        <input class="position-relative" id="search-field" type="text" placeholder="Enter Keywords" />
      </div>
      <div class="input-field third-wrap">
        <button id="search-button" class="btn-search" type="button">Search</button>
      </div>
    </div>
  </form>
</div>

<div class="row">
  <h3 class="text-center mt-3">Top Rated Interpreters</h3>
</div>

<div class="container mt-5 d-flex justify-content-center">
  <div class="row">
    <div class="col-md-4 col-xs-12">
      <div class="card p-4 mt-3 shadow-lg m-3">
        <div class="first">
          <h6 class="heading">Super Sign Lang Translator </h6>
          <div class="time d-flex flex-row align-items-center justify-content-between mt-3">

            <div class="d-flex align-items-center">
              <i class="fa fa-clock-o clock"></i>
              <span class="hour ml-1">3 hrs</span>
            </div>

            <div>
              <span class="font-weight-bold">R90/1hours</span>
            </div>
          </div>



        </div>
        <div class="second d-flex flex-row mt-2">
          <div class="image mr-3">
            <img
            src="/assets/imgs/Staff-BC-PP-67.png"
              class="rounded-circle" width="60" />
          </div>

          <div class="">

            <div class="d-flex flex-row mb-1">

              <span>@Sign Language</span>

              <div class="ratings ml-2">

                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>

              </div>

            </div>

            <div>

              <button id="view-profile-btn" class="profile-view-btn btn btn-outline-dark btn-sm">See Profile</button>


            </div>

          </div>




        </div>


        <hr class="line-color">

        <div class="row">
          <div class="col-6">
            <h6>0/0 completed</h6>
            <div class="third mt-4">

              <button id="book-appointment-btn" class="booking-btn btn btn-success btn-block"><i
                  class="fa fa-clock-o"></i> Book Now</button>


            </div>

          </div>
          <div class="col-6">
            <div class="third">
              Languages:
              <ul style="display: inline;">
                <li>English</li>
                <li>Zulu</li>
              </ul>


            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-xs-12">

      <div class="card p-4 mt-3 shadow-lg m-3">
        <div class="first">
          <h6 class="heading">Super Sign Lang Translator</h6>
          <div class="time d-flex flex-row align-items-center justify-content-between mt-3">

            <div class="d-flex align-items-center">
              <i class="fa fa-clock-o clock"></i>
              <span class="hour ml-1">3 hrs</span>
            </div>

            <div>
              <span class="font-weight-bold">R90/1hours</span>
            </div>
          </div>



        </div>
        <div class="second d-flex flex-row mt-2">
          <div class="image mr-3">
            <img
            src="/assets/imgs/Staff-BC-PP1-19-300x300.png"
              class="rounded-circle" width="60" />
          </div>

          <div class="">

            <div class="d-flex flex-row mb-1">

              <span>@Sign Language</span>

              <div class="ratings ml-2">

                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>

              </div>

            </div>

            <div>

              <button id="view-profile-btn" class="profile-view-btn btn btn-outline-dark btn-sm">See Profile</button>


            </div>

          </div>




        </div>


        <hr class="line-color">

        <div class="row">
          <div class="col-6">
            <h6>0/0 completed</h6>
            <div class="third n4
            mt-4">

              <button id="book-appointment-btn" class="booking-btn btn btn-success btn-block"><i
                  class="fa fa-clock-o"></i> Book Now</button>


            </div>

          </div>
          <div class="col-6">
            <div class="third">
              Languages:
              <ul style="display: inline;">
                <li>English</li>
                <li>afrikaans</li>
                
              </ul>


            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-xs-12">

      <div class="card p-4 mt-3 shadow-lg m-3">
        <div class="first">
          <h6 class="heading">Super Sign Lang Translator</h6>
          <div class="time d-flex flex-row align-items-center justify-content-between mt-3">

            <div class="d-flex align-items-center">
              <i class="fa fa-clock-o clock"></i>
              <span class="hour ml-1">3 hrs</span>
            </div>

            <div>
              <span class="font-weight-bold">R90/1hours</span>
            </div>
          </div>



        </div>
        <div class="second d-flex flex-row mt-2">
          <div class="image mr-3">
            <img
            src="/assets/imgs/Staff-BC-PP-20.png"
              class="rounded-circle" width="60" />
          </div>

          <div class="">

            <div class="d-flex flex-row mb-1">

              <span>@Sign Language</span>

              <div class="ratings ml-2">

                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>

              </div>

            </div>

            <div>

              <button id="view-profile-btn" class="profile-view-btn btn btn-outline-dark btn-sm">See Profile</button>


            </div>

          </div>




        </div>


        <hr class="line-color">

        <div class="row">
          <div class="col-6">
            <h6>0/0 completed</h6>
            <div class="third mt-4">

              <button id="book-appointment-btn" class="booking-btn btn btn-success btn-block"><i
                  class="fa fa-clock-o"></i> Book Now</button>


            </div>

          </div>
          <div class="col-6">
            <div class="third">
              Languages:
              <ul style="display: inline;">
                <li>English</li>
                <li>Xhosa </li>
              
              </ul>

            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-xs-12">

      <div class="card p-4 mt-3 shadow-lg m-3">
        <div class="first">
          <h6 class="heading">Super Sign Lang Translator</h6>
          <div class="time d-flex flex-row align-items-center justify-content-between mt-3">

            <div class="d-flex align-items-center">
              <i class="fa fa-clock-o clock"></i>
              <span class="hour ml-1">3 hrs</span>
            </div>

            <div>
              <span class="font-weight-bold">R90/1hours</span>
            </div>
          </div>



        </div>
        <div class="second d-flex flex-row mt-2">
          <div class="image mr-3">
            <img
            src="/assets/imgs/Untitled.png"
              class="rounded-circle" width="60" />
          </div>

          <div class="">

            <div class="d-flex flex-row mb-1">

              <span>@Sign Lnaguage </span>

              <div class="ratings ml-2">

                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>

              </div>

            </div>

            <div>

              <button id="view-profile-btn" class="profile-view-btn btn btn-outline-dark btn-sm">See Profile</button>


            </div>

          </div>




        </div>


        <hr class="line-color">

        <div class="row">
          <div class="col-6">
            <h6>0/0 completed</h6>
            <div class="third mt-4">

              <button id="book-appointment-btn" class="booking-btn btn btn-success btn-block"><i
                  class="fa fa-clock-o"></i> Book Now</button>


            </div>

          </div>
          <div class="col-6">
            <div class="third">
              Languages:
              <ul style="display: inline;">
                <li>English</li>
                <li>Tsonga </li>
             
              </ul>

            </div>

          </div>
        </div>
      </div>
    </div>
    
    <div class="col-md-4 col-xs-12">

      <div class="card p-4 mt-3 shadow-lg m-3">
        <div class="first">
          <h6 class="heading">Super Sign Lang Translator</h6>
          <div class="time d-flex flex-row align-items-center justify-content-between mt-3">

            <div class="d-flex align-items-center">
              <i class="fa fa-clock-o clock"></i>
              <span class="hour ml-1">3 hrs</span>
            </div>

            <div>
              <span class="font-weight-bold">R90/1hours</span>
            </div>
          </div>



        </div>
        <div class="second d-flex flex-row mt-2">
          <div class="image mr-3">
            <img
            src="/assets/imgs/Johnson.png"
              class="rounded-circle" width="60" />
          </div>

          <div class="">

            <div class="d-flex flex-row mb-1">

              <span>@Sign Language</span>

              <div class="ratings ml-2">

                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>

              </div>

            </div>

            <div>

              <button id="view-profile-btn" class="profile-view-btn btn btn-outline-dark btn-sm">See Profile</button>


            </div>

          </div>




        </div>


        <hr class="line-color">

        <div class="row">
          <div class="col-6">
            <h6>0/0 completed</h6>
            <div class="third mt-4">

              <button id="book-appointment-btn" class="booking-btn btn btn-success btn-block"><i
                  class="fa fa-clock-o"></i> Book Now</button>


            </div>

          </div>
          <div class="col-6">
            <div class="third">
              Languages:
              <ul style="display: inline;">
                <li>English</li>
                <li>Zulu</li>
           
              </ul>

            </div>

          </div>
        </div>
      </div>
    </div>





  </div>

</div>




</div>

</div>
    
    `
    Elements.root.innerHTML = html;

    Elements.reloadAll();
    
    const choices = new Choices('[data-trigger]',
    {
      searchEnabled: false,
      itemSelectText: '',
    });

  Search.addEventListeners();
  Book_Appointment.addEventListeners();
  Profile_View.addEventListeners();

    
}

  