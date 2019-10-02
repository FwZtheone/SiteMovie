import React,{Component} from "react";
import SearchBar from '../components/search-bar'
import VideoList from './video-list';
import axios from 'axios'

//populaire
// https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=votreClé

    // Recommendation de films pour un id de film particulier en français

// https://api.themoviedb.org/3/movie/idDeFilm/recommendations?api_key=votreClé&language=fr&include_adult=false

    // Rechercher un film par son titre en français

// https://api.themoviedb.org/3/search/movie?api_key=votreClé&query=Un+Titre+De+film&language=fr&include_adult=false

    // Rechercher des url de video pour un id de film en particulier (en anglais)


// https://api.themoviedb.org/3/movie/[id]?api_key=votreClé&append_to_response=videos&include_adult=false

const API_END_POINT = "https://api.themoviedb.org/3/movie/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "b0bad23f00c1ee774f51028664da8c22";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {}

    }
    componentWillMount(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`);
    }
    render()

   { return <div>
                 <SearchBar />
                 <VideoList />
            </div>
}}

export default App;