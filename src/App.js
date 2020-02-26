import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import'./index.css';
import profile from './assets/profile.png';

class App extends Component{
    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {
        return(
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>My name is Atrisa. I'm Fullstack Developer.</p>
                <p>I'm always looking forward to working on meaningful project</p>
                {
                    this.state.displayBio ? (
                    <div>
                    <p>I live in Depok</p>
                    <p>My favorite language is JavaScript, and i think React.js is awesome.</p>
                    <p>Besides coding, i also love music and book</p>
                    <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>
                )
                }
                <hr/>
                <Projects />
                <hr/>
                <SocialProfiles />
            </div>
        )
    }
}

export default App;
