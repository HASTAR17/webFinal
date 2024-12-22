document.querySelector("#postBtn").addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "/prac.json", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) { // Success or Created
            console.log("Data successfully sent!");
            console.log("Response:", xhr.responseText);

            document.querySelector("#output").innerHTML = "<h3>Data successfully sent!</h3>";

            let sentData = JSON.parse(xhr.responseText);
            displaySentData(sentData);
        } else {
            console.error("Failed to send data. Status:", xhr.status);
            document.querySelector("#output").innerHTML = "Failed to send data.";
        }
    };

    xhr.onerror = () => {
        console.error("Network error occurred.");
        document.querySelector("#output").innerHTML = "Network error occurred.";
    };

    let dataToSend = {
        dept: "CSE",
        teacher: "Feroza Naznin",
        course: "Web Programming",
        topic: "KSA-2"
    };

    xhr.send(JSON.stringify(dataToSend));
});

document.querySelector("#getBtn").addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/HASTAR17/Web-Programming-/refs/heads/main/ajax.json", true);

    xhr.onload = () => {
        if (xhr.status === 200) { // Success
            console.log("Data successfully fetched!");
            console.log("Response:", xhr.responseText);


            let data = JSON.parse(xhr.responseText);


            displayFetchedData(data);
        } else {
            console.error("Failed to fetch data. Status:", xhr.status);
            document.querySelector("#output").innerHTML = "Failed to fetch data.";
        }
    };

    xhr.onerror = () => {
        console.error("Network error occurred.");
        document.querySelector("#output").innerHTML = "Network error occurred.";
    };

    xhr.send();
});


function displaySentData(data) {
    let out = "<h2>Data Sent:</h2>";

    out += "<p><strong>Department:</strong> " + data.dept + "</p>";
    out += "<p><strong>Teacher:</strong> " + data.teacher + "</p>";
    out += "<p><strong>Course:</strong> " + data.course + "</p>";
    out += "<p><strong>Topic:</strong> " + data.topic + "</p>";

    document.querySelector("#output").innerHTML += out;
}


function displayFetchedData(data) {
    let out = "<h2>Your Information:</h2>";
    out += "<h2>Data Get:</h2>";

    out += "<p><strong>Name:</strong> " + data.name + "</p>";
    out += "<p><strong>Student ID:</strong> " + data.myid + "</p>";
    out += "<p><strong>Email:</strong> " + data.email + "</p>";
    out += "<p><strong>Phone:</strong> " + data.phone + "</p>";
    out += "<p><strong>Social Media:</strong> " + data.social_media + "</p>";
    out += "<p><strong>Languages:</strong> " + data.languages.join(", ") + "</p>";
    out += "<p><strong>Hobbies:</strong> " + data.hobbies.join(", ") + "</p>";

    document.querySelector("#output").innerHTML += out;
}
