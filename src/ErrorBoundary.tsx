import React from "react";
import ServerErrorPage from "./pages/exceptions/ServerErrorPage";

interface ErrorState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<any, ErrorState, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    console.error("catched error:", error);
  }

  render() {
    if (this.state.hasError) {
      return <ServerErrorPage />;
    }

    return this.props.children;
  }
}
