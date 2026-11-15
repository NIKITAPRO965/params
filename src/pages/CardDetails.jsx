import { useLocation, useNavigate } from "react-router-dom"



function CardDetails(){
    const navigate = useNavigate()
    const location = useLocation()
    const card = location.state


    return(<>
    
    <h1>CardDetails page</h1>
    <button onClick={()=> navigate(-1)} className="arrow-btn" type="button">BACK</button>
    <div className="box-box">
                <h2>Name: {card.name}</h2>
                <p>Age: {card.age}</p>
                <p>Email: {card.email}</p>
                <p>City: {card.city}</p>
                <p>Status: {card.isActive ? "Online": "Ofline"}</p>
    </div>
    </>)
}


export default CardDetails