function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }

// let nameObject = {
//     name: 'name',
//     email: 'email'
// };

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(nameObject)
// };

// function submitData(configObj){
//     fetch("http://localhost:3000/users", configObj)
//     .then(function(response) {
//         return response.json;
//     })
//     .then(function(object){
//         return console.log(object);
//     })
//     .catch(function(error){
//         alert("Whoops")
//         console.log(error.message)
//     });
// };