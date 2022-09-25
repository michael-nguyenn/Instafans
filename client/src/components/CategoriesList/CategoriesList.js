import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import suyog from "../../assets/images/Frame10.png";
import nicole from "../../assets/images/Frame11.png";
import hater from "../../assets/images/hater.png";
import bot from "../../assets/images/bot.png";
import "./CategoriesList.scss";

export default function CategoriesList() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item" data-value="1">
      <span className="hypeman__category">🙌 &nbsp; Biggest Hype Man</span>
      <img src={suyog} className="item__image"></img>
      <div className="item__container">
        <h3>Suyog Joshi</h3>
        <p className="item__text">
          This follower is loud and proud about their faith in you. Through your
          highest and lows, this person is your biggest cheerleader.
        </p>
        <button>Learn More</button>
      </div>
    </div>,
    <div className="item" data-value="2">
      <span className="admirer__category">❤️&nbsp; Secret Admirer</span>
      <img src={nicole} className="item__image"></img>
      <div className="item__container">
        <h3>Nicole Cevey</h3>
        <p className="item__text">
          This follower only has nice things to say about you. We wonder
          why.....
        </p>
        <button className="admirer__button">Learn More</button>
      </div>
    </div>,
    <div className="item" data-value="3">
      <span className="hater__category">☠️&nbsp; Low Key Hater</span>
      <img src={hater} className="item__image"></img>
      <div className="item__container">
        <h3>Javas Cript</h3>
        <p className="item__text">
          This follower doesn’t comment a lot, but they sure have a bunch of
          nasty things to say.
        </p>
        <button className="hater__button">Learn More</button>
      </div>
    </div>,
    <div className="item" data-value="4">
      <span className="bot__category">🤖&nbsp; Probably a Bot </span>
      <img src={bot} className="item__image"></img>
      <div className="item__container">
        <h3>Wall Lee</h3>
        <p className="item__text">A bunch of spam, nothing else to see here.</p>
        <button className="bot__button">Learn More</button>
      </div>
    </div>,
  ];

  return (
    <section className="card-list">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        paddingLeft={25}
        paddingRight={75}
        controlsStrategy="alternate"
      />
    </section>
  );
}
