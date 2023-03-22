let container = document.createElement("div");
container.setAttribute("class","container");
let row = document.createElement("div");
row.setAttribute("class" ,"row");
container.append(row);


var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));


function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-lg-4 col-sm-12 ">
         <div class="card " style="width: 18rem;">
      <div class="head"><h1 id="title" class="text-center">${data1[i].name}</h1></div>
  <img src="${data1[i].flag}" class="card-img-top" alt="flag"></img>
  <div class="card-body">
    <p class="card-text">Capital:${data1[i].capital}
     <p>Region:${data1[i].region}</p>
     <p>Country Code: ${data1[i].alpha3Code}</p></p>
     <a href="https://openweathermap.org/" class="btn btn-primary">Click for Whether</a>
  </div>
</div></div>`
    }
    
    document.body.append(container);
}

