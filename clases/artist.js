
module.exports =  {

artist:  function artist(id, name,country){
    let artist = new Object();
    artist.id = id;
    artist.name = name;
    artist.country = country
    artist.albums = new List([]);
    return artist; 
}
};
//module.exports = function (msg) { 
  //  console.log(msg);
//};



//module.exports = artist;
//module.exports.artist = artist;