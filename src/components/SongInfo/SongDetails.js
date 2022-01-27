import React from "react";
import "../../../styles/SongInfo/SongInfo_details.module.css";

export default SongDetails = () => {
  return (
    <>
      <div className="song-info">
        <div className="song-info__song-details">
          <div className="song-details__title">
            <h1>SONG DETAILS</h1>
          </div>
          <div className="song-details__subtitle">
            <h3>Notes from Owner</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="song-details__artist-notes">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              expedita quaerat qui nam unde neque, dolorum facere atque, ab
              fugiat eligendi iusto ad vel blanditiis itaque beatae
              consequuntur. 
              Earum at architecto porro ullam fugiat ut sit harum
              inventore, laborum, recusandae cum, eaque doloribus accusantium!
              Ratione doloremque.
              voluptas perferendis ipsa quibusdam pariatur
              cumque sed incidunt eligendi at facilis cupiditate nihil expedita
              explicabo, veniam placeat corrupti fugit totam beatae vero natus.

              Non excepturi ipsa tenetur tempore inventore. Quia iure veritatis
              expedita velit nulla vel adipisci quos sit! Ullam a temporibus
              labore magni error, incidunt beatae dolorum? Magni at commodi
              suscipit voluptates odio.
            </p>
          </div>
        </div>
        <div className="song-info__other-details">
          <div className="other-details__title">
            <h1>OTHER DETAILS</h1>
          </div>
          <div className="other-details__section1">
            <div>
                <h4>Genres</h4>
                <p>Slow & Relaxing</p>
            </div>
            <div>
                <h4>Intrument Used</h4>
                <p>Drums,Piano,Violin,Flute</p>
            </div>
            <div>
                <h4>sampling</h4>
                <p>No</p>
            </div>
          </div>
          <hr />
          <div className="other-details__section2">
            <div>
                <h4>Contact Address</h4>
                <p>0xcc3s534ngd4dg...</p>
            </div>
            <div>
                <h4>Token ID</h4>
                <p>187372</p>
            </div>
            <div>
                <h4>Token Standard</h4>
                <p>ERC-1176</p>
            </div>
            <div>
                <h4>Blockchain</h4>
                <p>Ethereum</p>
            </div>
          </div>
          <hr />
          <div className="other-details__section3">
            <div className="secton3__artist-name">
                <h4>Ben Kessler</h4>
                <p>Go to artist profile page &nbsp;<i class="fas fa-long-arrow-right"></i></p>
            </div>
          </div>
          <div className="other-details__Icons">
            <img src="https://img.icons8.com/ios-filled/50/000000/meta.png"/>
            <i class="fab fa-twitter"></i>
          </div>
          <div className="other-details__footer">
            <div>
                <h4>Listen on</h4>
                <div className="footer__icons">
                    <img src="https://img.icons8.com/ios-filled/50/000000/spotify.png"/>
                    <img src="https://img.icons8.com/ios-filled/50/000000/apple-music.png"/>
                    <img src="https://img.icons8.com/color/48/000000/amazon.png"/>
                    <img src="https://img.icons8.com/bubbles/50/000000/youtube-music.png"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
