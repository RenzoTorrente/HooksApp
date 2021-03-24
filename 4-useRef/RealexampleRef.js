import '../UseEfect/effect.css';
import MultiplesHooks from '../examples/MultiplesHooks'
import { useState } from 'react';
function RealExampleRef(){
const [show, setshow] = useState(false);
    return (
      <>
      <h1>Real example Ref</h1>
      <hr/>
      {show && <MultiplesHooks/> }
      
      <button className="btn btn-primary mt-4" onClick={() =>{
          setshow(!show);
      }}>Show / Hide</button>
      </>
    );
}
export default RealExampleRef;