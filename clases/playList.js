module.exports = {
    playList: function PlayList(id, name, genres){
    let playList = new Object();
    playList.id = id;
    playList.name = name;
    playList.genres = new List([]);
    playList.tracks = new List([]);
    return playList;
    },
    addtrack: function addTrack(track){
        if(genres.some((elem) => elem == track.genre))
            {
            tracks.push(track);
            }
            else{
                genres.push(track.genre);
                tracks.push(track);
            }
    },
    addGenre: function addGenre(genre){
        if(genres.some((elem) => elem == genre )){
            //tirar una exception
        }
        else{
            genres.push(genre);
        }
    },

    removeGenre: function removeGenre(genre){
        if(genres.some((elem) => elem == genre )){
            let index = genres.indexOf(genre)
            genres.splice(index, 1)
        }
        else{
            //Throw an xception
            
        }
    },
    searchTracks: function searchTracks(){
        //Este es el metodo mas largo. Es una busqueda automatica de temas dependiendo el genero.
    }
}
