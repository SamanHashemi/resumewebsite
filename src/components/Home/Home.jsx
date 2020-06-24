import { Component } from "react";
import React from 'react'
import {ParallaxLayer} from 'react-spring/renderprops-addons';
import "./Home.css";

class Home extends Component{
    constructor (props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){

    }

    render(){
        return(
            <ParallaxLayer offset={0} speed={0.5} id="home-text" 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                <div id="home"> 
                    <div id="home">Saman Hashemipour</div> 
                </div>

            </ParallaxLayer>
        )
    }
}

export default Home