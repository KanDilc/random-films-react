import "./Main.css";
import { initRangeOutputs } from './random.js';
import React, { useState,useEffect } from 'react';

const Main = () => {
    
    useEffect(() => {
        initRangeOutputs();
      }, []);

      const [quantity, setQuantity] = useState(1);

      const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
      };

    return ( 
        <main className="choise">
        <div className="container">
          <div className="choise__quantity">
            <h2 className="quantity__text">How many movies?</h2>
            <label for="quantity__films">
                  <input
                    type="number"
                    min="1"
                    max="80"
                    step="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="quantity__films__input"
                  />
            </label>
          </div>

          <div className="choise__genre">
            <h2 className="genre__text">Genre</h2>
            <select className="genre">
              <option value="option1">Horror</option>
              <option value="option2">Comedy</option>
              <option value="option3">Action</option>
              <option value="option4">Drama</option>
              <option value="option5">Fantasy</option>
              <option value="option6">Mystery</option>
              <option value="option7">Romance</option>
              <option value="option7">Thriller</option>
              <option value="option7">Western</option>
              <option value="option8">Anime</option>
            </select>
          </div>

          <div className="choise__decade">
            <h2 className="decade__text">Decade</h2>
            <select className="decade">
              <option value="option1">1960-1969</option>
              <option value="option2">1970-1979</option>
              <option value="option3">1980-1989</option>
              <option value="option4">1990-1999</option>
              <option value="option5">2000-2009</option>
              <option value="option6">2010-2019</option>
              <option value="option7">2020-...</option>
            </select>
          </div>

          <div className="choise__country">
            <h2 className="country__text">Country</h2>
            <select className="country">
              <option value="option1">Russia</option>
              <option value="option2">Spain</option>
              <option value="option3">America</option>
              <option value="option4">USSR</option>
              <option value="option5">German</option>
              <option value="option6">Italy</option>
              <option value="option7">Chinese</option>
              <option value="option7">UK</option>
              <option value="option7">Japan</option>
              <option value="option8">India</option>
            </select>
          </div>

          <div className="choise__rate">
            <h2>Rating from</h2>
            <label for="range">
              <input type="range" id="range" min="1.0" max="10.0" step="0.1" />
              <output id="output-1">10</output>
            </label>
          </div>

          <div className="choise__runtime">
            <h2>Runtime max</h2>
            <label for="range">
              <input type="range" id="range_2" min="10" max="240" step="10" />
              <output id="output-2">50</output>
            </label>
          </div>
          
        </div>
        
        </main>
      

     );
}

export default Main;