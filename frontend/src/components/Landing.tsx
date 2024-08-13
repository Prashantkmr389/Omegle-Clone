import { useState } from "react"
import { Link } from "react-router-dom";

export default function Landing() {
    const [name, setName] = useState("");
    // const history =  = useH
  return (
    <div>
        <input type="text" name="name" id="name" onChange={(e)=>(setName(e.target.value))}  value={name}/>
        <Link to = {`/room/?name=${name}`}>
            Join room
        </Link>
    </div>
  )
}
