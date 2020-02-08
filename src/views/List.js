import React, { Component } from 'react';
import mhs from '../data/mhs'

class List extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center mt-5 mb-5">
            <h4>MHS LIST</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-10">
            <table className="table table-striped table-dark">
              <thead>
              <tr>
                <th>NAME</th>
                <th>NIM</th>
                <th>DATE OF BIRTH</th>
                <th>PHONE</th>
              </tr>
              </thead>
              <tbody>
              {mhs.map(el => {
                return <tr>
                  <td>{el.name}</td>
                  <td>{el.nim}</td>
                  <td>{el.dob}</td>
                  <td>{el.phone}</td>
                </tr>
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
