import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import BarChart from "./Activity/BarChart.jsx"; // Adjust the path accordingly

const API_KEY =
  "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";
function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT!",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);
  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    //generate newMessages queue, which contain all old + new in the end
    const newMessages = [...messages, newMessage];
    //update our messages state
    setMessages(newMessages);
    // set a typing indicator(chatgpt is typing)
    setTyping(true);
    // process message to chatGPT
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // what we have:
    // chatMessages{sender:"user" or "ChatGPT", message:"content"}
    //what gpt can accept:
    // apiMessages{role:"user" or "assistant", content:"content"}
    // so we need to transform the messages.
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });
    //role:"user" -> a message from user, "assistant" -> a response from chatGPT
    //"system" -> generally one initial message defining how we want gpt to talk
    const systemMessage = {
      role: "system",
      content: "Explain all concepts like a dog.",
    };
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        // console.log(data.choices[0].message.content);
        // setMessages([
        //   ...chatMessages,
        //   {
        //     message: data.choices[0].message.content,
        //     sender: "ChatGPT"
        //   }
        // ]);
        // setTyping(false);
        console.log("here is 90 line");
      });
  }
  //barchart
  const [showChart, setShowChart] = useState(false); // State to toggle the chart
  const toggleChart = () => {
    setShowChart((prev) => !prev); // Toggle the chart visibility
  };
  return (
    <div className="App">
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* test of env */}
          {/* <console className="log"> test sz</console> */}
          <ChatContainer
            style={{ width: "700px", height: "800px", marginTop: "10px" }}
          >
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                typing ? <TypingIndicator content="ChatGPT is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="Type message here."
              onSend={handleSend}
            />
          </ChatContainer>
          <button onClick={toggleChart} style={{ marginTop: "10px" }}>
            Chat History
          </button>

          {showChart && (
            <div style={{ marginTop: "10px", width: "700px", height: "800px" }}>
              <BarChart />
            </div>
          )}
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
