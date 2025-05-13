import "./ImageSelector.css"
import {App} from "../App"

export const brokenImages = [
    1, 24, 32, 36, 44, 47
];

export function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }
    return urls;
}

export const imageUrls = getImageUrls();

interface ImageSelectorProps {
  image: string;
  setImage: (url: string) => void;
}

export function ImageSelector({ image, setImage }: ImageSelectorProps) {
  return (
    <div className="image-grid">
      {imageUrls.map((url, i) => (
        <li key={i}>
          <img
            src={url}
            alt={`Image ${i}`}
            onClick={() => setImage(url)}
            className={image === url ? 'selected' : ''}
          />
        </li>
      ))}
     
    </div>
  );
}