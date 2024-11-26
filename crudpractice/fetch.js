// const { json } = require("stream/consumers");

// //Get 
// const url = 'https://66912cf126c2a69f6e8ec3eb.mockapi.io/one';
// Getapi = fetch(url)
// Getapi.then(response => response.json())
// .then(data => {console.log(data);})
// .catch(err => console.log(err))


//post
// const posturl= 'https://66912cf126c2a69f6e8ec3eb.mockapi.io/one';
// const postdata = {name: 'sai', age: 23};
// postapi = fetch(posturl,{
//     method: 'POST',
//     headers: {"Content-Type":"application/json"},
//     body: JSON.stringify(postdata)
// })
// postapi.then(response => response.json())
// .then(data => {console.log(data);})
// .catch(err => console.log(err))

//put
// const puturl= 'https://66912cf126c2a69f6e8ec3eb.mockapi.io/one';
// const putdata = {name: 'saisudharashan', age:12};
// putapi = fetch(puturl,{
//     method: 'PUT',
//     headers: {"Content-Type":"application/json"},
//     body: JSON.stringify(putdata)
// })
// putapi.then(response => response.json())
// .then(data => {console.log(data);})
// .catch(err => console.log(err))

//delete
const deleturl= 'https://66912cf126c2a69f6e8ec3eb.mockapi.io/one';

deletapi = fetch(deleturl,{
    method: 'DELETE',
    
})
deletapi.then(response => {
    if (response.ok) {
        console.log('record is deleted');
    }else{
        console.log('record is not deleted');
    }
})
.catch(err => console.log(err))
