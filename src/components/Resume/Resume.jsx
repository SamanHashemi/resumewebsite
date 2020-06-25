import { Component } from "react";
import React from 'react'
import {Icon} from "semantic-ui-react"
import {isBrowser} from "react-device-detect"
import "./Resume.css";
import resume from "../../miscFiles/SamanResume.pdf"



class Resume extends Component{
    constructor (props) {
        super(props);
        this.state = {
            top: this.props.aboutSize*window.innerHeight + window.innerHeight-120
        };
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll(){
        var scrollTop = this.props.scrollHeight
        var winHeight = window.innerHeight
        var floaterHeight = document.getElementById("resume").offsetHeight
        var fromBottom = 45;
        var top = winHeight - floaterHeight - fromBottom - scrollTop
        const aboutHeight = this.props.aboutSize*winHeight
        const skillsHeight = this.props.skillsSize*winHeight
        const projectHeight = this.props.projectSize*winHeight
        const aboutRest = winHeight - floaterHeight - fromBottom + aboutHeight;
        const skillRest = winHeight - floaterHeight - fromBottom + aboutHeight + skillsHeight + projectHeight;

        if((-scrollTop+10) > aboutHeight && 
            (-scrollTop) < (aboutHeight+skillsHeight+projectHeight)){
            this.setState({top: top});
        }
        else if((-scrollTop+10) <= aboutHeight){
            this.setState({top: aboutRest});
        }
        else if((-scrollTop) >= (aboutHeight+skillsHeight+projectHeight)){
            this.setState({top: skillRest});
        }
    }

    render(){
        if(isBrowser){
        return(
            <>     
            <a href={resume} download>
                    <div id="resume" class="resume" style={{top: this.state.top+"px"}}>
                        <span class="resume-download-text">Download my Resume</span>
                        <a href={resume} download>
                            <Icon className="resume-icon" name='wordpress forms' size="big"/>
                        </a>
                    </div>
                </a>
            </>   
        )
        }
        return(<div id="resume" />)
    }
}

export default Resume