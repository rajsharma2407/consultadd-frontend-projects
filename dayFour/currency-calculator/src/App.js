import './App.css';
import SelectBar from './components/SelectBarj';
import axios from 'axios';
import {useState, useEffect} from 'react'
import InputBar from './components/InputBar';
import Spinner from './components/Spinner';

function App() {
  const [data, setData] = useState(null);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('INR');
  useEffect(() =>{
    const fetchData =  async () => {
      // console.log("reached 1")
      try{
        let value = await axios.get('https://api.apilayer.com/exchangerates_data/symbols', {
          headers:{
            "apikey":"jNZCgLT7pSN4ljNUeV2PpQ8H1nEQpzkL"
          }
        });
        setData(value.data.symbols);
        console.log(data)
      }catch(err){
        console.log(err)
      }
      // setData("raj")
    }
    fetchData();
  },[]);
  const myStyles = {
    width:'60%',
    margin:'auto',
    display:'flex',
    justifyContent:'space-between',
    marginTop:'100px'
  }

  const divStyle = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    height:'100px'
  }

  const evaluate = async (e) =>{
    console.log(e.target,value1, value2);
    console.log(fromCurrency, toCurrency)
    let result = await axios(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${value1}`,
    {
      headers:{
        "apikey":"jNZCgLT7pSN4ljNUeV2PpQ8H1nEQpzkL"
      }
    })
    console.log(result)
    setValue2(result.data.result)
  }
  const btnStyle = {
    width: '200px',
    fontSize:'1em',
    padding:'10px',
    borderRadius:'8px',
    outline:'none',
    border:'0.5px solid gray',
    cursor:'pointer',
    color:'green'
  }
  return (
<>
    {data?
      <div className="App">
      <div style={myStyles}>
          <div style={divStyle}>
            <SelectBar data={data} setCurrency={setFromCurrency}/>
            <InputBar setValue={setValue1} value={value1} placeholder="input"/>
          </div>
          <div style={divStyle}>
            <SelectBar data={data} setCurrency={setToCurrency}/>
            <InputBar setValue={setValue2} value={value2} placeholder="output"/>
          </div>
      </div>
          <button onClick={evaluate} style={btnStyle}> Convert </button>
    </div>
    :<Spinner />}
    </>
  );
}

export default App;
