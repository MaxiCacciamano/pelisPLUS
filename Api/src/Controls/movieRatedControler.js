const axios  = require('axios')
const {API_KEY} = process.env
const comentario = require('../Schemas/comentraio.schema')
const movieRated = require('../Schemas/movieRated.schema')

const moviesPerPage = async()=>{
    let = videogamepage1 = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b3f06dd8e7f5951a2cb88404bd306cb4&page=1`);
    let = videogamepage2 = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b3f06dd8e7f5951a2cb88404bd306cb4&page=2`);
    let = videogamepage3 = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b3f06dd8e7f5951a2cb88404bd306cb4&page=3`);
    let = videogamepage4 = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b3f06dd8e7f5951a2cb88404bd306cb4&page=4`);
    let = videogamepage5 = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b3f06dd8e7f5951a2cb88404bd306cb4&page=5`);
    let = videogamepage6 = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b3f06dd8e7f5951a2cb88404bd306cb4&page=6`);
    // console.log(videogamepage5)
    let data = await Promise.all([
        videogamepage1, 
        videogamepage2,
        videogamepage3,
        videogamepage4,
        videogamepage5,
        videogamepage6
    ])

    videogamepage1 = data[0].data.results;
    videogamepage2 = data[1].data.results;
    videogamepage3 = data[2].data.results;
    videogamepage4 = data[3].data.results;
    videogamepage5 = data[4].data.results;
    videogamepage6 = data[5].data.results;

    const allmovies = videogamepage1
    .concat(videogamepage2)
    .concat(videogamepage3)
    .concat(videogamepage4)
    .concat(videogamepage5)
    .concat(videogamepage6)
    return allmovies
}

const  getmovieRated = async()=>{
    try{
    const datapi = await moviesPerPage()
    let infoApi = datapi.map((m)=>{
        return{
            id:m.id,
            original_title: m.original_title,
            overview: m.overview,
            img:m.poster_path,
            release_date: m.release_date
        }
    })
    // console.log(infoApi.length,"cantidad")
    return infoApi
        // for(let i = 1;i < 36472; i++){
            // const moDb = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b3f06dd8e7f5951a2cb88404bd306cb4`)
            // array.push(moDb)
            // array.length 
        // }
            // movies.push(moDb.data.results)
            // const listmo =  moDb.data.results.map(m=>{
            //     return{
            //         id:m.id,
            //         original_title: m.original_title,
            //         overview: m.overview,
            //         img:m.poster_path,
            //         release_date: m.release_date
            //     }
            // })
            // console.log(listmo,"lllllllllllllllllllllllllllllll")
            // return listmo;
    }
    catch(err){
        console.log("error en getmoviesrated", err)
    }
}

const moviesAll = async(req,res)=>{
    try{
        const {name} = req.query;
        const all = await getmovieRated();
        // console.log(all)
        if(name){
            const moviesName= all.filter(mov => mov.title.toLowerCase().includes(title.toLowerCase()))
            if(title.length)return res.status(200).send(moviesName)
            return res.status(404).send("algio salio mal al traer movies")
        }
        return res.status(200).send(all)
    }
    catch(err){
        console.log("error en el moviesall", err)
    }
}

const recomendadas = async(req,res)=>{
    try{
        const movrec = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=b3f06dd8e7f5951a2cb88404bd306cb4&language=en-US&page=1`)
        const infmov = movrec.data.results.map(r=>{
            return{
                id:r.id,
                original_language: r.original_language,
                original_title: r.original_title,
                popularity: r.popularity,
                poster_path: r.poster_path,
                release_date: r.release_date,
                vote_average: r.vote_average
            }
        })
        return res.send(infmov)
    }
    catch(err){
        console.log("error en al traer peliculas populares", err)
    }
}

const detailmrecomended = async(req,res)=>{
    try{
        const {id} = req.params
        const more = await  axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=b3f06dd8e7f5951a2cb88404bd306cb4&language=en-US&page=1`)
        // console.log(more.data.results)
        if(id){
            let recomendedid = await more.data.results.filter(i=>i.id == id)
            recomendedid.length?
            res.send(recomendedid) : res.send("error en la busqueda del id de la pelicula recomendada")

        }
    }
    catch(err){
        console.log("error en los detalles de la pélicula recomendada", err)
    }
}

const movieId = async(req,res)=>{
    try{
    const {id} = req.params;
    const allmovie = await getmovieRated()
        if(id){
            let movid = await allmovie.filter(e=>e.id ==(id))
            movid.length?
            res.status(200).send(movid):res.status(404).send("algo salio en los detalles de la pelicula")
        }
    }
    catch(err){
        console.log("error al traer movie por id", err)
    }
}
    
const comentar = async(req,res)=>{
    try{
        const {comen, nombre} = req.body;
        // const createComentario = await 
        let comentCreated = new comentario()
    }
    catch(err){
        console.log("error al subir comentario", err)
    }

    //ver tutorial como crear un post con mongodb y cargar las categorias
}

module.exports = {
    getmovieRated,
    moviesAll,
    movieId,
    recomendadas,
    detailmrecomended,
}