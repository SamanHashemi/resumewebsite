import { Component } from "react";
import React from 'react';
import {ParallaxLayer} from 'react-spring/renderprops-addons';
import "./About.css";
import beentxt from "./been-text.jsx";
import amtxt from "./am-text.jsx";
import goingtxt from "./going-text.jsx";


class About extends Component{
    constructor (props) {
        super(props);
        this.state = {};
      }
    
    render(){
        return(
        <ParallaxLayer id="about_page" offset={this.props.aboutOffset} speed={0} factor={this.props.aboutSize} className="about-background" >
        <section className="box"> <section className="box-inner">
                    
            <div class="ui stackable center aligned grid">
            
            {/* Going Formatting*/}
            <div id="computer_about_title" class="computer only row"> 
                <div class="center aligned column"> 
                    <div id="computer-about-title" class="ui basic center aligned segment"> 
                        A Little Bit About Me 
                    </div>
                </div>
            </div>


            <div id="computer_about_text" class="sixteen column computer only row">

                <div class="column"></div>

                <div class="four wide computer column">

                    <div id="been-text">
                    <div id="been-title" class="ui basic left aligned segment"> 
                        Where I've Been
                    </div>
                        {beentxt}
                    </div>
                </div>

                <div class="column"></div>

                <div class="four wide computer column">

                    <div id="am-text">
                        <div id="am-title" class="ui basic centered aligned segment"> 
                            Where I Am
                        </div>
                        {amtxt}
                    </div>
                </div>

                <div class="column"></div>

                <div class="four wide computer column">

                    <div id="going-text">

                        <div id="going-title" class="ui basic right aligned segment"> 
                            Where I'm Going
                        </div>
                        {goingtxt}
                    </div>
                </div>

                <div class="column"></div>
            </div>

            {/* Tablet Formatting*/}
            <div class="tablet only row">
                <div class="tablet center aligned column">
                <div id="tablet-about-title" class="ui basic center aligned segment"> 
                    A Little Bit About Me 
                </div>
                </div>
            </div>

            <div class="tablet only row">
                <div class="twelve wide tablet column">

                <div id="tablet-been-text">
                <div id="tablet-been-title" class="ui basic left aligned segment"> 
                    Where I've Been
                </div>
                    {beentxt}
                    </div>
                </div>
            </div>

            <div class="tablet only row">
                <div class="twelve wide tablet column">

                <div id="tablet-am-text">
                <div id="tablet-am-title" class="ui basic left aligned segment"> 
                    Where I Am
                </div>
                    {amtxt}
                    </div>
                </div>
            </div>

            <div class="tablet only row">
                <div class="twelve wide tablet column">

                <div id="tablet-going-text">
                <div id="tablet-going-title" class="ui basic right aligned segment"> 
                    Where I'm Going
                </div>
                    {goingtxt}
                    </div>
                </div>
            </div>

            {/* Mobile Formatting*/}
            <div class="mobile only row">
                <div class="mobile center aligned column">
                <div id="mobile-about-title" class="ui basic center aligned segment"> 
                    A Little Bit About Me 
                </div>
                </div>
            </div>

            <div class="mobile only row">
                <div class="twelve wide mobile column">

                <div id="mobile-been-text">
                <div id="mobile-been-title" class="ui basic left aligned segment"> 
                    Where I've Been
                </div>
                    {beentxt}
                    </div>
                </div>
            </div>

            
            <div class="mobile only row">
                <div class="twelve wide mobile column">

                <div id="mobile-am-text">
                <div id="mobile-am-title" class="ui basic left aligned segment"> 
                    Where I Am
                </div>
                    {amtxt}
                    </div>
                </div>
            </div>

            <div class="mobile only row">
                <div class="twelve wide mobile column">

                <div id="mobile-going-text">
                    <div id="mobile-going-title" class="ui basic right aligned segment"> 
                        Where I'm Going
                    </div>
                    {goingtxt}
                    </div>
                </div>
            </div>

            </div>
            </section></section>
            </ParallaxLayer>
        )
    }
}

export default About