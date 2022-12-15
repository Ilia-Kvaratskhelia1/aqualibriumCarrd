// import  './cristaImage';
import './App.css';
import Cr from './CristalImage';
import Description from './Description.js'
import Avatar from './Avatar.js'

function App() {
  return (
    <div >
      <div className='mainContainer'>
                <Cr/>
                <Description/>
                <Avatar/>
       </div>
       <div  className='TextArea'></div>
    </div>
    
  );
}

   
export default App;
