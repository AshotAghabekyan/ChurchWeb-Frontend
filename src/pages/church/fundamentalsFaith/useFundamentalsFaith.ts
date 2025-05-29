import { useEffect, useRef, useState } from "react";
import useLayout from "../../../hooks/layout/useLayout";

export function useFundamentalsFaith() {
  const [expanded, setExpanded] = useState(false);
  const { smallLayout } = useLayout();
  const bottomButtonRef = useRef<HTMLButtonElement>(null);
  const [hideFixedButton, setHideFixedButton] = useState(false);

  function handleToggle() {
    setExpanded((prev) => !prev);
  }

  useEffect(() => {
    if (!bottomButtonRef.current || !smallLayout) return;

    if (!expanded) {
      setHideFixedButton(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideFixedButton(entry.boundingClientRect.top < window.innerHeight);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.01,
      }
    );

    observer.observe(bottomButtonRef.current);

    return () => {
      if (bottomButtonRef.current) {
        observer.unobserve(bottomButtonRef.current);
      }
    };
  }, [smallLayout, expanded, hideFixedButton]);

  return {
    bottomButtonRef,
    smallLayout,
    setExpanded,
    handleToggle,
    expanded,
    hideFixedButton,
  };
}
