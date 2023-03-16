import React, { useState, useEffect } from "react";
import "../styles/MemeStyle.css";
// import { memesData } from "../data/memesData";

export default function Meme() {
  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // const [allMemes, setAllMemes] = useState(memesData);

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  console.log(allMemes);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomIndex].url;
    //access previous meme (l.8) and alter it's img property to render the new random img instead
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      // return a new object based on previous meme obj then updated accordingly
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <>
      <form className="form">
        <div className="row justify-content-center  pt-5 pb-4">
          <div className="col-sm-5 ">
            <input
              type="text"
              className="form-control"
              placeholder="Top text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div className="col-sm-5 ">
            <input
              type="text"
              className="form-control"
              placeholder="Bottom text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
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
      <section className="row " id="meme-section">
        <img
          className="col-sm-8 mx-auto my-5"
          id="meme-img"
          src={meme.randomImage}
          alt="This is a meme"
        />
        <h2 className="meme-text pt-5" id="top-text">
          {meme.topText}
        </h2>
        <h2 className="meme-text pb-5" id="bottom-text">
          {meme.bottomText}
        </h2>
      </section>
    </>
  );
}
