import { useState } from "react"
import { Chat } from "../Chat"


export const AoVivo = () => {
    const [socket, setSocket] = useState(null)

    
    return (
        <Chat socket={socket}/>
    )
}