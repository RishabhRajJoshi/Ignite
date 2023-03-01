import { useState } from 'react';
import Color from 'color';
import Data from './data/quotes(CSV).json';


function Reader() {

const [quote ,setQuote ] = useState('Ignite: A new way of getting inspired ');
const [author ,setAuthor ] = useState('Tap to get inspired ');
const [bgcolor ,setBgcolor ] = useState(['#2c2c2c', 'white']);
 



// setQuotes(Data);
            
function newColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var color = Color("#" + randomColor);
  var lightencolor = color.saturate(0.9);
  var whitencolor = lightencolor.lighten(0.7).lightness(70);
  var colorCode = whitencolor.hex();
  var textColor = "#ffff";
  // console.log(whitencolor.isDark)
  if (whitencolor.isDark() ) {
     textColor = "#fffdff";
  }
  else
  {
     textColor = "#4c4c4c"
  }
  
  setBgcolor([colorCode,textColor]);
  
}    




function handleclick(e) {
  var index = Math.floor(Math.random() * 41716);
   newColor();
  e.preventDefault();

  // console.log(Data.results[index]);
  // console.log(index);
  setQuote(Data.results[index].quote);
  const author = Data.results[index].author;
 setAuthor(author);
}




   

  return (
    <div  style={{"backgroundColor" : bgcolor[0],"color" : bgcolor[1] }} onClick={handleclick}   className=' transition-all duration-300 flex justify-center items-center h-screen'>
    <div className=' w-60 font-mono'>
    <h1 className=' text-center  '>{quote}</h1>
    <br />
    <p className='pt-4 text-center'>- {author}</p>
   
    </div>
    
    

    </div>
  )
}

export default Reader;