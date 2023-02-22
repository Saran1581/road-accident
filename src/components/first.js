import React, { useState } from "react";
import './first.css'
const FirstApp = () => {
    const [name , setName] = useState('');
    const [nameError, setnameError] = useState(true);

    return(
        <div>
            <form className="form2">
            <input
            type="text"
            value={name}
            onChange={(e) => {
              if (e.target.value != "") {
                setnameError(false);
              } else if (e.target.value == "") {
                setnameError(true);
                
              }
              setName(e.target.value);
            }}
            placeholder="username"
            className="input2"
          />
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => {
              if (e.target.value != "") {
                setnameError(false);
              } else if (e.target.value == "") {
                setnameError(true);
                
              }
              setName(e.target.value);
            }}
            placeholder="username"
            className="input2"
          />
          <br /> <input
            type="text"
            value={name}
            onChange={(e) => {
              if (e.target.value != "") {
                setnameError(false);
              } else if (e.target.value == "") {
                setnameError(true);
                
              }
              setName(e.target.value);
            }}
            placeholder="username"
            className="input2"
          />
          <br /> <input
            type="text"
            value={name}
            onChange={(e) => {
              if (e.target.value != "") {
                setnameError(false);
              } else if (e.target.value == "") {
                setnameError(true);
                
              }
              setName(e.target.value);
            }}
            placeholder="username"
            className="input2"
          />
          <br /> <input
            type="text"
            value={name}
            onChange={(e) => {
              if (e.target.value != "") {
                setnameError(false);
              } else if (e.target.value == "") {
                setnameError(true);
                
              }
              setName(e.target.value);
            }}
            placeholder="username"
            className="input2"
          />
          <br /> <input
            type="text"
            value={name}
            onChange={(e) => {
              if (e.target.value != "") {
                setnameError(false);
              } else if (e.target.value == "") {
                setnameError(true);
                
              }
              setName(e.target.value);
            }}
            placeholder="username"
            className="input2"
          />
          <br /> <input
            type="text"
            value={name}
            onChange={(e) => {
              if (e.target.value != "") {
                setnameError(false);
              } else if (e.target.value == "") {
                setnameError(true);
                
              }
              setName(e.target.value);
            }}
            placeholder="username"
            className="input2"
          />
          <br /> <input
            type="text"
            value={name}
            onChange={(e) => {
              if (e.target.value != "") {
                setnameError(false);
              } else if (e.target.value == "") {
                setnameError(true);
                
              }
              setName(e.target.value);
            }}
            placeholder="username"
            className="input2"
          />
          <br />
            </form>
        </div>
    );
};


export default FirstApp;

