import { FC } from "react";
import Message from "../Message";

interface ChatHistoryProps {
  chatHistory: { timeStamp: any; data: string }[];
}

const ChatHistory: FC<ChatHistoryProps> = ({ chatHistory }) => {
  return (
    <div className="text-center py-4">
      <h2 className="text-white font-medium text-2xl tracking-widest mb-4">
        Chat History
      </h2>
      {chatHistory.map((msg) => {
        return <Message key={msg.timeStamp} message={msg.data} />;
      })}
      <Message message='{"message":{"body":"Hello!"}}' />
    </div>
  );
};

export default ChatHistory;
