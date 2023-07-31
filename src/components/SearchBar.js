import { useState, useEffect } from "react";
import searchLogo from "../images/search.png";
import Button from "./Button";
import ImagesUpdate from "./ImagesUpdate";
import axios from "axios";
import SearchButtons from "./SearchButtons";

export default function SearchBar(){

    const [item, setItem] = useState('Mountains');
    const [images, setImages] = useState();

    useEffect(() => {
        goSearch('Mountains');
      }, []);


    const handleonClick =(e)=>{
        setItem(e.target.innerText);
        goSearch(e.target.innerText);
    }

    const handleSearchIcon =(e)=>{
        const a = document.getElementById("Searchinput").value;
        setItem(a);
        goSearch(a);
    }

    function goSearch(searchtext){
        const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
        axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchtext}&per_page=24&format=json&nojsoncallback=1`
              )
              .then(response => {
                setImages(response.data.photos.photo);
                console.log(item);
              })
              .catch(error => {
                console.log(
                  "Encountered an error with fetching and parsing data",
                  error
                );
              });
    }

    return(
        <div>
            <div className="Searchbox">
            <input id ="Searchinput" type="text" placeholder="Search..." className="bar" />
            <button className="imgbox" type="submit" onClick={handleSearchIcon}><img src={searchLogo} className="imgsrch" /></button>
            </div>
            <SearchButtons onClick = {handleonClick} />
            <h3 className="App-header">{item}</h3>            
            <div className="imageContainer">
                <ImagesUpdate data = {images} />
            </div>
        </div>
    );
}