
//Ch. 13: AJAX
const petition = new XMLHttpRequest();

petition.addEventListener("load", () => {
    let response;
    if (petition.readyState == 4 && petition.status == 200) {
        console.log(petition.response)
    } else {
        response = "I am sorry, the file is not"
    }
    console.log(JSON.parse(response).name);
})

petition.open("GET", "informacion.txt");

petition.send();

//Using Fetch
petition = fetch('link');
petition.then(res => console.log(res));
console.log(petition);