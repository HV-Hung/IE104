import React from "react";

export const Seat = (props) => {
    const [state, setState] = React.useState(props.state);
    const clicked = () => {
        if (state === 0)
            setState(1);
        else if (state === 1)
            setState(0);
    }
    return (
        <div style={{
            margin: "5px",
            height: "30px",
            width: "37px",
            backgroundColor: state === 0 ? "#B8C4BF" : state === 1 ? "#15D251" : "#313F36",
            border: "1px solid black",
            borderRadius: "10% 10% 100% 100% / 10% 10% 100% 100%"
        }}
            onClick={clicked}></div >
    );
};
