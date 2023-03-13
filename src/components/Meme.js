import React, { useState } from "react";
import "../styles/MemeStyle.css";
import { memesData } from "../data/memesData";

export default function Meme() {
  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getRandomImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomIndex].url;
    //access previous meme (l.8) and alter it's img property to render the new random img instead
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  return (
    <>
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
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="col-sm-10 mx-auto">
          <button
            type="button"
            className="formbtn btn btn-primary btn-lg btn-block"
            onClick={getRandomImage}
          >
            Get a new meme image 🖼
          </button>
        </div>
      </form>
      <div className="row">
        <img
          className="meme-img col-sm-8 mx-auto my-5"
          src={meme.randomImage}
        />
      </div>
    </>
  );
}
