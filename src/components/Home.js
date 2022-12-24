import React,{useState} from 'react'


function Home(props) {
  const [count,setCount] = useState('')
let upclick=()=>{
  let newText = count.toUpperCase()
  setCount(newText)
}

let downclick=()=>{
  let newText = count.toLowerCase()
  setCount(newText)
}
let Copy=()=>{
  let text = document.getElementById('mytext')
  text.select();
  navigator.clipboard.writeText(text.value)
}
let Cleartext=()=>{
 let newText = ''
 setCount(newText);
 props.showAlert('text cleared','success');
}
let arrangetext=()=>{
  let newText = count.split(/[ ]+/)
  setCount(newText.join(" "))
 }


const handleOnChange=(event)=>{
 setCount(event.target.value)
}

  return (
<>
<div className="mb-3 mx-5 mt-3" style={{color:props.mode==='light'?'black':'white'}} >
<label htmlFor="mytext" className="form-label"><h3>Enter your text here</h3></label>
  <textarea className="form-control" value={count} onChange={handleOnChange} id="mytext" rows="10"></textarea><br/>
  <button className="btn btn-primary" onClick={upclick}>Convert to Uppercase</button>
  <button className="btn btn-primary  mx-1 my-1" onClick={downclick}>Convert to Lowercase</button>
  <button className="btn btn-primary  mx-1 my-1" onClick={Copy}>Copy Text</button>
  <button className="btn btn-primary  mx-1 my-1" onClick={Cleartext}>Clear</button>
  <button className="btn btn-primary  mx-1 my-1" onClick={arrangetext}>Arrange Text</button>
</div>


<div className="container mx-4" style={{color:props.mode==='light'?'black':'white'}}>
<br/>
<h3>Additional Info</h3>
<p> 
  {count.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {count.length} characters.
  </p>
  <p>
  {0.008 * count.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes would be required to read this paragraph.
</p>

  </div>
  </>
  )
}

export default Home
