import React, { Component } from 'react';
import user from '../data/user';
import faiq from '../assets/images/4x4.png'

class About extends Component {
  render() {
    return (
      <div className="container">
        <div class="row justify-content-center mt-5 mb-4">
          <h4>ABOUT</h4>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-md-2 text-center">
            <img className="img-fluid img-thumbnail rounded mx-auto d-block" src={faiq} alt={faiq}/>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col">
                <h2><u>{user.name}</u></h2>
                <span>{user.nim}</span>
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <h5>{user.class}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5>{user.dob}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5>{user.email}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <hr/>

          </div>
        </div>
      </div>
    );
  }
}

export default About;
