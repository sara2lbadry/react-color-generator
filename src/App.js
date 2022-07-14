import React, {useState} from "react";
import SingleColor from './SingleColor'
import Values from 'values.js'
function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

const handleSubmit = (e)=> {
  e.preventDefault();
  
}
  return (
    <section className="container">
      <h2>color generator</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value = {color} onChange = {(e) => setColor(e.target.value)} placeholder="#ffffff"/>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
    
  );
}

export default App;
