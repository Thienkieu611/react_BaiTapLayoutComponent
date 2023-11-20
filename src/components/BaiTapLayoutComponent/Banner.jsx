import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="bannerlayout py-5">
        <div className="container px-lg-5">
          <div className="p-3 p-lg-5 bg-light rounded-3 ">
            <div className="m-3 m-lg-4">
              <h1 className="display-5 fw-regular mb-4">A Warm Welcome!</h1>
              <p className="fs-5 text-secondary mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, veniam. Delectus tempore distinctio ex voluptatum,
                repellendus quia nesciunt maxime magni labore qui provident
                dolorum, rem vero, dignissimos ab iste dolore.
              </p>
              <a className="btn btn-primary btn-lg" href="#!">
                Call to action!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
