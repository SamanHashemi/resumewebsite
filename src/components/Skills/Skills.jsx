import { Component } from "react";
import React from 'react';
import { Rating} from 'semantic-ui-react';
import {ParallaxLayer} from 'react-spring/renderprops-addons';
import "./Skills.css"

class Skills extends Component{
    constructor (props) {
      super(props);
      this.state = {};
      
    }

    render(){
        const personalInterests = (
          <div class="ui teal center aligned segment">
            <div class="ui two column grid">
            
            <div class="sixteen wide centered column">
                <div class="ui basic center aligned segment">
                  <p className="skill-titles">Personal Interests</p>
                </div>
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Robotics</p>
                  <Rating icon="heart" defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>UI/UX Design</p>
                  <Rating icon="heart" defaultRating={3} maxRating={5} disabled className="rating-score"/> 
                </div>
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Machine Learning</p>
                  <Rating icon="heart" defaultRating={5} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>AI</p>
                  <Rating icon="heart" defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Southern Rap Scene</p>
                  <Rating icon="heart" defaultRating={5} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Start-Up Culture</p>
                  <Rating icon="heart" defaultRating={3} maxRating={5} disabled className="rating-score"/> 
                </div>
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Behaviorial Psycology</p>
                  <Rating icon="heart" defaultRating={5} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>City Planning/UD</p>
                  <Rating icon="heart" defaultRating={3} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>
            </div>
          </div>
        );

        const hobbies = (
          <div class="ui teal center aligned segment">
            <div class="ui two column grid">
            
            <div class="sixteen wide centered column">
                <div class="ui basic center aligned segment">
                  <p className="skill-titles">Hobbies</p>
                </div>
              </div>
              
              <div class="column">
                <div className="rating-text">
                  <p>Freestyle Rapping</p>
                  <Rating icon="heart" defaultRating={5} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Piano</p>
                  <Rating icon="heart" defaultRating={5} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Bass Guitar</p>
                  <Rating icon="heart" defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>


              <div class="column">
                <div className="rating-text">
                  <p>Music Production</p>
                  <Rating icon="heart" defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Dungeons & Dragons</p>
                  <Rating icon="heart" defaultRating={5} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Running</p>
                  <Rating icon="heart" defaultRating={3} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Rock Climbing</p>
                  <Rating icon="heart" defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div>
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Number Memorization</p>
                  <Rating icon="heart" defaultRating={3} maxRating={5} disabled className="rating-score"/> 
                </div>
              </div>
            </div>
          </div>
        );

        const libsIDEs = (
          <div class="ui teal center aligned segment">
            <div class="ui two column grid">

              <div class="sixteen wide centered column">
                <div class="ui basic center aligned segment">
                  <p className="skill-titles">Libraries & IDEs</p>
                </div>
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>TensorFlow</p>
                  <Rating defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Qt</p>
                  <Rating defaultRating={3} maxRating={5} disabled className="rating-score"/> 
                </div>
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>OpenCV</p>
                  <Rating defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>MatplotLib</p>
                  <Rating defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Pycharm</p>
                  <Rating defaultRating={5} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Eclipse/Pydev</p>
                  <Rating defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Xcode 11</p>
                  <Rating defaultRating={3} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Visual Studio</p>
                  <Rating defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>
            </div>
          </div>
        );

        const languages = (
          <div class="ui teal center aligned segment">
            <div class="ui two column grid">

              <div class="sixteen wide centered column">
                <div class="ui basic center aligned segment">
                  <p className="skill-titles">Programming Languges</p>
                </div>
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Python</p>
                  <Rating defaultRating={5} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>React</p>
                  <Rating defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Javascript</p>
                  <Rating defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Java</p>
                  <Rating defaultRating={3} maxRating={5} disabled className="rating-score"/> 
                </div>
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>C++</p>
                  <Rating defaultRating={4} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>Swift</p>
                  <Rating defaultRating={2} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>C</p>
                  <Rating defaultRating={2} maxRating={5} disabled className="rating-score"/> 
                </div> 
              </div>

              <div class="column">
                <div className="rating-text">
                  <p>C#</p>
                  <Rating defaultRating={2} maxRating={5} disabled className="rating-score"/> 
                </div>
              </div>

            </div>
          </div>
        );

        if(!this.props.skillsStack && !this.props.skillsDouble){
          return(
            <ParallaxLayer id="skills_page" offset={this.props.skillsOffset} speed={0} factor={this.props.skillsSize} className="skills-background" >
              <section class="box"> <section class="box-inner">
                <div class="ui stackable center aligned grid">
                  
                <div class="row">
                  <div class="center aligned column">
                    <div id="skills-title" class="ui basic center aligned segment"> 
                        Skills & Interests
                    </div>
                  </div>
                </div>
    
                <div className="skill-container">
                  <div class="ui five column centered grid">
    
                  <div class="column">
                    {languages}
                  </div>
    
                  <div class="column">
                    {libsIDEs}
                  </div>
      
                  <div class="column">
                    {hobbies}
                  </div>
      
                  <div class="column">
                    {personalInterests}
                  </div>
    
              </div>
              </div>
              </div>
              </section></section>
            </ParallaxLayer>
    
          )
        }
        else if(this.props.skillsDouble && !this.props.skillsStack){
          return(
            <ParallaxLayer id="skills_page" offset={this.props.skillsOffset} speed={0} factor={this.props.skillsSize} className="skills-background" >
              <section class="box"> <section class="box-inner">
              <div class="ui center aligned grid">
    
                <div class="row">
                  <div class="center aligned column">
                    <div id="skills-title-mobile" class="ui basic center aligned segment"> 
                        Skills & Interests
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="seven wide column">
                    {languages}
                  </div>
    
                  <div class="seven wide column">
                    {libsIDEs}
                  </div>
                </div>
    
                <div class="row">
                  <div class="seven wide column">
                    {hobbies}
                  </div>
    
                  <div class="seven wide column">
                    {personalInterests}
                  </div>
                </div>
              </div>
              </section></section>
            </ParallaxLayer>
    
          )
        }
        else if(this.props.skillsStack){
          return(
            <ParallaxLayer id="skills_page" offset={this.props.skillsOffset} speed={0} factor={this.props.skillsSize} className="skills-background" >
              <section class="box"> <section class="box-inner">
              <div class="ui  center aligned grid">
    
                <div class="row">
                  <div class="center aligned column">
                    <div id="skills-title-mobile" class="ui basic center aligned segment"> 
                        Skills & Interests
                    </div>
                  </div>
                </div>
    
                <div class="row">
                  <div class="column">
                    {languages}
                  </div>
                </div>
    
                <div class="row">
                  <div class="column">
                    {libsIDEs}
                  </div>
                </div>
    
                <div class="row">
                  <div class="column">
                    {hobbies}
                  </div>
                </div>
    
                <div class="row">
                  <div class="column">
                    {personalInterests}
                  </div>
                </div>
    
              </div>
              </section></section>
            </ParallaxLayer>
          )
        }
      }
}

export default Skills