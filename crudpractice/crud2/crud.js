document.getElementById("submitData").addEventListener("submit", async (e) => {
    console.log("I'm in");
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    console.log("Name:", name);
    console.log("Email:", email);

    let data = { name, email };
    console.log("Data", data);

    try {
        const response = await fetch("https://6692545a346eeafcf46c8ece.mockapi.io/01_CRUD",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        let postedData = await response.json();
        console.log("Posted Data:", postedData);

        document.getElementById('dispSubmitInfo').innerHTML = `Data Sent Successfully!`;

    } catch (err) {
        document.getElementById('dispSubmitInfo').innerHTML = `There Was A Problem Submitting Your Form!`;
    }
});
document.getElementById('dispFetchInfo').innerHTML = "";
document.getElementById('FetchInfo').addEventListener("click", async () => {
    try {
        let url = "https://6692545a346eeafcf46c8ece.mockapi.io/01_CRUD";
        let link = await fetch(url);
        console.log("LINK", link);

        let convertedData = await link.json();

        document.getElementById('dispFetchInfo').innerHTML = "";

        convertedData.forEach(element => {
            let p = document.getElementById('dispFetchInfo');
            let disp = `<p>ID: ${element.id}</p> <p>Name: ${element.name}</p> <p>Email: ${element.email}</p>`;
            document.getElementById('dispFetchInfo').innerHTML += disp;

            let editBtn = document.createElement('button');
            editBtn.setAttribute("class", "btn");
            editBtn.setAttribute('id', `editBtn-${element.id}`);
            editBtn.innerHTML = 'Edit';
            p.appendChild(editBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'btn');
            deleteBtn.setAttribute('id', `deleteBtn-${element.id}`);
            deleteBtn.innerHTML = 'Delete';
            p.appendChild(deleteBtn);

            editBtn.addEventListener('click', () => editData(element.id));
            deleteBtn.addEventListener('click', () => deleteData(element.id));
        });
    } catch (error) {
        document.getElementById('dispFetchInfo').innerHTML = `<p> There Was An Error Fetching The Data. </p>`;
    }
});

async function deleteData(dataId) {
    try {
        const response = await fetch(`https://6692545a346eeafcf46c8ece.mockapi.io/01_CRUD/${dataId}`, {
            method: "DELETE",
        });
        const result = await response.json();
        console.log("Response Delete: ", result);
        document.getElementById('FetchInfo').click();
    } catch (error) {
        console.log("Error Deleting Data: ", error);
    }
}

async function editData(dataId) {
    const newName = prompt("Enter New Name: ");
    const newEmail = prompt("Enter New Email: ");
    if (newName && newEmail) {
        try {
            const response = await fetch(`https://6692545a346eeafcf46c8ece.mockapi.io/01_CRUD/${dataId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: newName,
                    email: newEmail
                }),
            });
            const result = await response.json();
            console.log("Edit Results:", result);
            document.getElementById('FetchInfo').click();
        } catch (error) {
            console.log("Error Editing Data: ", error);
        }
    }
}