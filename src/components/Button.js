export default function Button({value, onClick}){
    return(
        <>
            <button className="picbuttons" onClick={onClick}>{value}</button>
        </>
    );
}