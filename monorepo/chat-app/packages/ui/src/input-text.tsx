
interface PropType {
    placeHolder : string
}

export function TextInput({placeHolder} : PropType) {
    return <div>
        <input style={{
            padding : 10, 
            margin : 10,
            borderColor : "black",
            borderWidth : 1
        }} type="text" placeholder={placeHolder} />

    </div>
}