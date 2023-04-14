import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
    //   console.log("uppercase was clicked"+ text)
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase","success")
    }

    const handleLowClick=()=>{
          let newText = text.toLowerCase();
          setText(newText)
          props.showAlert("Converted to lowercase","success")
        }

    const handleClear=()=>{
        let newText = ' ';
        setText(newText)
        props.showAlert("Text has been cleared","success")
        }

    const handleCopy=()=>{
       var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success")
        }
    
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success")
    }    

    const handleOnChange=(event)=>{
        // console.log("uppercase was clicked")  //no need to console
        setText(event.target.value)
      }
   
    const[text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>{props.heading}</h2>
   <div className="mb-3">

   <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
  color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea> 

</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-secondary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
<button className="btn btn-success  mx-2" onClick={handleClear}>Clear</button>
<button className="btn btn-danger  mx-2" onClick={handleCopy}>Copy</button>
<button className="btn btn-warning  mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary.</h2>
    <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
    <p><b>{0.008 * text.split(" ").length} Minutes</b></p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
    </div>
</>
  )
}

//onChange event isilie lagaya taake text ko likh paayen