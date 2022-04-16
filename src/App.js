import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [valueA,setValueA] = useState(0);
  const [valueB,setValueB] = useState(0);

  const [operations,setOperations] = useState('+');
  const [result,setResult] = useState(0);
  
  const handleSubmit = () => {
    if(operations==='+'){
      setResult(parseInt(valueA)+parseInt(valueB));
    }
  
    if(operations==='*'){
    setResult(valueA*valueB);
    }
  
    if(operations==='-'){
    setResult(valueA-valueB);
    }
  
    if(operations==='/'){
    setResult(valueA/valueB);
    }
  }
  return (
    <div>
    <div className='app'>
      <h2>Calculator app</h2>
      <h3 >Result: {result}</h3>
      <div>
        <input type="text" className="form-control col-4" value={valueA} onChange={(e)=>setValueA(e.target.value)}></input><br/>
        <h1 styles={{marginLeft:'40%'}}>{operations}</h1>
        <input type="text" className="form-control col-4" value={valueB} onChange={(e)=>setValueB(e.target.value)}></input><br/>
        <button styles={{marginLeft:'10%'}} onClick={handleSubmit} className="btn btn-info" >Calculate</button>
      </div>
      <div>
        <button onClick={()=>setOperations('+')} className="btn btn-primary " >+</button>
        <button onClick={()=>setOperations('-')} className="btn btn-primary" >-</button>
        <button onClick={()=>setOperations('*')} className="btn btn-primary" >*</button>
        <button onClick={()=>setOperations('/')} className="btn btn-primary" >/</button>
      </div>
    </div>
    </div>
  )
}

export default App;
