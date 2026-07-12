import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import "./ChatBox.css";
import api from "../services/api";

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! Describe your HCP interaction and I'll summarize it.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

 const handleSend = async () => {

  if (!input.trim()) return;

  const userMessage = {
    sender: "user",
    text: input,
  };

  setMessages((prev) => [...prev, userMessage]);

  try {
    setLoading(true);
    const res = await api.post("/ai/chat", {
      message: input,
    });

    const aiMessage = {
      sender: "ai",
      text: res.data.response,
    };

    setMessages((prev) => [...prev, aiMessage]);

  } catch (err) {

    const aiMessage = {
      sender: "ai",
      text: "Error communicating with AI.",
    };

    setMessages((prev) => [...prev, aiMessage]);

    console.error(err);
  }finally {
  setLoading(false);
  setInput("");
  }
};

  return (
    <Card className="chat-card " sx={{height: "100%"}}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" sx={{mb:2}}>
          AI Assistant
        </Typography>

        <div className="chat-window">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "user" ? "user-msg" : "ai-msg"}`}
            >
              <div className="sender">
                {msg.sender === "user" ? "👤 You" : "🤖 AI"}
              </div>
              <div className="text">
              {msg.text}
              </div>
            </div>
          ))}
        </div>

        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Describe your interaction..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ mt: 2 }}
        />

        {loading && (
       <div
         style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
          gap: 10,
          }}
         >
      <CircularProgress size={24} />
      <Typography variant="body2">
      Generating AI response...
      </Typography>
   </div>
      )}

        <Button
          variant="contained"
          fullWidth
          endIcon={<SendIcon />}
          disableElevation
          disabled={loading}
          onClick={handleSend}
          sx={{ mt: 2 ,
                height: 50,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: "bold",
          }}
        >
          {loading ? "Generating..." : "Ask AI"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ChatBox;