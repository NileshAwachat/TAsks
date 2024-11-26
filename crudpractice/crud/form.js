 document.getElementById("dataForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        const data = {name, email};
        console.log("data:",data);

        try{
            const response = await fetch("https://66912cf126c2a69f6e8ec3eb.mockapi.io/one",
                 {

                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),


        }
    );

    const result = await response.json();
    console.log("Result:",result);

    document.getElementById("response").innerHTML = `
    <p>Data submitted successfully!<p>`;

    }
    
    catch(error){
    document.getElementById("response").innerHTML = `
        <p>There was an error submitting your data. <p>`;
}
    });


        // let dataf = document.getElementById("fdata");
        // document.getElementById("fetchDataButton").addEventListener("click", async() =>{
        // // console.log('im fetch')
        // let url = "https://66912cf126c2a69f6e8ec3eb.mockapi.io/one";
        // let link = await fetch(url);
        // console.log(link);
        // let  convertData = await link.json();
        // console.log("convertData" , convertData[0].email);

     
        // convertData.forEach(element => {
        //     let div = document.createElement('div');
                 
        //     div.innerHTML = `${element.id}<br> <button class="delete">delete</button> ${element.name} <br>  ${element.email} <br> `;
        //     dataf.appendChild(div); 

            // let del = div.querySelector(".delete");
            //      del.addEventListener("click",function(){
            //          this.parentElement.remove();
            //      });
    //     });

        
    // });
 
    function getData() {
        fetch("https://66912cf126c2a69f6e8ec3eb.mockapi.io/one")
        .then((res) => res.json())
        .then((Data) =>{
          console.log("data fetched:",Data);
          displayData(Data);
        })
          .catch ((err) =>{
          console.log("error fetching data",err);
        });
      }
      let maindiv = document.getElementById("fdata");
      
      function displayData(Data) {
        
        console.log("Actual data:",Data);

          maindiv.innerHTML="";

        Data.forEach((element) => {
          console.log("element:",element);
          
          let div = document.createElement("div");
          console.log("div created",div);
        //   div.innerHTML = `Name: ${element.name} <br> Email: ${element.email} <br> <button class="delete">delete</button> <br> <button class="delete">Edit</button>`;
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");

        p1.innerText= `ID: ${element.id}`
        p2.innerText= `Name: ${element.name}`
        p3.innerText= `Email: ${element.email}`

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        maindiv.appendChild(div);
        });

        //  let del = div.querySelector(".delete");
        //          del.addEventListener("click",function(){
        //              this.parentElement.remove();
        //          });
        let delbutton = document.createElement('button');
        delbutton.innerText = "delete"
        delbutton.classname = "delete"
        delbutton.addEventListener("click",async function (){
            try{
                const response = await fetch("https://66912cf126c2a69f6e8ec3eb.mockapi.io/one",
                     {
    
                    method: "DELETE",    
    
            }
        );
    
        const result = await response.json();
        console.log("Result:",result);
    
        document.getElementById("response").innerHTML = `
        <p>Data submitted successfully!<p>`;
    
        }
        
        catch(error){
        document.getElementById("response").innerHTML = `
            <p>There was an error submitting your data. <p>`;
    }
        });

        
      }
