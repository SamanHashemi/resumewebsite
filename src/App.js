import React, { Component} from "react";
// import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';



import "./App.css";
import 'semantic-ui-css/semantic.min.css'

import MyNavbar from './components/Navbar/MyNavbar'
import Resume from './components/Resume/Resume'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Music from './components/Music/Music'
import Contact from './components/Contact/Contact'
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  constructor() {
    super();
    this.state = { 
      width: window.innerWidth, 
      height: window.innerHeight,

      navbarMobile: false,
      isTabletMobile: false,

      scrollHeight: 0,

      aboutHeight: 1,
      aboutSize: 1,
      aboutOffset: 1,
      

      projectHeight: 1,
      projectSize: 1,
      projectOffset: 2,
      projectStack: false,

      skillHeight: 1,
      skillsSize: 1,
      skillsOffset: 3,
      skillsDouble: false,
      skillsStack: false,

      musicHight: 1,
      musicSize: 1,
      musicOffset: 4,
      musicDouble: false,
      musicStack: false,
      musicMineStack: false,

      contactHeight: 1,
      contactSize: 1,
      contactOffset: 5,
      contactStack: false,

      pageNumbers: 6,

      data: null 
      };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.elementsHaveLoaded = this.elementsHaveLoaded.bind(this);
    this.scrollHeight = this.scrollHeight.bind(this);
    this.connecToServer = this.connecToServer.bind(this);
    // this.interval = setInterval(() => {this.updateWindowDimensions()}, 100);
  }

  connecToServer() {    fetch('/');  }

  componentDidMount() {
    this.connecToServer();
    window.addEventListener('resize', this.updateWindowDimensions);
    setTimeout(() => {if(this.elementsHaveLoaded()){this.updateWindowDimensions()}}, 500);
    window.addEventListener('scroll', 
        () => {this.scrollHeight(document.getElementById("home-overlay").getBoundingClientRect().y)}, true);
    // this.firstResize();
  }

  elementsHaveLoaded(){
    var children = document.querySelectorAll("all_children")
    for(var i = 0; i < children; i++){
      if(children[i] === null){
        return false;
      }
    }
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    clearInterval(this.interval);
  }


  updateHeight(page){
    var contactPage = false
    if(page === 'contact'){
      contactPage = true
    }
    const searchtxt = '#'+page+"_page div"
    var divs = document.querySelectorAll(searchtxt)
    
    const pageName = page+"_page"
    const pageTop = document.getElementById(pageName).getBoundingClientRect().y;
    const pageBottom = pageTop + window.innerHeight
    
    var el_ypos = 0;
    var el_height = 0;
    var el_bottom = 0;
    var max_elbtm = pageBottom;
    var element_pertrudes = false;
    
    for(var i = 0; i < divs.length; i++){
      // Bottom of each element
      el_ypos = divs[i].getBoundingClientRect().y 
      el_height = divs[i].getBoundingClientRect().height
      el_bottom = el_ypos + el_height
      
      

      if(el_bottom > max_elbtm && el_bottom !== 0){
          max_elbtm = el_bottom
          element_pertrudes = true
          if(contactPage) {
            console.log("Element " + divs[i].id + " lowest: " + el_bottom)
          }
      }
    }
    
    var height = window.innerHeight
    if(pageBottom < max_elbtm){
      height = max_elbtm-pageTop
    }

    if(contactPage){
      console.log("Contact Page: " + height)
    }

    switch(page){
      case 'about':
        if(element_pertrudes){height*=1.05}
        this.setState({aboutHeight: height});
        return 0;
      case 'project':
        if(element_pertrudes){height*=1.1;}
        this.setState({projectHeight: height});
        return 0; 
      case 'skills':
        if(element_pertrudes){height*=1.08}
        this.setState({skillHeight: height});
        return 0;
      case 'music':
        if(element_pertrudes){height*=1.08; }
        this.setState({musicHeight: height});
        return 0;
      case 'contact':
        if(element_pertrudes){height*=1.05; }
        this.setState({contactHeight: height});
        return 0;
      default:
        return 0;
    }
  }
  

  //TODO: Change to only change bools (make all size adjustments dynamically)
  updateWindowDimensions() {
    
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    
    if(this.state.width > 1400){
      this.setState({
        navbarMobile: false,
        projectStack: false,
        skillsDouble: false,
        skillsStack: false,
        musicMineStack: false,
        musicDouble: false,
        musicStack: false,
        contactStack: false
      })
    }
    else if(this.state.width <= 1400 && this.state.width > 1220){
      this.setState({
        navbarMobile: false,
        projectStack: false,
        skillsDouble: true,
        skillsStack: false,
        musicMineStack: false,
        musicDouble: false,
        musicStack: false,
        contactStack: false
      })
    }
    else if(this.state.width <= 1220 && this.state.width > 850){
      this.setState({
        navbarMobile: false,
        projectStack: true,
        skillsDouble: true,
        skillsStack: false,
        musicMineStack: true,
        musicDouble: false,
        musicStack: false,
        contactStack: false
      })
    }
    else if(this.state.width <= 850 && this.state.width > 600){
      this.setState({
        navbarMobile: true,
        projectStack: true,
        skillsDouble: true,
        skillsStack: false,
        musicMineStack: false,
        musicDouble: true,
        musicStack: false,
        contactStack: true
      })
    }
    else if(this.state.width > 0){
      this.setState({
        navbarMobile: true,
        projectStack: true,
        skillsDouble: false,
        skillsStack: true,
        musicMineStack: false,
        musicDouble: false,
        musicStack: true,
        contactStack: true
      })
    }

    //Set about page height
    this.updateHeight('about');
    const dynamicAboutSize = (this.state.aboutHeight/this.state.height);
    const dynamicAboutOffset = 1;
    this.setState({aboutSize: dynamicAboutSize, aboutOffset: dynamicAboutOffset});

    //Set project page height
    this.updateHeight('project')
    const dynamicProjectSize = (this.state.projectHeight/this.state.height);
    const dynamicProjectOffset = dynamicAboutSize+dynamicAboutOffset;
    this.setState({projectSize: dynamicProjectSize, projectOffset: dynamicProjectOffset});

    //Set skills page height
    this.updateHeight('skills')
    const dynamicSkillSize = (this.state.skillHeight/this.state.height);
    const dynamicSkillOffset = dynamicProjectSize+dynamicProjectOffset;
    this.setState({skillsSize: dynamicSkillSize, skillsOffset: dynamicSkillOffset});

    // Set music and art page height
    this.updateHeight('music')
    const dynamicMusicSize = (this.state.musicHeight/this.state.height);
    const dynamicMusicOffset = dynamicSkillSize+dynamicSkillOffset;
    this.setState({musicSize: dynamicMusicSize, musicOffset: dynamicMusicOffset});

    // Set contact page height
    this.updateHeight('contact')
    const dynamicContactSize = (this.state.contactHeight/this.state.height);
    const dynamicContactOffset = dynamicMusicSize+dynamicMusicOffset;
    this.setState({contactSize: dynamicContactSize, contactOffset: dynamicContactOffset});
    console.log(this.state.contactSize)

    // Set number of pages
    const pageNumbers = this.state.contactOffset+this.state.contactSize
    this.setState({pageNumbers: pageNumbers})
  }

  scrollHeight(y){
    this.setState({scrollHeight: y})
  }

  render() {
    return (
      <div className="App" id="all_children">
        <MyNavbar
          parallax={this.parallax}
          navbarMobile={this.state.navbarMobile}
          aboutOffset={this.state.aboutOffset}
          projectOffset={this.state.projectOffset}
          skillsOffset={this.state.skillsOffset}
          musicOffset={this.state.musicOffset}
          contactOffset={this.state.contactOffset}
        />
        <div className="scroll-hide">
        <Parallax pages={this.state.pageNumbers} scrolling={true} 
                  ref={ref => (this.parallax = ref)} id="home-background">
        
          <ParallaxLayer offset={0} speed={0} className="home-overlay" id="home-overlay" />

          <Home/>

          <Resume
            isMobile = {this.state.isTabletMobile}
            scrollHeight = {this.state.scrollHeight}
            aboutSize = {this.state.aboutSize}
            projectSize = {this.state.projectSize} 
            skillsSize = {this.state.skillsSize}
          /> 

          <About
            aboutOffset = {this.state.aboutOffset}
            aboutSize = {this.state.aboutSize}
            
          />
          
          <Projects 
            projectOffset = {this.state.projectOffset} 
            projectSize = {this.state.projectSize} 
            projectStack = {this.state.projectStack}
          />

          <Skills
            skillsOffset = {this.state.skillsOffset}
            skillsSize = {this.state.skillsSize}
            skillsStack = {this.state.skillsStack}
            skillsDouble = {this.state.skillsDouble}
          />

          <Music
            musicOffset = {this.state.musicOffset}
            musicSize = {this.state.musicSize}
            musicMineStack = {this.state.musicMineStack}
            musicDouble = {this.state.musicDouble}
            musicStack = {this.state.musicStack}
          />

          <Contact
            contactOffset={this.state.contactOffset}
            contactSize = {this.state.contactSize}
            contactStack = {this.state.contactStack}
          />

        </Parallax>
        </div>
      </div>
    );
  }
}

export default App;