import Button from "./Button";
export default function SearchButtons({onClick}){
    return (
        <div>
            <Button value="Mountains" onClick={onClick} />
            <Button value="Beaches" onClick={onClick} />
            <Button value="Birds" onClick={onClick} />
            <Button value="Food" onClick={onClick} />
        </div>
    );
}