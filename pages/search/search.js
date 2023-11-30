import * as Elements from '../../utils/elements.js'
import { routePath } from '../../routing/route.js';


export function addEventListeners(){
    Elements.searchButton.addEventListener('click', async () => {
        history.pushState(null, null, routePath.SEARCH);

        let searchVal = document.getElementById("search-field").value
        let langFromVal = document.getElementById("lang-from").value
        let langToVal = document.getElementById("lang-to").value
        let transModeVal = document.getElementById("trans-mode").value

        
        let interpreterList = [
            {name:'Ashanti'},
            {name:'Ashanti'},
            {name:'Deshkant'},
            {name:'Shruti'},
        ]

        interpreterList = interpreterList.filter(intp => intp.name == searchVal);

        await search_page(interpreterList);
    });    
   
}

export function search_page(interpreterList){

    let html = `
        <h1 class="text-center">Search Results:</h1>
        <div class="container mt-5 d-flex justify-content-center">
    `;

    interpreterList.forEach(interpreter => {
        html += `
            
                ${buildResultCardView(interpreter)}
            `;

            
    });

    if(interpreterList.length < 1){
        html += `
        <h4 class="text-center">Nothing match with your search try again.</h4>`;
    }

    html += `</div>`

    Elements.root.innerHTML = html
}



function buildResultCardView(interpreter) {
    return `
        

<div class="card p-4 mt-3 shadow-lg m-3">
  <div class="first">
    <h6 class="heading">Super Sign Lang Translator</h6>
    <div class="time d-flex flex-row align-items-center justify-content-between mt-3">

      <div class="d-flex align-items-center">
        <i class="fa fa-clock-o clock"></i>
        <span class="hour ml-1">3 hrs</span>
      </div>

      <div>
        <span class="font-weight-bold">R90/hr</span>
      </div>
    </div>



  </div>
  <div class="second d-flex flex-row mt-2">
    <div class="image mr-3">
      <img
        src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
        class="rounded-circle" width="60" />
    </div>

    <div class="">

      <div class="d-flex flex-row mb-1">

        <span>@ ${interpreter.name}</span>

        <div class="ratings ml-2">

          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>

        </div>

      </div>

      <div>

        <button class="btn btn-outline-dark btn-sm">See Profile</button>
        

      </div>

    </div>




  </div>


  <hr class="line-color">

  <div class="row">
    <div class="col-6">
      <h6>48/51 completed</h6>
      <div class="third mt-4">

        <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> Book Now</button>


      </div>
      
    </div>
    <div class="col-6">
      <div class="third">
Languages:
<ul style="display: inline;">
  <li>English</li>
  <li>Arabic</li>
  <li>Sign</li>
</ul>


      </div>
      
    </div>
  </div>
</div>
    `;
}