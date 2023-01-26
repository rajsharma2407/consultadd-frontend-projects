const InputBar = ({setValue, value, placeholder}) =>{
    // const {setValue, value} = props;
    // const changeVal = (e) =>{
    //     setValue(e.targetValue)
    //     console.log(e.target.value, setValue)
    // }
    const inputStyles = {
        fontSize:'1em',
        padding:'10px',
        borderRadius:'8px',
        outline:'none',
        border:'0.5px solid gray'
    }
    return (
        <>
            <input type="number" onChange={(e)=>setValue(e.target.value)} style={inputStyles} value={value} placeholder={placeholder}/>
        </>
    )
}

export default InputBar;