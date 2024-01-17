import React from "react";
import './block.css'

interface blockProp{
    text?: String| null;
    onClick: ()=>void
}

const Block:React.FC<blockProp> = (props) =>{
    return(
        <div className="block" onClick={props.onClick}>{props.text}</div>
    );
}

export default Block;