import React, { useState, useEffect, useRef } from "react";

function useElementOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

function AnimateIn({
	from,
	to,
	delay = "0",
	style = {},
	className = "",
	children,
	element: Component = "div",
	elementProps = {},
}) {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles = {
    transition: "600ms ease-in-out",
		...style
  };
  return (
    <Component
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
							transitionDelay: delay,
              ...to
            }
          : {
              ...defaultStyles,
							transitionDelay: "0ms",
              ...from
            }
      }
			className={className}
			{...elementProps}
    >
      {children}
    </Component>
  );
}

function FadeIn({
	children,
	delay = "0",
	className,
	style = {},
	element,
	elementProps,
}) {
  return <AnimateIn
		from={{ opacity: 0 }}
		to={{ opacity: 1 }}
		style={style}
		delay={delay}
		className={className}
		element={element}
		elementProps={elementProps}
	>
    {children}
  </AnimateIn>
}

function FadeUp({
	direction = "up",
	delay = "0",
	children,
	className,
	style = {},
	element,
	elementProps,
	distance,
}) {
	const getFromTranslateValue = () => {
		if (direction === "up") {
			return distance || "0 2.5rem";
		} else if (direction === "down") {
			return distance || "0 -2.5rem";
		} else if (direction === "left") {
			return distance || "2.5rem 0";
		}

		return distance || "-2.5rem 0";
	};

	return (
		<AnimateIn
			from={{ opacity: 0, translate: getFromTranslateValue() }}
			to={{ opacity: 1, translate: "none" }}
			delay={delay}
			style={style}
			className={className}
			element={element}
			elementProps={elementProps}
		>
			{children}
		</AnimateIn>
	);
}

function ScaleIn({
	delay = "0",
	style = {},
	className,
	children,
	element,
	elementProps,
}) {
  return <AnimateIn
		from={{ scale: "0" }}
		to={{ scale: "1" }}
		className={className}
		style = {style}
		delay={delay}
		element={element}
		elementProps={elementProps}
	>
    {children}
  </AnimateIn>
}

const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn
};

export default Animate;
