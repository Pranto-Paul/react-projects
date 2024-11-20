import React,{useState,useCallback, useEffect,useRef} from "react";

const App = () => {
  const [length, setlength] = useState(8)
  const [num, setnum] = useState(false)
  const [char, setchar] = useState(false)
  const [pass, setpass] = useState("")
  const passRef = useRef(null)
  const generatePassword = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str += "0123456789"
    if(char) str += "!@#$%^&*()"
    let pass = ""

    for(let i=0 ; i<length ; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setpass(pass)
  },[num, char, length])
  useEffect(()=>{
    generatePassword()
  },[generatePassword])
  const handleCopy=()=>{
    passRef.current.select()
    navigator.clipboard.writeText(passRef.current.value)
  }
  return (
    <div className=" m-auto flex justify-center  items-center flex-col p-5">
      <div className="max-w-md p-2 bg-slate-600 shadow-md rounded-lg">
        <div className="flex items-center bg-transparent py-2">
          <input
            className="w-full px-3 py-2 rounded-l-md outline-none border-none"
            type="text"
            ref={passRef}
            placeholder="password"
            name=""
            value={pass}
            readOnly
            id=""
          />
          <button className="bg-blue-600 hover:bg-blue-900 px-3 py-2 rounded-r-md" onClick={handleCopy} >
            Copy
          </button>
        </div>
        <div className="flex items-center justify-between bg-transparent gap-x-2">
          <div className="bg-transparent flex items-center">
            <label htmlFor="" className="bg-transparent">
              Length:
            </label>
            <input
              className="cursor-pointer"
              type="range"
              name=""
              min={8}
              max={99}
              value={length}
              onChange={(e) => setlength(e.target.value)}
              id=""
            />
            <span className="bg-transparent cursor-pointer">{length}</span>
          </div>
          <div className="bg-transparent">
            <input value={num} onChange={(e)=> setnum(e.target.checked)} className="cursor-pointer" type="checkbox" name="" id="" />
            <label className="bg-transparent cursor-pointer" htmlFor="">
              Number
            </label>
          </div>
          <div className="bg-transparent">
            <input value={char} onChange={(e)=> setchar(e.target.checked)} className="cursor-pointer" type="checkbox" name="" id="" />
            <label className="bg-transparent cursor-pointer" htmlFor="">
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
