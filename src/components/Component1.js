import React from "react";
import { Spring } from "react-spring";

export default function Component1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            {props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Component 1</h1>
                        <p>
                            Officia minim quis velit ad eu eu. Occaecat Lorem
                            nostrud nisi excepteur deserunt incididunt proident
                            qui pariatur veniam. Elit cillum cupidatat nisi
                            excepteur elit laboris et proident Lorem anim. Ea
                            nulla ullamco veniam occaecat sint magna.
                        </p>
                        <Spring
                            from={{ number: 0 }}
                            to={{ number: 10 }}
                            config={{ duration: 10000 }}
                        >
                            {props => (
                                <div style={props}>
                                    <h1 style={counter}>
                                        {props.number.toFixed()}
                                    </h1>
                                </div>
                            )}
                        </Spring>
                    </div>
                </div>
            )}
        </Spring>
    );
}

const c1Style = {
    background: "steelblue",
    color: "white",
    padding: "1.5rem"
};
const counter = {
    background: "#333",
    textAlign: "center",
    width: "100px",
    borderRadius: "50%",
    margin: "1rem auto"
};
