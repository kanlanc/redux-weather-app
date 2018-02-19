
import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={
            term:""
        };
        this.inputChange=this.inputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }
    inputChange(e){
        this.setState({term:e.target.value});
    }
    onFormSubmit(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
    render(){
        return(
            <div>
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <input 
                    placeholder="Enter the place needed to be seached"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.inputChange}
                    />
                    <span className="input-group-btn"><button className="btn btn-primary">Submit </button></span>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);