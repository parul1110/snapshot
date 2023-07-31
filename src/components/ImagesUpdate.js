import Image from "./Image";
export default function ImagesUpdate({data}){
    const results = data;
    let images;
    if (results && results.length > 0) {
        images = results.map(image => {
        let url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
        return <Image url={url} key={image.id} alt={image.title} />;
        });
    }
    return(
        <div>
            {images}
            {results && results.length===0 && <p>No images!</p>}
        </div>
    );
}