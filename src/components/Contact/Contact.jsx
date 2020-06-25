import { Component } from "react";
import React from 'react';
import {ParallaxLayer} from 'react-spring/renderprops-addons';
import "./Contact.css";
import axios from 'axios';
import {Button, Modal} from "semantic-ui-react"
import {isTablet} from "react-device-detect"

class Contact extends Component{
  constructor (props) {
    super(props);
    this.state = 
    {
      name: "",
      email: "",
      message: "",
      modalTitle: "",
      modalText: "",
      open: false
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }




    // handleSubmit(e){
    //     e.preventDefault();
    //     const name = document.getElementById('name').value;
    //     const email = document.getElementById('email').value;
    //     var message = document.getElementById('message').value;
    //     if(name === "" || email === "" || message===""){
    //       alert("One or more fields were left empty"); 
    //     }
    //     else{
    //       axios({
    //           method: "POST", 
    //           url:"http://localhost:3001/send", 
    //           data: {
    //               name: name,   
    //               email: email,  
    //               message: message
    //         }
    //       })
    //       .then((response) => {
    //           // document.getElementById('contact-form').reset();
    //           this.setState({
    //             modalTitle: "Thanks for Reaching Out!",
    //             modalText: "Your message has been sent! Please exepect a reply to " + email + " within 48 hours.", 
    //             open: true, 
    //             name: "", 
    //             email: "", 
    //             message: ""})
    //       })
    //       .catch((error) =>{
    //         console.log(error)
    //         this.setState({
    //           modalTitle: "Oops something went wrong",
    //           modalText: "It looks like our servers are down. Please feel free to email saman.alex.h@gmail.com. Sorry for any inconvinence", 
    //           open: true})
    //       });
    //     }
    // }

    handleSubmit(e){
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      if(name === "" || email === "" || message===""){
        alert("One or more fields were left empty");
        return 0;
      }
      axios.post('https://saman-website.herokuapp.com/send', {
       name: name,
       email: email,
       message: message
     })
     .then((response) => {
       console.log(response)
        this.setState({
          modalTitle: "Thanks for Reaching Out!",
          modalText: "Your message has been sent! Please exepect a reply to " + email + " within 48 hours.", 
          open: true, 
          name: "", 
          email: "", 
          message: ""})
     })
     .catch((error) => {
        console.log(error)
        this.setState({
          modalTitle: "Oops something went wrong",
          modalText: "It looks like our servers are down. Please feel free to email saman.alex.h@gmail.com. Sorry for any inconvinence", 
          open: true})
      });

    };

    render(){
      const open = this.state.open

      var titleID="contact-title-computer"
      var formID="contact-form-computer"
      var mediaContainerID="media-container"
      if(this.props.contactStack){
        titleID="contact-title-mobile"
        formID="contact-form-mobile"
        mediaContainerID="media-container-mobile"
      }
      if(isTablet){
        mediaContainerID = "media-container-tablet"
      }

      const contactTitle = (
        <div class="row">
        <div id={titleID} class="ui basic center aligned segment"> 
          Contact
        </div>
      </div>
      );


      const emailForm = (
        <form class="ui form" onSubmit={this.handleSubmit.bind(this)}  method="POST" id={formID}>
          <div class="field">
            <label>Name</label>
            <input type="text" id="name" placeholder="Name" value={this.state.name} onChange={() => {this.setState({name: (document.getElementById('name').value)})}} />
          </div>
          <div class="field">
            <label>Email</label>
            <input type="text" id="email" placeholder="Email" value={this.state.email} onChange={() => {this.setState({email: (document.getElementById('email').value)})}} />
          </div>
          <div class="field">
            <div class="field">
              <label>Message</label>
              <textarea id="message" rows="7" placeholder="Message" value={this.state.message} onChange={() => {this.setState({message: (document.getElementById('message').value)})}} ></textarea>
            </div>
          </div>
          <button class="ui button" type="submit">Submit</button>
          
        </form>
      );

      const contactText = (
        `Please don't hesistate to reach out! The form on this page will send me a direct 
        message. If you have questions about my experience and work, or if you need a 
        freelancer in iOS or Web Development or just gerenal questions about my designs, 
        please contact me using the form on this page. If you would like a more personal 
        form of contact please feel free to send me a message on any of my social media 
        platforms found below. Friends, family and even complete stangers I love meeting 
        new friends and keeping in touch with old ones, so if you stumbled on this site 
        by chance or if you're here because you know me personally, feel free to
         send me a message!`
        );

        const twitterButton = (
          <a  href="https://twitter.com/SamanShemi" target="_blank" rel="noopener noreferrer">
            <i id="media-btn" className={["large circular inverted blue twitter icon"]} href="https://twitter.com/SamanShemi" target="_blank"></i>
          </a>
        );

        const instagramButton = (
          <a  href="https://www.instagram.com/samanshemi" target="_blank" rel="noopener noreferrer">
            <i id="media-btn" className={["large circular inverted purple instagram icon"]} href="https://www.instagram.com/saman.hpour/?hl=en" target="_blank"></i>
          </a>
        )

        const linkedinButton = (
          <a  href="https://www.linkedin.com/in/saman-hashemipour/" target="_blank" rel="noopener noreferrer">
            <i id="media-btn" className={["large circular inverted blue linkedin icon"]} href="https://www.linkedin.com/in/saman-hashemipour/" target="_blank"></i>
          </a>
        )

        const spotifyButton = (
          <a  href="https://open.spotify.com/user/12131721991?si=fP8OI_m2Rqe5XOkurfH0hw" target="_blank" rel="noopener noreferrer">
            <i id="media-btn" className={["large circular inverted green spotify icon"]} href="https://open.spotify.com/user/12131721991?si=fP8OI_m2Rqe5XOkurfH0hw" target="_blank"></i>
          </a>
        )

        const facebookButton = (
          <a  href="https://www.facebook.com/saman.hashemipour" target="_blank" rel="noopener noreferrer">
            <i id="media-btn" className={["large circular inverted blue facebook icon"]} href="https://www.facebook.com/saman.hashemipour" target="_blank"></i>
          </a>
        )

        const emailModal = (
          <Modal id="testmodal" size="mini" open={this.state.open} onClose={() => {this.setState({open: false})}} centered={false} className="sent-modal">
          <Modal.Header>{this.state.modalTitle}</Modal.Header>
          <Modal.Content>
            <p>{this.state.modalText}</p> 
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Got It!'
              onClick={() => this.setState({open:false})}
            />
          </Modal.Actions>
        </Modal>
        );

        const mediaButtonContainer = (
          <div id={mediaContainerID} class="row">
            <div class="ui eight wide computer twelve wide tablet sixteen wide mobile column center aligned grid">
              
              <div class="two wide computer tablet three wide mobile padded column">
                {twitterButton}
              </div>
              
              <div class="two wide computer tablet three wide mobile column">
                {instagramButton}
              </div>

              <div class="two wide computer tablet three wide mobile column">
                {linkedinButton}
              </div>

              <div class="two wide computer tablet three wide mobile column">
                {spotifyButton}
              </div>
              
              <div class="two wide computer tablet three wide mobile column">
                {facebookButton}
              </div>
            
            </div>
          </div>
        )

      if(!this.props.contactStack)
      {
        return(
        <ParallaxLayer id="contact_page" offset={this.props.contactOffset} speed={0} factor={this.props.contactSize} className="contact-background" >
            <section class="box"> <section class="box-inner">
                
            <div class="ui fourteen column centered grid">
  
              {emailModal}

              {contactTitle}


              <div class="row" />
              <div class="row" />
              <div class="computer only row" />
              <div class="computer only row" />
              

              <div class="row">

                <div class="six wide column">
                  {emailForm}
                </div>
  
                <div class="one wide column" />
  
                <div id="contact-text-computer" class="six wide column">
                  {contactText}
                </div>
  
              </div>

              <div class="row" />
              <div class="row" />
              <div class="row" />
              <div class="row" />
              <div class="row" />
              <div class="row" />
              <div class="row" />

              {mediaButtonContainer}

            </div>
  
            </section> </section>
        </ParallaxLayer>  
        );
      }
      else{
        return(
          <ParallaxLayer id="contact_page" offset={this.props.contactOffset} speed={0} factor={this.props.contactSize} className="contact-background" >
            <section id="test-box" class="box">
              <section id="test-innerbox" class="box-inner">

                {emailModal}

                <div id="testgrid" class="ui fourteen column centered grid">

                  {contactTitle}
      
                  <div id="testrow" class="row" /> 
                  <div id="testrow" class="row" /> 
                  
                  <div id="textbox-mobile" class="row">
                    <div id="contact-text-mobile" class="twelve wide column">
                      {contactText}
                    </div>
                  </div>

                  <div id="testrowform" class="row">
                    <div id="testcoolun" class="twelve wide column">
                        {emailForm}
                    </div>
                  </div>            
                </div>

                {mediaButtonContainer}

              </section> </section>
          </ParallaxLayer>  
          );
      }
    }
}

export default Contact