import React,{Component} from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {searchText : ' ',placeHolder : "Tapez votre film"}
    }
     handleChange = (event) => this.setState({searchText: event.target.value});
    render()
    {
        return <div className="row">
            <div className="col-lg-8 input-group">
            <input type="text" className="form-control input-lg" onChange={this.handleChange} placeholder={this.state.placeHolder}/>
            <span className="input-group-btn">
                    <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>
                        Go
                    </button>
            </span>
            </div>
        
        </div>


    }

handleOnClick = (event) => {
       this.props.callBack(this.state.searchText);
}


}
export default SearchBar;