import { FC } from "react";
import { ChatInputType } from "../../types";

const ChatInput: FC<ChatInputType> = () => {
  return (
    <div className="">
      <input type="text" placeholder="Type a message.... Hit Enter to send" />
    </div>
  );
};

export default ChatInput;
