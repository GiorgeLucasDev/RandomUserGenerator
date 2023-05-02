const generateButton = document.querySelector(".generateButton");

async function getRandomInfo(){
    const response = await fetch("https://randomuser.me/api");
    return response;
}

generateButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("teste");
    getRandomInfo()
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        const {name, gender, email} = data.results[0];
    

        document.querySelector(".info").innerHTML = 
        `
            <p class="userInfo name active">Name: ${name.title + ' ' + name.first + ' ' + name.last}</p>
            <p class="userInfo gender active">Gender: ${gender}</p>
            <p class="userInfo email active">Email: ${email}</p>
        `;
        
    });
});