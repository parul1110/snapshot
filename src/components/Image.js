export default function Image({url, alt}){
    return (
        <>
        <img className="singleImg" src={url} alt = {alt}></img>
        </>
    );
}