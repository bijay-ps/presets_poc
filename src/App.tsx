import './App.scss'
import imageData, {imageDataType} from './mocks/data.ts';
import {useCallback, useState} from "react";
import Card from "./Card.tsx";


function App() {
    const [images, setImages] = useState<imageDataType>(imageData);

    const moveImage = useCallback((dragIndex, hoverIndex) => {
        setImages((prevCards) => {
            const clonedCards = [...prevCards];
            const temp = clonedCards[dragIndex].position; // Jis image ko drag kar rahe hain uski position

            clonedCards[dragIndex].position = clonedCards[hoverIndex].position;
            clonedCards[hoverIndex].position = temp;

            const removedItem = clonedCards.splice(dragIndex, 1)[0];

            clonedCards.splice(hoverIndex, 0, removedItem);
            localStorage.setItem('images', JSON.stringify(clonedCards));
            return clonedCards;
        });
    }, []);

  return (
      <div className="container">
          <div className="patient-data">
              <div>John Doe</div>
              <div className="icons">
                  <span>I</span>
                  <span>&#9998;</span>
                  <span>&#9750;</span>
              </div>
          </div>
          <div className="image-grid">
              {images.map((image, index) => (
                  <Card
                      src={image.img}
                      key={image.id}
                      id={image.id}
                      index={index}
                      position={image.position}
                      moveImage={moveImage}
                  />
              ))}
          </div>
      </div>
  )
}

export default App
