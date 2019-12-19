import React from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Form from '../components/Form/Form';
import cover from './../assets/cover_big.png'
import icon1 from './../assets/001-tv.png'
import icon2 from './../assets/002-strategy.png'
import icon3 from './../assets/003-video-player.png'
import icon4 from './../assets/004-video-clip.png'
import icon5 from './../assets/icon_5.png'
import Footer from '../components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <section className="whatsinside" id="whatsinside">
        <div className="wrapper">
          <h1 className="h1">What’s <span>inside</span></h1>
          <div className="boxes">
            <div className="item">
              <img src={icon1} alt=""/>
              <div className="body">
                <h3 className="heading">How to succeed with Event TV</h3>
                <p className="lead">
                  Exhibitions, tradeshows and conferences are breaking new ground, providing an ever more vibrant environment for attendees
                </p>
              </div>
            </div>
            <div className="item">
              <img src={icon2} alt=""/>
              <div className="body">
                <h3 className="heading">Planning your event TV solution</h3>
                <p className="lead">
                The first step is to work out what you, as an organiser, want to achieve through your network.
                </p>
              </div>
            </div>
            <div className="item">
              <img src={icon3} alt=""/>
              <div className="body">
                <h3 className="heading">Delivering a high-impact video channel</h3>
                <p className="lead">
                  Event TV enables organizers to excel at using video to enhance their event
                </p>
              </div>
            </div>
            <div className="item">
              <img src={icon4} alt=""/>
              <div className="body">
                <h3 className="heading">Post-show event TV integration</h3>
                <p className="lead">
                At Smart Digital we focus on making the most of content, optimising each video clip, show reel and interview, uploading it in the right places to ensure maximum viewing. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sneakpeak">
        <div className="wrapper d-flex">
        <div className="sneakpeak-body d-flex flex-column">
          <h1>How to succeed with event TV</h1>
          <p className="lead">The success of an event TV platform lies in the planning.</p>
          <div className="short-box">
            <div className="icon">
              <img src={icon5}alt=""/>
            </div>
            <h2>Planning your event TV solution</h2>
            <p className="lead">The first step is to work out what you, as an organiser, want to achieve through your network. Whether you want to employ it to enhance delivery and awareness of all that the event has to offer, as a way of helping your exhibitors to be heard across the show or as a combination of both.</p>
            <p className="lead">Want more? <strong>Register and read.</strong></p>
            <a href="#" className="btn">Register now</a>
          </div>
        </div>
        <div className="sneakpeak-cover">
          <img src={cover} alt=""/>
        </div>
        </div>
      </section>
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
