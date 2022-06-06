import { FC, useEffect, useState } from "react";

interface State {
  message: { body: any };
}

interface MessageProps {
  message: string;
}

const Message: FC<MessageProps> = ({ message }) => {
  const [state, setState] = useState<State>(JSON.parse(message));
  return (
    <div className="bg-black text-white shadow-lg p-3 rounded-sm">
      {state.message.body}
    </div>
  );
};

export default Message;
