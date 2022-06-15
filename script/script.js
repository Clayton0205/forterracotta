async function getData() {
    let collections = await fetch('https://randomuser.me/api?results=3');
    let data = collections.json();
    return data;
}


async function displayData() {
        let data = await getData();
        data.results.forEach(user => {
         document.querySelector('.container').innerHTML += `
         <div class="card px-auto py-auto">
          <img src="${user['picture'].large}" class="rounded-circle mx-auto" id="image">
          <div id="words">
          <h4 class="text-center">Hi my name is</h4>
          <h3 class="text-center">${user['name'].first} ${user['name'].last} </h3>
          </div>
          <div class="conatiner">
          <div class="row">
          <div class="col-lg-2">
          <i class="bi bi-emoji-smile"></i>
          </div>
          <div class="col-sm-2">
          <i class="bi bi-envelope"></i>
          </div>
          <div class="col-sm-2">
          <i class="bi bi-telephone"></i>
          </div>
          </div>
          </div>
         </div>
         `
        })
}

displayData();