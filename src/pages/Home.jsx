import { useState } from "react"

const USER_PASS = "querty"

function Home(){
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <>
        <h1>HOME PAGE</h1>
        
        
        <form>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="text" placeholder="enter password"/>
            <button type="submit">ENTER</button>

        </form>
        
        
        
        </>
    )
}


export default Home