import { Component } from "react";
import React from 'react';
import {ParallaxLayer} from 'react-spring/renderprops-addons';
import "./Music.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import madvillainy from "../../img/madvillan_album_cover.jpg"
import the_suns_tirade from "../../img/the_suns_tirade_album_cover.jpg"
import malibu from "../../img/malibu_album_cover.jpg"
import aquemini from "../../img/aquemini_album_cover.jpg"
import micahulrich from "../../img/micahulrich.jpg"
import dec_art from "../../img/decart.jpg"
import lauracallaghani from "../../img/lauracallaghani.jpg"

import song_1 from "../../music/By_The_Lake.mp3"

import song_2 from "../../music/Melody-101.mp3"

import song_3 from "../../music/Fun_Times.mp3"



class Music extends Component{
    constructor (props) {
        super(props);
        this.state = {};

    }
    
    render(){

        const musicTitle = (
            <div class="center aligned column">
                <div id="my-music-title" class="ui basic center aligned segment"> 
                    My Music
                </div>
            </div>
        )
        
        const albumtitle = (
            <div class="center aligned column">
                <div id="favorite-albums-title" class="ui basic center aligned segment"> 
                    My Favorite Albums
                </div>
            </div>
        );

        const arttitle = (
            <div class="center aligned column">
                <div id="favorite-artists-title" class="ui basic center aligned segment"> 
                    My Favorite Artists
                </div>
            </div>
        )

        const song1=(
            <>
            <p id="song2-title"> Lakeside </p>
            <AudioPlayer
                id="song1"
                style={{backgroundColor: '#87dfd6', opacity: '60%', width: '100%'}}
                autoPlay={false}
                src={song_1}
                customAdditionalControls={[]}
                showJumpControls={false}
                onPlay={e => console.log("onPlay")}
                // other props here
            />
            </>
        );

        const song2=(
            <>
            <p id="song3-title"> Stargaze </p>
            <AudioPlayer
                id="song1"
                style={{backgroundColor: '#fbfd8a', opacity: '60%', width: '100%'}}
                autoPlay={false}
                src={song_2}
                customAdditionalControls={[]}
                showJumpControls={false}
                onPlay={e => console.log("onPlay")}
                // other props here
            />
            </>
        );

        const song3=(
            <>
            <p id="song1-title"> Fun Times at the Bird Hotel </p>
            <AudioPlayer
                id="song1"
                style={{backgroundColor: '#cff6cf', opacity: '60%', width: '100%'}}
                autoPlay={false}
                src={song_3}
                customAdditionalControls={[]}
                showJumpControls={false}
                onPlay={e => console.log("onPlay")}
                // other props here
            />
            </>
        );

        const malibu_cover = (
            <a  href="https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK?si=uVeLaqD7QBmtPRJaEf3c5g" target="_blank">
                <img className="malibu-cover" src={malibu} alt="Malibu by Anderson .Paak" />
            </a>
        );

        const madvillainy_cover = (
            <a  href="https://open.spotify.com/album/01FCoGEQ3NFWF4fHJzdiax?si=RfbOkojaShW37Oc_37kqJw" target="_blank">
                <img className="malibu-cover" src={madvillainy} alt="Madvillainy by Madvillan" />
            </a>
        );

        const aquemnini_cover = (
            <a  href="https://open.spotify.com/album/5ceB3rxgXqIRpsOvVzTG28?si=KauGgtqpSU-NRDWTFn_3lQ" target="_blank">
                <img className="malibu-cover" src={aquemini} alt="Aquemini by OutKast" />
            </a>
        );

        const thesunstirade_cover = (
            <a  href="https://open.spotify.com/album/6jjX8mGrsWtrpYpFhGMrg1?si=pfOVWg1ORiiBU3dLvSptUA" target="_blank">
                <img className="malibu-cover" src={the_suns_tirade} alt="The Sun's Tirade by Isaiah Rashad" />
            </a>
        );


        const micah = (
            <a  href="https://twitter.com/micahulrich" target="_blank">
                <img className="art-image" src={micahulrich} alt="Madvillainy by Madvillan" />
            </a>
        )

        const laura = (
            <a  href="https://www.instagram.com/lauracallaghanillustration/" target="_blank">
                <img className="art-image" src={lauracallaghani} alt="The Sun's Tirade by Isaiah Rashad" />
            </a>
        )

        const dec = (
            <a  href="https://www.instagram.com/dec_art.it/" target="_blank">
                <img className="art-image" src={dec_art} alt="Aquemini by OutKast" />
            </a>
        )

        if(!this.props.musicDouble && !this.props.musicStack && !this.props.musicMineStack)
        {
            return(
                <ParallaxLayer id="music_page" offset={this.props.musicOffset} speed={0} factor={this.props.musicSize} className="music-background" >
                <section class="box"> <section class="box-inner">
                <div class="ui center aligned equal width grid">

                    {/* <div class="row">
                    <div class="center aligned column">
                        <div id="music-and-art-title" class="ui basic center aligned segment"> 
                            Music & Art
                        </div>
                    </div>
                    </div> */}

                    <div class="row" />
                    <div class="row" />
                    <div class="row" />

                    <div class="row">
                        {musicTitle}
                    </div>

                    <div class="row">
                        <div class="ui eleven column grid">
                            <div class="three wide column">
                                {song1}
                            </div>

                            <div class="one wide column" > </div>

                            <div class="three wide column">
                                {song2}
                            </div>

                            <div class="one wide column" > </div>

                            <div class="three wide column">
                                {song3}
                            </div>
                        </div>
                    </div>
                    

                    <div class="row">
                        {albumtitle}
                    </div>

                    <div class="row">
                        <div class="ui four column center aligned grid">
                            <div class="column">
                                {malibu_cover}
                            </div>

                            <div class="column">
                                {madvillainy_cover}
                            </div>

                            <div class="column">
                                {aquemnini_cover}
                            </div>

                            <div class="column">
                                {thesunstirade_cover}
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        {arttitle}
                    </div>

                    <div class="row">
                        <div class="ui five column center aligned  grid">
                            <div class="column" />
                            <div class="column">
                                {micah}
                            </div>

                            <div class="column">
                                {laura}
                            </div>

                            <div class="column">
                                {dec}
                            </div>
                            <div class="column" />
                            
                        </div>
                    </div>
        
                    <div class="row" />
        
                </div>
                </section></section>
                </ParallaxLayer>
            );
        }
        else if(!this.props.musicDouble && !this.props.musicStack && this.props.musicMineStack)
        {
            return(
                <ParallaxLayer id="music_page" offset={this.props.musicOffset} speed={0} factor={this.props.musicSize} className="music-background" >
                <section class="box"> <section class="box-inner">
                <div class="ui center aligned grid">

                    <div class="row" />
                    <div class="row" />
                    <div class="row" />

                    <div class="row">
                    <div class="center aligned column">
                        <div id="my-music-title" class="ui basic center aligned segment"> 
                            My Music
                        </div>
                    </div>
                    </div>

                    <div class="row">
                        <div class="ui center aligned  grid">
                            <div class="centered column">
                                <div id="song1" class="ui basic center aligned segment">
                                    {song1}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui center aligned grid">
                            <div class="column">
                                <div id="song2" class="ui basic center aligned segment">
                                    {song2}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui center aligned  grid">
                            <div class="column">
                                <div id="song3" class="ui basic center aligned segment">
                                    {song3}
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div class="row">
                        {albumtitle}
                    </div>

                    <div class="row">
                        <div class="ui four column center aligned grid">
                        <div class="column">
                                {aquemnini_cover}
                            </div>

                            <div class="column">
                                {thesunstirade_cover}
                            </div>

                            <div class="column">
                                {malibu_cover}
                            </div>

                            <div class="column">
                                {madvillainy_cover}
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {arttitle}
                    </div>

                    <div class="row">
                        <div class="ui three column center aligned  grid">
                            <div class="column">
                                {micah}
                            </div>

                            <div class="column">
                                {laura}
                            </div>

                            <div class="column">
                                {dec}
                            </div>
                            
                        </div>
                    </div>
        
                    <div class="row" />
        
                </div>
                </section></section>
                </ParallaxLayer>
            );
        }
        else if(this.props.musicDouble && !this.props.musicStack && !this.props.musicMineStack)
        {
            return(
                <ParallaxLayer id="music_page" offset={this.props.musicOffset} speed={0} factor={this.props.musicSize} className="music-background" >
                <section class="box"> <section class="box-inner">
                <div class="ui center aligned grid">

                    {/* <div class="row">
                    <div class="center aligned column">
                        <div id="music-and-art-title" class="ui basic center aligned segment"> 
                            Music & Art
                        </div>
                    </div>
                    </div> */}

                    <div class="row" />
                    <div class="row" />
                    <div class="row" />

                    <div class="row">
                        {musicTitle}
                    </div>

                    <div class="row">
                        <div class="ui center aligned  grid">
                            <div class="centered column">
                                <div id="song1" class="ui basic center aligned segment">
                                    {song1}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui center aligned grid">
                            <div class="column">
                                <div id="song2" class="ui basic center aligned segment">
                                    {song2}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui center aligned  grid">
                            <div class="column">
                                <div id="song3" class="ui basic center aligned segment">
                                    {song3}
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div class="row">
                        {albumtitle}
                    </div>

                    <div class="row">
                        <div class="ui three column center aligned grid">
                            <div class="column">
                                {malibu_cover}
                            </div>

                            <div class="column">
                                {madvillainy_cover}
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui three column center aligned grid">

                            <div class="column">
                                {aquemnini_cover}
                            </div>

                            <div class="column">
                                {thesunstirade_cover}
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {arttitle}
                    </div>

                    <div class="row">
                        <div class="ui three column center aligned  grid">
                            <div class="column">
                                {micah}
                            </div>

                            <div class="column">
                                {laura}
                            </div>

                            <div class="column">
                                {dec}
                            </div>
                            
                        </div>
                    </div>
        
                    <div class="row" />
        
                </div>
                </section></section>
                </ParallaxLayer>
            );
        }
        else if(!this.props.musicDouble && this.props.musicStack)
        {
            return(
                <ParallaxLayer id="music_page" offset={this.props.musicOffset} speed={0} factor={this.props.musicSize} className="music-background" >
                <section class="box"> <section class="box-inner">
                <div class="ui center aligned grid">

                    {/* <div class="row">
                    <div class="center aligned column">
                        <div id="music-and-art-title" class="ui basic center aligned segment"> 
                            Music & Art
                        </div>
                    </div>
                    </div> */}

                    <div class="row" />
                    <div class="row" />
                    <div class="row" />

                    <div class="row">
                        {musicTitle}
                    </div>

                    <div class="row">
                        <div class="ui one column center aligned  grid">
                            <div class="column">
                                <div id="favorite-albums-title" class="ui basic center aligned segment">
                                    {song1}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui one column center aligned  grid">
                            <div class="column">
                                <div id="favorite-albums-title" class="ui basic center aligned segment">
                                    {song2}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui one column center aligned  grid">
                            <div class="column">
                                <div id="favorite-albums-title" class="ui basic center aligned segment">
                                    {song3}
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div class="row">
                        {albumtitle}
                    </div>

                    <div class="row">
                        <div class="ui one column center aligned grid">
                            <div class="column">
                                {malibu_cover}
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui one column center aligned grid">
                            <div class="column">
                                {madvillainy_cover}
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui one column center aligned grid">
                            <div class="column">
                                {aquemnini_cover}
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui one column center aligned grid">
                            <div class="column">
                                {thesunstirade_cover}
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {arttitle}
                    </div>

                    <div class="row">
                        <div class="ui one column center aligned  grid">
                            <div class="column">
                                {micah}
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="ui one column center aligned  grid">
                            <div class="column">
                                {laura}
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui one column center aligned  grid">
                            <div class="column">
                                {dec}
                            </div>
                        </div>
                    </div>

                    <div class="row" />
        
                </div>
                </section></section>
                </ParallaxLayer>
            );
        }
    }
}

export default Music