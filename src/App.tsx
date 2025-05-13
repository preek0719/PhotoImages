import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {PhotoViewer} from './PhotoViewer/PhotoViewer'
import {ImageSelector} from './ImageSelector/ImageSelector'


export function App() {
//  const [count, setCount] = useState(0)
 const [image, setImage] = useState<string>("https://picsum.photos/id/237/200/200");

  return (
    <>
      <div>        
        <h1>Photo Viewer</h1>  
        <PhotoViewer image={image} />
        <div>
        <h2>Image Selector</h2>
        <ImageSelector image={image} setImage={setImage} /> 
        </div>
      </div>    
    </>
  )
}

export default App