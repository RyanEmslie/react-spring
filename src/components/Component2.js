import React, { Component } from "react";
import { Spring } from "react-spring";

class Component2 extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 1000, duration: 1000 }}
            >
                {props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>Component 2</h1>
                            <p>
                                Officia minim quis velit ad eu eu. Occaecat
                                Lorem nostrud nisi excepteur deserunt incididunt
                                proident qui pariatur veniam. Elit cillum
                                cupidatat nisi excepteur elit laboris et
                                proident Lorem anim. Ea nulla ullamco veniam
                                occaecat sint magna.
                            </p>
                            <button style={btn} onClick={this.props.toggle}>
                                Toggle Component 3
                            </button>
                        </div>
                    </div>
                )}
            </Spring>
        );
    }
}

const c2Style = {
    background: "slateblue",
    color: "white",
    padding: "1.5rem"
};

const btn = {
    background: "#333",
    color: "#fff",
    padding: "1rem 2rem",
    border: "none",
    textTransform: "uppercase",
    margin: "15px 0"
};

export default Component2;
