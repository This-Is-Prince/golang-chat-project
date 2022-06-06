import { FC } from "react";
import { ChatInputType } from "../../types";

const ChatInput: FC<ChatInputType> = () => {
  return (
    <div className="flex justify-center p-2">
      <input
        type="text"
        className="rounded-md p-2 max-w-md w-full bg-black text-white outline-none tracking-widest"
        placeholder="Type a message.... Hit Enter to send"
      />
    </div>
  );
};

export default ChatInput;
