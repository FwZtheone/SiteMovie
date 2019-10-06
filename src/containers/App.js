import React,{Component} from "react";
import SearchBar from '../components/search-bar'
import VideoList from './video-list';
import axios from 'axios'
import VideoDetails from '../components/video-detail'

import Video from '../components/video';

//populaire
// https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=votreClé

    // Recommendation de films pour un id de film particulier en français

// https://api.themoviedb.org/3/movie/idDeFilm/recommendations?api_key=votreClé&language=fr&include_adult=false

    // Rechercher un film par son titre en français

// https://api.themoviedb.org/3/search/movie?api_key=votreClé&query=Un+Titre+De+film&language=fr&include_adult=false

    // Rechercher des url de video pour un id de film en particulier (en anglais)


// https://api.themoviedb.org/3/movie/[id]?api_key=votreClé&append_to_response=videos&include_adult=false

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=b0bad23f00c1ee774f51028664da8c22";
const SEARCH_URL ="search/movie?langues=fr&include_adult=false";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {movieList : {}, currentMovies : {}}

    }



    //requête AJAX
    initMovies(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(reponse){

            //ICI JE RECUP LES DONNES DU MEILLEUR FILM + LISTE DES 5 FILMS
            this.setState({movieList:reponse.data.results.slice(1,6),
                currentMovies:reponse.data.results[0]}, function () {
                this.applyVideoToCurrentMovie();
            });

        }.bind(this));
        //JE N OUBLIE PAS LE BIND POUR ACCEDER AUX THIS SUPP CAR ATTENTION THIS FONCTIONNE PAS
        //DANS UNE FONCTION

    }
    applyVideoToCurrentMovie(){

        axios.get(` ${API_END_POINT}movie/${this.state.currentMovies.id}?${API_KEY}&append_to_response=videos&includes_adult=false`).then(function(reponse){

            const youtubeKey = reponse.data.videos.results[0].key;
            let newCurrentMoviesState  = this.state.currentMovies;
            newCurrentMoviesState.videoId= youtubeKey;
            this.setState({currentMovie : newCurrentMoviesState });

        }.bind(this))

    }
    onClickListItem(movie){
        this.setState({currentMovies:movie},function(){
            this.applyVideoToCurrentMovie();
        });
    }

    //méthode qui permet de faire une requête ajax
    onclickSearch = searchText => {
        axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function(reponse){
            if(reponse.data && reponse.data.results[0]){
                if(reponse.data.results[0].id != this.state.currentMovies.id){
                    this.setState({currentMovies : reponse.data.results[0]}, () => {
                        this.applyVideoToCurrentMovie();
                    })

                }
            }

            }.bind(this))
        }


    componentWillMount(){
        this.initMovies();

    }
    render(){
        const renderVideoList = () => {
            if(this.state.movieList.length>= 5)
            {
                return ( <VideoList movieList={this.state.movieList} callBack={this.onClickListItem.bind(this)}/>)

            }
        };

        return <div>
            <div className="search_bar">
                 <SearchBar callBack={this.onclickSearch} />
            </div>
                 <div className="row">
                     <div className="col-md-8">
                     <Video videoId={this.state.currentMovies.videoId}/>
                         <VideoDetails title={this.state.currentMovies.title} description={this.state.currentMovies.overview}/>

                     </div>
                     <div className="col-md-4">
                     {renderVideoList()}

                     </div>
                 </div>
            </div>}

}

export default App;