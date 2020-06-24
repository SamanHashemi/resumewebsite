import { Component } from "react"
import React from 'react';
import {ParallaxLayer} from 'react-spring/renderprops-addons';
import lucyimg from "../../img/lucy.jpg";
import crawlyimg from "../../img/crawly.png"
import roomiesimg from "../../img/roomies.png"
import "./Projects.css"

class Projects extends Component{
      constructor (props) {
        super(props);
        this.state = {};

      }


    render(){
      const title = (
        <div class="row">
          <div class="center aligned column">
            <div id="projects-title" class="ui basic center aligned segment"> 
                A Few Projects
            </div>
          </div>
        </div>
      )

      const crawly = (
        <div id="card" class="ui card">
          <div class="image">
            <img id="crawly-img" src={crawlyimg}/>
          </div>
          <div class="content">
            <a class="header">Crawly the Crocodile</a>
            <div class="meta">
              <span class="date">Started May of 2018</span>
            </div>
            <div class="description">
            Crawly the Crocodile is a simple iOS game designed to challenge the users reaction speed in an intense
            pencil dodging classroom adventure. Developed using Swift 2.0. All music, graphics, and animations were all designed by me.
            </div>
          </div>
        </div>
        );

        const roomies = (
          <div class="ui card">
            <div class="image">
              <img id="roomies-img" src={roomiesimg}/>
            </div>
            <div class="content">
              <a class="header">Roomies</a>
              <div class="meta">
                <span class="date">Started May of 2018</span>
              </div>
              <div class="description">
              Roomies is an all in one roommate management web aplication designed to help keep common areas
              clean and your roommates happy. Roomies was written using a MERN stack with a team of UCLA computer
              science students.
              </div>
            </div>
          </div>
        );

        const lucy = (
          <div class="ui card">
            <div class="image">
              <img id="lucy-img" src={lucyimg}/>
            </div>
            <div class="content">
              <a class="header">Lucy</a>
              <div class="meta">
                <span class="date">Started May of 2018</span>
              </div>
              <div class="description">
                Lucy is a one of a kind stay at home robot designed to clean your messes and organize your
                life. Lucy was developed in Python 3.0 using a series of unique computer vision libraries along
                with Google's STT and TTS APIs.
              </div>
            </div>
          </div>
        );

        if(!this.props.projectStack){
          return(
            <ParallaxLayer id="project_page" offset={this.props.projectOffset} speed={0} factor={this.props.projectSize} className="projects-background">
              <section className="box"> <section className="box-inner">
              <div class="ui stackable center aligned grid">
                
                {title}
                
                <div class="row">
                  <div class="ui fifteen column grid">
    
                    <div class="column" />
                    
                    <div class="three wide column">
                      {lucy}
                    </div>
    
                    <div class="column" />
    
                    <div class="three wide column">
                      {roomies}
                    </div>
    
                    <div class="column" />
    
                    <div class="three wide column">
                      {crawly}
                    </div>
    
                    <div class="column" />
    
                  </div>
                </div>
    
              </div>
              </section></section>
            </ParallaxLayer>
    
    
          )
        }
        else{
          return(
            <ParallaxLayer id="project_page" offset={this.props.projectOffset} speed={0} factor={this.props.projectSize} className="projects-background">
              <section class="box"> <section class="box-inner">
              <div class="ui center aligned grid">
    
                {title}
    
                <div class="row">
                  {lucy}
                </div>
    
                <div class="row" />
    
                <div class="row">
                  {roomies}
                </div>
    
                <div class="row" />
    
                <div class="row">
                  {crawly}
                </div>
    
              </div>
              </section></section>
            </ParallaxLayer>
    
    
          )
        }
      }
}

export default Projects;