import React from "react";  // import React (to provide access to TSX)
import "./PhotoViewer.css"


export function PhotoViewer( {id}: {id: number}) {
    let imageURL: string;
    imageURL = `https://picsum.photos/id/${id}/1600/900.jpg`;
  
    return (                
        <div className= "images">               
            <img src = {imageURL}/>
        </div>
    );
}