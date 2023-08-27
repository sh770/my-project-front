import axios from 'axios'
import { useEffect, useState } from 'react'

const MessagesBoxScreen = () => {
    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        const fecthData = async () => {
            const result = await axios.get("http://127.0.0.1:8000/api/received-messages/")
            console.log(result.data)
            setMessages(result.data)
        };

    fecthData();
    }
    ,[])
      
    
  return (
    <div>
        {messages.map((message, id) => (
            <div key={id}>
            <h2>{message.id}</h2>
            <h2>{message.subject}</h2>
            <h2>{message.content}</h2>
            <h2>{message.creation_date.substring(0, 10)}</h2>
            <h2>{message.sender}</h2>
            <h2>{message.receiver}</h2>
          </div>
        ))}
    </div>
  )
}

export default MessagesBoxScreen