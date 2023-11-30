import * as Elements from '../../utils/elements.js'
import { routePath } from '../../routing/route.js';


export function addEventListeners(){
    Elements.menuAppointments.addEventListener('click', async () => {
        history.pushState(null, null, routePath.APPOINTMENTS);
        await appointment_page();
    });
   
}

export function appointment_page(){
    Elements.root.innerHTML = `
    

    <div class="container">
    <h3 class="text-center mt-4 mb-5">Bookings/Appointments DashBoard </h3>
        <div class="row">
            <div class="col-md-4 col-xs-12 mt-4">
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Pending Bookings</div>
                        Total Pending
                      </div>
                      <span class="badge bg-primary rounded-pill">2</span>
                    </li>
                    <li class="list-group-item mt-2 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Ongoing Bookings</div>
                        Total Ongoing
                      </div>
                      <span class="badge bg-primary rounded-pill">2</span>
                    </li>
                    <li class="list-group-item mt-2 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Cancelled Bookings</div>
                        Total Cancelled
                      </div>
                      <span class="badge bg-primary rounded-pill">2</span>
                    </li>
                    <li class="list-group-item mt-2 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Completed Bookings</div>
                        Total Completed
                      </div>
                      <span class="badge bg-primary rounded-pill">2</span>
                    </li>
                  </ol>

            </div>

            <div class="col-md-8 col-xs-12">
                <div class="card bg-light mt-4">
                    <div class="card-body">
                    <div class="text-section">
                      <h5 class="card-title fw-bold">Tranlate my meeting</h5>
                      <p class="card-text"> I need you to tranlate my meeting with my clients </p>
                    </div>
                    <div class="cta-section">
                      <div>R129.00</div>
                      <a href="#" class="btn btn-dark"> Details </a>
                    </div>
                  </div>
                </div>
                <div class="card bg-warning mt-4">
                    <div class="card-body">
                    <div class="text-section">
                      <h5 class="card-title fw-bold">Tranlate my meeting</h5>
                      <p class="card-text"> I need you to tranlate my meeting with my clients </p>
                    </div>
                    <div class="cta-section">
                      <div>R129.00</div>
                      <a href="#" class="btn btn-dark"> Details </a>
                    </div>
                  </div>
                </div>
                <div class="card bg-info mt-4">
                    <div class="card-body">
                    <div class="text-section">
                      <h5 class="card-title fw-bold">Tranlate my meeting</h5>
                      <p class="card-text"> I need you to tranlate my meeting with my clients </p>
                    </div>
                    <div class="cta-section">
                      <div>R129.00</div>
                      <a href="#" class="btn btn-dark"> Details </a>
                    </div>
                  </div>
                </div>
                <div class="card bg-dark-subtle mt-4">
                    <div class="card-body">
                    <div class="text-section">
                      <h5 class="card-title fw-bold">Tranlate my meeting</h5>
                      <p class="card-text"> I need you to tranlate my meeting with my clients </p>
                    </div>
                    <div class="cta-section">
                      <div>R129.00</div>
                      <a href="#" class="btn btn-dark"> Details </a>
                    </div>
                  </div>
                </div>
                <div class="card bg-success mt-4">
                    <div class="card-body">
                    <div class="text-section">
                      <h5 class="card-title fw-bold">Tranlate my meeting</h5>
                      <p class="card-text"> I need you to tranlate my meeting with my clients </p>
                    </div>
                    <div class="cta-section">
                      <div>R129.00</div>
                      <a href="#" class="btn btn-dark"> Details </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        </div>
    `
}