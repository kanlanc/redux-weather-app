import React, { Component } from "react";
const google = window.google;

class Googlemap extends Component
{
    componentDidMount(){
        new google.maps.Map(this.refs.map,{
            zoom:12,
            center:{
                lat:this.props.lat,
                lng:this.props.lon
            }
        });
    }
    render(){
        return(
            <div ref="map">
            </div>
        );
    }
}
export default Googlemap;