import React,{Component} from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {searchText : ' ',placeHolder : "Tapez votre film"}
    }
     handleChange = () => this.setState({searchText: event.target.value});
    render()
    {
        return <input onChange={this.handleChange} placeholder={this.state.placeHolder}/>

    }



}
export default SearchBar;