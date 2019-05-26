// let some = document.querySelector("#some");

// some = addEventListener("click", Request);
// function Request(){
    // let url = "https://jsonplaceholder.typicode.com/users"

       

// fetch(url)
// .then(response =>{
//     console.log(response);
//     return response.json()
// })
// .then(users =>{
//     console.log(users);

//     var user = users.map(item =>{
//         return item.name + item.id + item.email;
//     })
//     console.log(user);
// })

//  }

// function Request(){
//     let url = "https://jsonplaceholder.typicode.com/users";
//     fetch(url)
//     .then(response =>{
//     console.log("Response: ", response);
//     return response.json()
//     })
//     .then(data =>{
//     console.log("Data: ", data);
//     var list = document.querySelector(".list");
//     var  counter = 0;
//     var elem = data.map(item =>{
        
//         document.getElementById('some').disabled = true;

//         counter++;
// localStorage.setItem("user" + counter, item.name + ' // ' + item.email);
//         // localStorage.setItem("user");
//     return '<li>' + item.id + ' ' + item.name + ' ' + item.email + '</li>'
//     })
//     list.insertAdjacentHTML('afterbegin', elem.join(' '));
//     })
// }

let btn = document.querySelector("#btn");
btn.addEventListener("click", Request);

function Request() {
  let url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then(response => {
      console.log("Response: ", response);
      btn.setAttribute("disabled", true);
      return response.json();
    })
    .then(data => {
      console.log("Data: ", data);
      var list = document.querySelector(".list");
      var counter = 0;
      var elem = data.map(item => {
        counter++;
        localStorage.setItem("User" + counter, item.id + " " + item.name + " " + item.email
    );
        return "<li>" + item.id + " " + item.name + " " + item.email + "</li>";
      });
      list.insertAdjacentHTML("afterbegin", elem.join(" "));
    });
}