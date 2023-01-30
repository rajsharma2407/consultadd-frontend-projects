import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Table from './components/Table';

function App() {
  const [data, setData] = useState();
  const [sortingType, setSortingType] = useState();
  useEffect(()=>{
    fetch('https://bitbucket.org/bitbucket-learning/bdaysort/raw/80df8eec2c59aaba8576e54110c921b4ff29cd97/birthday.json').then(
      res=>
      {
        return (res.json())
        // setData(res.data)
      }).then(res=>{
        console.log(res)
        setData(res)
      })
  },[])

  function sortData(){
    if(!sortingType){
      return alert("Select Ascending/Descending to continue");
    }
    let val = [...data];
    let mul = 1;
    if(sortingType == "DES"){
      mul = -1;
    }
    val.sort((a, b)=>{
      let date1 = new Date(a.dob);
      let date2 = new Date(b.dob);
      if(date1 < date2){
        return 1*mul;
      }else{
        return -1*mul;
      }
    })
    setData(val);
  }
  return (
    <div className="App">
<div>
  {data?<Table data={data} key={data}/>:''}
  {console.log(data)}
      <div style={{margin:'20px auto', width:'200px'}}>
      <div>
        Ascending
        <input type="radio" name='select' onClick={()=>setSortingType("ASC")}/>
        <input type="radio" name='select' onClick={()=>setSortingType("DES")}/>
        Descending
        </div>
        <button onClick={sortData}>Sort</button>
        </div>
      </div>

    </div>
  );
}

export default App;
