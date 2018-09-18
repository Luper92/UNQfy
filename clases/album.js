var artist = require('./artist.js');

function Album(id, name, year, artista, tracks){
    let album = new Object()
    album.id = id;
    album.artista = artista;
    album.tracks = tracks;
    album.year = year;
    album.name = name;
    //return album;
    return album;
    
}

module.exports= {
    print: function (nombre){
    console.log(nombre);
},
    addTrack: function (track){
    track.artista = this.artista;
        this.tracks.push(track);
    }
};

//let album = Album(1, artist(1, "alguien inventado"), []);
let art = new artist(1,"Hola")
console.log(art.name)

