import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';




function App() {
  // js code
  const [Principle,setPrinciple]=useState(0);
  const [Interest,setInterest]= useState(0);
  const [Rate,setRate]=useState(0);
  const [Year,setYear]=useState(0);
  const [isPrinciple, setIsPrinciple]=useState(true);
  const [isRate,setIsRate]=useState(0)
  const [isYear,setIsYear]=useState(0)



  

  const handleSubmit= (e) =>{
    e.preventDefault();
    console.log("===principle amount====");
    console.log(Principle);
    console.log("===rate of interest====");
    console.log(Rate);
    console.log("===year====");
    console.log(Year);

    let result = Principle*Year*Rate/100;
    console.log(result);
    setInterest(result)
  }
  function clearValues(){
    setPrinciple(0);
    setInterest(0);
    setRate(0);
    setYear(0);
  }

  const validate=(e)=>{
    const {value,name} = e.target
    console.log(name);
    //regular expression : to check whether a given string has particular pattern\
    //should have forward slash at the begining and ending
    //start of the expression is indicated by ^
    //ending of the expression is indicated by $
    if (!!value.match(/^[0-9]+$/)) {
      if(name === 'principle'){
      setPrinciple(value);
      setIsPrinciple(true)
    }
    else if(name === 'rate'){
      setRate(value);
      setIsRate(true)
    }
    else if(name === 'year'){
      setYear(value);
      setIsYear(true)
    }
    
  }
    else{
      if (name === 'principle'){
      setPrinciple(value);
      setIsPrinciple(false)
    }
    else if(name === 'rate'){
      setRate(value);
      setIsRate(false)
    }
    else if(name === 'year'){
      setYear(value);
      setIsYear(false)
    }
  }
}




  return (
    <div className="d-flex justify-content-center align-items-center w-100 mt-5" style={{ height: "70vh" }} >
      <div className="bg-light p-5 rounded text-center mt-5" style={{ width: "500px" }}>
        <h3>SIMPLE INTEREST</h3>
        <p>Calculate Your Simple Interest Easily</p>
        <div className=" flex-column mt-5 bg-warning d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
          <h1>{'\u20B9'}{Interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form action="" className='mt-5' onSubmit={(e)=>handleSubmit(e)}>
          <div className='mb-4 border'>
            <TextField name="principle" id="outlined-basic" label="Principle Amount" variant="outlined" className="w-100" value={Principle}
            onChange={(e)=>validate(e)}/>
            {!isPrinciple &&
            <div>
            <p className='text-danger'>Invalid input</p>
          </div>
            }
            
          </div>
          <div className='mb-4'>
            <TextField name="rate" id="outlined-basic" label="Rate Of Interest(pa)%" variant="outlined" className="w-100" value={Rate}
            onChange={(e)=>validate(e)} />
            {!isRate &&
            <div>
            <p className='text-danger'>Invalid input</p>
          </div>
            }
          </div>
          <div className='mb-4 '>
            <TextField id="outlined-basic" label="Year(yr)" variant="outlined" className="w-100 border-warning" value={Year}
            onChange={(e)=>validate(e)}/>
            {!isYear &&
            <div>
            <p className='text-danger'>Invalid input</p>
          </div>
            }
          </div>
          <div className='mb-4 d-flex justify-content-center '>
            <Stack direction="row" spacing={2}>
              <Button disabled={!isPrinciple || !isRate || !isYear}  type='submit' className='bg-success px-4 py-2' variant="contained">Calculate</Button>
              <Button onClick={clearValues} className='border-danger text-danger' variant="outlined">Reset</Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
