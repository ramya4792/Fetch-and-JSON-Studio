// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const astr = document.getElementById("container");
            let str = "";
            json.sort(function (a, b) { return b.hoursInSpace - a.hoursInSpace; });
            for (let i = 0; i < json.length; i++) { 
                let colorChange = "black";
                if (json[i].active == true) {
                    colorChange = "green";
                }

                str += `
                    <h4>Total Astronauts: ${json.length}</h4>
                    <div class="astronaut">
                        <div class="bio" style="color:${colorChange}">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3 >
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}"/>
                    </div>
                `;

                
            }
            astr.innerHTML = str;
            
        });
    });
});
