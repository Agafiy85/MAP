
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
    return "<li>" + "ID:" + item.id + " " + item.name + "Name: " + item.email + "Email:"+"</li>";
      });
      list.insertAdjacentHTML("afterbegin", elem.join(" "));
    })
    .then(() => {
        let itemList = document.querySelectorAll(".list li");
        console.log(itemList);

        for (let i = 0; i < itemList.length; i++) {
            itemList[i].addEventListener("click", () => {
                itemList[i].remove();
            })
        }
    })
    
}

