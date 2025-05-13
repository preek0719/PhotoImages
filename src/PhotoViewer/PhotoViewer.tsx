import "./PhotoViewer.css"

interface PhotoViewerProps {
  image: string; 
}

 export function PhotoViewer( { image }: PhotoViewerProps) {

    return (                
        <div className= "images">               
            <img id="coverImage" src = {image}/>
        </div>
    );
}