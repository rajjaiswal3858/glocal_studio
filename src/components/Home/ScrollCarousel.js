// CarouselDemo.jsx
import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import cx from "classnames";

import "./ScrollCarousel.scss";

gsap.registerPlugin(ScrollTrigger);

function CharSplit({ text, className, onChars }) {
  const spansRef = useRef([]);
  spansRef.current = [];
  React.useEffect(() => {
    if (onChars) onChars(spansRef.current);
  }, [onChars, text]);
  return (
    <span className={className}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          className={cx("char", {
						"emptyChar": ch === " ",
					})}
          ref={(el) => el && spansRef.current.push(el)}
          aria-hidden="true"
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function CarouselDemo(props) {
	const { images, serviceName } = props;

  const scope = useRef(null);
  const sceneRef = useRef(null);
  const titleCharsRef = useRef([]);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const gridItemRefs = useRef([]);
	const sceneTitle = useRef(null);

  const radius = 500;

  const getTransforms = useCallback((count, r) => {
    const step = 360 / count;
    return Array.from({ length: count }, (_, i) => `rotateY(${i * step}deg) translateZ(${r}px)`);
  }, []);

  const animateChars = useCallback((chars, direction = "in", opts = {}) => {
    if (!chars || !chars.length) return;
    const base = {
      autoAlpha: direction === "in" ? 1 : 0,
      duration: 0.02,
      ease: "none",
      stagger: { each: 0.04, from: direction === "in" ? "start" : "end" },
      ...opts,
    };
    gsap.fromTo(
      chars,
      { autoAlpha: direction === "in" ? 0 : 1 },
      { ...base, immediateRender: false }
    );
  }, []);

	useEffect(() => {
		if (!sceneRef.current) return;
      const carouselEl = carouselRef.current;
      const cardsEls = cardRefs.current;
      const transforms = getTransforms(images.length, radius);

      const cellEls = carouselEl.querySelectorAll(".carousel__cell");
      cellEls.forEach((cell, i) => {
        cell.style.transform = transforms[i];
      });

			const titleEl = gsap.timeline({
				defaults: { ease: "none" },
				scrollTrigger: {
					trigger: sceneRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: true
				}
			})

			titleEl.fromTo(
				sceneTitle.current,
				{ y: -125 }, // starting offset (adjust to taste)
				{
					y: 125					
				},
				0
			);

      const tl = gsap.timeline({
        defaults: { ease: "sine.inOut" },
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.fromTo(carouselEl, { rotationY: 0 }, { rotationY: -180 }, 0)
        .fromTo(carouselEl, { rotationZ: 3, rotationX: 3 }, { rotationZ: -3, rotationX: -3 }, 0)
        .fromTo(cardsEls, { filter: "brightness(250%)" }, { filter: "brightness(80%)", ease: "power3" }, 0)
        .fromTo(cardsEls, { rotationZ: 10 }, { rotationZ: -10, ease: "none" }, 0);
	}, [])

  // Title "typing" effect – run only after chars are mounted
  useEffect(() => {
		const chars = titleCharsRef.current;
		if (!chars?.length) return;
		gsap.set(chars, { autoAlpha: 0, willChange: "opacity" });
		animateChars(chars, "in", {
			scrollTrigger: {
				trigger: sceneRef.current,
				start: "top center",
				toggleActions: "play none none reverse",
			},
		});
	}, []);

  // reset collectors each render
  cardRefs.current = [];
  gridItemRefs.current = [];

  return (
    <main id="smooth-content" ref={scope}>
      <div className="scene-wrapper">
        <div className="scene" data-radius={radius} ref={sceneRef}>
          <h2 className="scene__title" ref={sceneTitle}>
						<a href="#preview-1">
							<CharSplit
								text={serviceName}
								onChars={(chars) => {
									titleCharsRef.current = chars;
								}}
							/>
						</a>
          </h2>

          <div className="carousel" ref={carouselRef}>
            {images.map((img, idx) => (
              <div className="carousel__cell" key={idx}>
                <div
                  className="card"
                  ref={(el) => el && (cardRefs.current[idx] = el)}
                  style={{ ["--img"]: `url(${img})` }}
                >
                  <div className="card__face card__face--front" />
                  <div className="card__face card__face--back" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
