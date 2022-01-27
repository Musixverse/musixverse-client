import React from "react";
import "../../../styles/SongInfo/SongInfo_details.module.css";
import data from "../../../metaData";

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
              {data.Hashes.descHash}
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
                <p>{data.Characteristics.genre}</p>
            </div>
            <div>
                <h4>Intrument Used</h4>
                <p>{data.instruments}</p>
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
                <p>{data.artistAddress}</p>
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
                <h4>{data.artistName}</h4>
                <p>Go to artist profile page &nbsp;<i class="fas fa-long-arrow-right"></i></p>
            </div>
          </div>
          <div className="other-details__Icons">
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/meta.png"/></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
          <div className="other-details__footer">
            <div>
                <h4>Listen on</h4>
                <div className="footer__icons">
                    <a href={data.Links.spotify}><img src="https://img.icons8.com/ios-filled/50/000000/spotify.png"/></a>
                    <a href={data.Links.appleMusic}><img src="https://img.icons8.com/ios-filled/50/000000/apple-music.png"/></a>
                    <a href={data.Links.amazonMusic}><img src="https://img.icons8.com/color/48/000000/amazon.png"/></a>
                    <a href={data.Links.youtubeMusic}><img src="https://img.icons8.com/bubbles/50/000000/youtube-music.png"/></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
