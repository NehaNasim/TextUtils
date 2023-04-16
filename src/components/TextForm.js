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
    <h2 className='mb-3'>{props.heading}</h2>
   <div className="mb-3">

   <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
  color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea> 

</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-success  mx-2 my-2" onClick={handleClear}>Clear</button>
<button disabled={text.length===0} className="btn btn-danger  mx-2 my-2" onClick={handleCopy}>Copy</button>
<button disabled={text.length===0} className="btn btn-warning  mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary.</h2>
    <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</b></p>
    <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</b></p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
</>
  )
}

//onChange event isilie lagaya taake text ko likh paayen