import { useState } from "react";

export function useMobileHeader() {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  function handleMenuOpen() {
    setIsDrawerOpened(true);
  }

  function handleMenuClose() {
    setIsDrawerOpened(false);
  }

  return {
    handleMenuClose,
    handleMenuOpen,
    isDrawerOpened,
  };
}
