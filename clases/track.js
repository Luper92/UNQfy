var artist = require('./artist.js');
var album = require('./album.js');


    let a = new Object();
    a.id = 0;
    a.name = '';
    a.genres = [];
    a.artist = null;
    a.album = null
    a.duration = 0;
    return a;


module.exports = {        
track: function Track(id, name, genres, artist, album, duration){
    let a = new Object();
    a.id = id;
    a.name = name;
    a.genres = genres;
    a.artist = artist;
    a.album = album
    a.duration = duration;
    return a;
    }
}
