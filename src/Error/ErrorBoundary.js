import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            info: null,
        };
    }
    static getDerivedStateFromError(error) {
        if (error) {
            return {
                hasError: true,
            };
        }
    }
    componentDidCatch(error, info) {
        console.log(error);
        console.log(info.componentStack);
        if (error) {
            this.setState = {
                hasError: true,
                info: info,
            };
        }
    }

    render() {
        return (
            <div>
                {this.state.hasError ? (
                    <h1>Error happened! {this.state.info}</h1>
                ) : (
                    this.props.children
                )}
            </div>
        );
    }
}

export default ErrorBoundary;
