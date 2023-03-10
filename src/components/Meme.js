import React from "react";
import "../styles/Meme.css";

export default function Meme() {
  return (
    <form className="">
      <div className="row justify-content-center  pt-5 pb-4">
        <div className="col-sm-5 ">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="col-sm-5 ">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
      </div>
      <div className="col-sm-10 mx-auto">
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Get a new meme image
        </button>
      </div>
    </form>
  );
}
