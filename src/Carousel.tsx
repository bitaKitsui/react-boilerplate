import { type FC } from "react";
import "./Carousel.css";

export const Carousel: FC = () => {
  return (
    <section aria-label="Highlighted television shows" className="carousel">
      <div className="carousel-inner">
        <div className="controls">
          <button
            type="button"
            className="rotation pause"
            aria-label="Stop automatic slide show"
            aria-roledescription="carousel"
          >
            <svg width="42" height="34">
              <rect
                className="background"
                x="2"
                y="2"
                rx="5"
                ry="5"
                width="38"
                height="24"
              ></rect>
              <rect
                className="border"
                x="4"
                y="4"
                rx="5"
                ry="5"
                width="34"
                height="20"
              ></rect>
              <polygon className="pause" points="17 8 17 20"></polygon>
              <polygon className="pause" points="24 8 24 20"></polygon>
              <polygon className="play" points="15 8 15 20 27 14"></polygon>
            </svg>
          </button>
          <button
            type="button"
            className="previous"
            aria-controls="myCarousel-items"
            aria-label="Previous Slide"
          >
            <svg width="42" height="34">
              <rect
                className="background"
                x="2"
                y="2"
                rx="5"
                ry="5"
                width="38"
                height="24"
              ></rect>
              <rect
                className="border"
                x="4"
                y="4"
                rx="5"
                ry="5"
                width="34"
                height="20"
              ></rect>
              <polygon points="9 14 21 8 21 11 33 11 33 17 21 17 21 20"></polygon>
            </svg>
          </button>
          <button
            type="button"
            className="next"
            aria-controls="myCarousel-items"
            aria-label="Next Slide"
          >
            <svg width="42" height="34">
              <rect
                className="background"
                x="2"
                y="2"
                rx="5"
                ry="5"
                width="38"
                height="24"
              ></rect>
              <rect
                className="border"
                x="4"
                y="4"
                rx="5"
                ry="5"
                width="34"
                height="20"
              ></rect>
              <polygon points="9 11 21 11 21 8 33 14 21 20 21 17 9 17"></polygon>
            </svg>
          </button>
        </div>
        <div id="myCarousel-items" className="carousel-items" aria-live="off">
          <div
            className="carousel-item active"
            role="group"
            aria-roledescription="slide"
            aria-label="1 of 1"
          >
            <div className="carousel-image">
              <a href="#" aria-label="image-link">
                <img
                  src="https://picsum.photos/200/300"
                  width="900"
                  height="300"
                  decoding="async"
                  alt=""
                />
              </a>
            </div>
            <div className="carousel-caption">
              <h3>
                <a href="#">Dynamic Europe: Amsterdam, Prague, Berlin</a>
              </h3>
              <div className="hidden-xs hidden-sm">
                <p>
                  <span className="contrast">7 pm Tuesday, March 3, on TV</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
