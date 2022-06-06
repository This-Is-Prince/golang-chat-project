import { useEffect, useState } from "react";
import { connect } from "./api";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header";

interface State {
  chatHistory: any[];
}

const App = () => {
  const [state, setState] = useState<State>({ chatHistory: [] });
  useEffect(() => {
    connect((msg: any) => {
      console.log("New Message");
      setState({ chatHistory: [...state.chatHistory, msg] });
      console.log(state);
    });
  }, []);
  return (
    <div className="bg-red-500">
      <Header />
      <ChatHistory chatHistory={state.chatHistory} />
      <ChatInput />
    </div>
  );
};

export default App;
