import * as Elements from '../../utils/elements.js'
import { routePath } from '../../routing/route.js';

export function addEventListeners() {
  
  Elements.allBookingBtns.forEach(bookingBtn => {
    bookingBtn.addEventListener('click', async () => {
        history.pushState(null, null, routePath.BOOK_APPOINTMENT);
        await book_appointment_page();
    });
    
  });
  
  }

  export function book_appointment_page(){
    let html = `
    <div class="container">

    <div class="row">
    <h4 class="text-center shadow mb-3 mt-2 p-3"> Take Appointment/Book Interpreter Page </h4>
    </div>

    <div class="row">
      <form class="p-3 rounded offset-xl-3 col-xl-6 shadow-lg">
          Interpreter Name:
          <input class="col-4 form-control" placeholder="XXX" type="text" readonly> <br>
          Start Date Time:
          <input class="col-4 form-control" type="datetime-local"> <br>
          Mode:
          <select class="col-4 form-control">
              <option selected disabled placeholder="">Mode</option>
              <option value="1">Text to Text</option>
              <option value="2">Audio to Text</option>
              <option value="3">On Call</option>
              <option value="4">Text to Audio</option>
              <option value="5">On Sit</option>
          </select> <br>
          <button type="button" class="btn btn-secondary">Cancel</button>
          <button type="button" class="btn btn-primary">Submit Request</button>
      </form>
    </div>
</div>
    `

    Elements.root.innerHTML = html;
  }