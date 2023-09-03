import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { Store } from "../Store";
import ListMessages from "../components/ListMessages";


const MessagesBoxScreen = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [messages, setMessages] = useState([]);
  const urlWithProxy = "/api/";


  useEffect(() => {
    const fecthData = async () => {
      const result = await axios.get(
        `${urlWithProxy}/received-messages/`,
        // after adding authentication and signing in
        {
          headers: { Authorization: `Bearer ${userInfo.access}` },
        }
      );
      console.log(result.data);
      setMessages(result.data);
    };

    fecthData();
  }, [userInfo.access]);

  return (
    <div>
      {messages.map((message, id) => (
        <ListMessages key={id} message={message} />
      ))}
    </div>
  );
};

export default MessagesBoxScreen;
