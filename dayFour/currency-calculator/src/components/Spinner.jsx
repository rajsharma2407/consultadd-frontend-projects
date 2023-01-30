import './Spinner.css'

const Spinner = () =>{
    const bodyDiv = {
        position:'absolute',
        left:'50%',
        top:'50%',
        transform:'translate(-50%, -50%)'
    }
    return (
        <div style={bodyDiv}>
        <div id="element">
            loading..
        </div>
        </div>
        )
};

export default Spinner;