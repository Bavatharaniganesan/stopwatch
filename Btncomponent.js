import React from 'react';
import './Btncomponent.css';

function Btncomponent(props) {
  return (
    <div>
      {(props.status === 0) ?
        <button className="btn-1"
          onClick={props.start}>Start</button> : ""
      }
      {(props.status === 1) ?
        <div>
          <button className="btn-3"
            onClick={props.stop}>Stop</button>
          <button className="btn-2"
            onClick={props.reset}>Reset</button>
        </div> : ""
      }

      {(props.status === 2) ?
        <div>
          <button className="btn-3"
            onClick={props.resume}>Resume</button>
          <button className="btn-2"
            onClick={props.reset}>Reset</button>
        </div> : ""
      }


    </div>
  );
}

export default Btncomponent;
