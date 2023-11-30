import * as Elements from '../../utils/elements.js'
import { routePath } from '../../routing/route.js';


export function addEventListeners(){
    Elements.myAccountBtn.addEventListener('click', async () => {
        history.pushState(null, null, routePath.MY_ACCOUNT);
        my_account_page()
    })
}

export function my_account_page(){

    let html = `
    
    
<div class="main-content">
<!-- Page content -->
<div class="container-fluid mt--7">
  <div class="row">
    <div class="offset-xl-2 col-xl-8 order-xl-1">
      <div class="card round shadow">
        <div class="card-header bg-white">
          <div class="row align-items-center">
            <div class="col-12 p-2">
              <h3 class="text-center mb-0">My account</h3>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form>
            <h6 class="heading-small text-muted mb-4">User information</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-username">Username</label>
                    <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value="Issa12">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="input-email">Email address</label>
                    <input type="email" id="input-email" class="form-control form-control-alternative" placeholder="Issamabuza@gmail.com">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-first-name">First name</label>
                    <input type="text" id="input-first-name" class="form-control form-control-alternative" placeholder="First name" value="Issa">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-last-name">Last name</label>
                    <input type="text" id="input-last-name" class="form-control form-control-alternative" placeholder="Last name" value="Mabuza">
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4">
            <!-- Address -->
            <h6 class="heading-small text-muted mb-4">Contact information</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-address">Address</label>
                    <input id="input-address" class="form-control form-control-alternative" placeholder="Home Address" value="138 Berg Ave, Heatherdale AH, Akasia, 0182" type="text">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-city">City</label>
                    <input type="text" id="input-city" class="form-control form-control-alternative" placeholder="City" value="Pretroia">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-country">Country</label>
                    <input type="text" id="input-country" class="form-control form-control-alternative" placeholder="Country" value="South Africa">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label class="form-control-label" for="input-country">Postal code</label>
                    <input type="number" id="input-postal-code" class="form-control form-control-alternative" placeholder="Postal code">
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4">
            <!-- Interpreter Details -->
            <h6 class="heading-small text-muted mb-4">Interpreter Details</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-address">Speciality</label>
                    <input id="input-address" class="form-control form-control-alternative" placeholder="On sit, video meetings, sign language, normal languages" type="text">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-city">Rate Per Hour</label>
                    <input type="text" id="input-city" class="form-control form-control-alternative" placeholder="R 90" value="R 90">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-country">Availability</label>
                    <input type="text" id="input-country" class="form-control form-control-alternative" placeholder="40Hr/Week" value="40Hr/Week">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label class="form-control-label" for="input-country">Team Members</label>
                    <input type="number" id="input-postal-code" class="form-control form-control-alternative" placeholder="3">
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4">
            <!-- Description -->
            <h6 class="heading-small text-muted mb-4">
            <div class="pl-lg-4">
              <div class="form-group focused">
                <label>About Me</label>
                <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ...">A Best Sign Language Interpreter. Also can interprete other languages</textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    `

    Elements.root.innerHTML = html

}