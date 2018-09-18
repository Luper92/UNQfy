const readline = require('readline');

function person(_id, _nombre){
    let album = new Object()
    album.id = _id;
    album.nombre = _nombre
    console.log(album.nombre);
    
}
