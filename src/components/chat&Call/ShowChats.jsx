import Chat from "../../components/chat&Call/chat/Chat";

function ShowChats() {
  return (
    <div>
      <div className="w-full min-h-[calc(100vh-250px)]">
        <div className="flex justify-between gap-2">
          {/* your patner chats */}
          <div className="bg-red-300  w-full">asdfsdf</div>
          {/* your  chats */}
          <div className="bg-red-500   w-full">asdfasdf</div>
        </div>
      </div>
      {/* chat input and send button */}
      <Chat />
    </div>
  );
}

export default ShowChats;
