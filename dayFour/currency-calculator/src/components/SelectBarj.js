import { useEffect } from 'react';
import './SelectBar.css'

const SelectBar = (props,) =>{
    let items = Object.keys(props.data);
    console.log(items)
    function callFunc(x){
        console.log(x)
    }
    const selectStyle = {
        width: '200px',
        fontSize:'1em',
        padding:'10px',
        borderRadius:'8px',
        outline:'none',
        border:'0.5px solid gray'
    }
    return (
        <>

            <select onChange={(e)=>{props.setCurrency(e.target.value)}} defaultValue="INR"style={selectStyle}>
                {items.map((itm, index)=>{
                    return <option value={itm} key={index}>
                        {props.data[itm]}
                        </option>
                })}
            </select>
        </>
    )
}

export default SelectBar;