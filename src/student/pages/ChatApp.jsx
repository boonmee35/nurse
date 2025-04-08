import { useState } from "react"
import { MoreVertical, Paperclip, Send, Smile } from "lucide-react"

// Avatar component
const Avatar = ({ src, alt, size = "medium", online, children }) => {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-10 w-10",
    large: "h-12 w-12",
  }[size]

  return (
    <div className={`relative ${sizeClasses}`}>
      <div className="h-full w-full rounded-full overflow-hidden bg-gray-200 border-2 border-white">
        {src ? (
          <img src={src || "/placeholder.svg"} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-600 font-medium">{children}</div>
        )}
      </div>
      {online && (
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
      )}
    </div>
  )
}

// Button component
const Button = ({ icon, variant = "default", onClick, children, type = "button" }) => {
  const variantClasses = {
    default: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    icon: "text-gray-500 mr-2 hover:bg-gray-100 rounded-full",
    send: "text-orange-500 hover:text-orange-600 rounded-lg",
  }[variant]

  return (
    <button
      type={type}
      className={`flex items-center justify-center focus:outline-none ${variantClasses}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  )
}

// Message component
const Message = ({ message, isOwn }) => {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "items-start"}`}>
      {!isOwn && <Avatar src={message.avatar} alt={message.sender} size="small" />}
      <div
        className={`max-w-xs rounded-lg p-3 mx-2 ${isOwn ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-800"}`}
      >
        <p className="text-sm">{message.text}</p>
        <div className={`text-xs mt-1 flex justify-between ${isOwn ? "text-orange-100" : "text-gray-500"}`}>
          <span>{message.time}</span>
          {isOwn && message.status && <span className="ml-2">{message.status}</span>}
        </div>
      </div>
    </div>
  )
}

// Contact component
const Contact = ({ contact, isActive, onClick }) => {
  return (
    <div
      className={`flex items-start p-4 cursor-pointer hover:bg-gray-50 ${isActive ? "bg-gray-50" : ""}`}
      onClick={() => onClick(contact.id)}
    >
      <Avatar src={contact.avatar} alt={contact.name} online={contact.isOnline} />
      <div className="ml-3 flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-900 truncate">{contact.name}</h3>
          <span className="text-xs text-gray-500">{contact.time}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1 truncate">{contact.lastMessage}</p>
      </div>
      {contact.hasNotification && (
        <div className="ml-2 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white">1</span>
        </div>
      )}
    </div>
  )
}

// Main ChatApp component
function ChatApp() {
  const [message, setMessage] = useState("")
  const [activeContactId, setActiveContactId] = useState(1)

  // Sample data
  const contacts = [
    {
      id: 1,
      name: "Esther Howard",
      avatar: "/src/assets/avatar6.jpg",
      lastMessage:
        "The passage experienced a surge in popularity during the...",
      time: "8:10 PM",
      hasNotification: false,
      isOnline: true,
    },
    {
      id: 2,
      name: "กฤษณเลิศ อิษฏ์เลิศอิ อิษฏ์เลิศอิ",
      avatar: "/src/assets/lesson.png",
      lastMessage:
        "The passage experienced a surge in popularity during the...",
      time: "8:10 PM",
      hasNotification: true,
      isOnline: false,
    },
    {
      id: 3,
      name: "Savannah Nguyen",
      avatar: "/src/assets/avatar7.jpg",
      lastMessage:
        "The passage experienced a surge in popularity during the...",
      time: "8:10 PM",
      hasNotification: false,
      isOnline: false,
    },
    {
      id: 4,
      name: "กฤษณเลิศ อิษฏ์เลิศอิ อิษฏ์เลิศอิ",
      avatar: "/src/assets/lesson2.png",
      lastMessage:
        "The passage experienced a surge in popularity during the...",
      time: "8:10 PM",
      hasNotification: true,
      isOnline: false,
    },
    {
      id: 5,
      name: "Bessie Cooper",
      avatar: "/src/assets/avatar8.jpg",
      lastMessage:
        "The passage experienced a surge in popularity during the...",
      time: "8:10 PM",
      hasNotification: false,
      isOnline: false,
    },
    {
      id: 6,
      name: "Theresa Webb",
      avatar: "/src/assets/avatar9.jpg",
      lastMessage:
        "The passage experienced a surge in popularity during the...",
      time: "8:10 PM",
      hasNotification: true,
      isOnline: false,
    },
  ];

  const topContacts = [
    { id: 1, avatar: "/src/assets/avatar.jpg" },
    { id: 2, avatar: "/src/assets/avatar2.jpg" },
    { id: 3, avatar: "/src/assets/avatar3.jpg" },
    { id: 4, avatar: "/src/assets/avatar4.jpg" },
    { id: 5, avatar: "/src/assets/avatar5.jpg" },
  ];

  const messages = [
    {
      id: 1,
      text: "The passage experiences a surge",
      sender: "Esther Howard",
      avatar: "/src/assets/avatar6.jpg",
      time: "09:01 PM",
      isOwn: false,
    },
    {
      id: 2,
      text: "Creation ipsum is simply dummy text of the printing and typesetting industry.",
      sender: "Esther Howard",
      avatar: "/src/assets/avatar6.jpg",
      time: "09:01 PM",
      isOwn: false,
    },
    {
      id: 3,
      text: "Creation ipsum is simply dummy text of the printing and typesetting industry.",
      sender: "You",
      time: "09:01 PM",
      isOwn: true,
      status: "Delivered",
    },
    {
      id: 4,
      text: "Creation ipsum is simply dummy text of the printing and typesetting industry.",
      sender: "Esther Howard",
      avatar: "/src/assets/avatar6.jpg",
      time: "09:04 PM",
      isOwn: false,
    },
    {
      id: 5,
      text: "Creation ipsum is simply dummy text of the printing and typesetting industry.",
      sender: "You",
      time: "09:04 PM",
      isOwn: true,
      status: "Delivered",
    },
  ];

  const activeContact = contacts.find((contact) => contact.id === activeContactId)

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      // Here you would typically add the message to your messages array
      // and potentially send it to a backend
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 p-2">
      {/* Left sidebar - Contacts */}
      <div className="w-72 bg-white rounded-lg shadow-sm mr-2 flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-sm font-medium text-gray-700">ผู้ติดต่อ</h2>
          <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
            {topContacts.map((contact) => (
              <Avatar key={contact.id} src={contact.avatar} alt="Contact" size="large" />
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-1 text-right">ผู้ติดต่อ</div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              isActive={contact.id === activeContactId}
              onClick={setActiveContactId}
            />
          ))}
        </div>
      </div>

      {/* Right side - Chat */}
      <div className="flex-1 bg-white rounded-lg shadow-sm flex flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <Avatar
              src={activeContact?.avatar}
              alt={activeContact?.name}
              size="small"
              online={activeContact?.isOnline}
            />
            <div className="ml-3">
              <h3 className="text-sm font-medium">{activeContact?.name}</h3>
              {activeContact?.isOnline && <p className="text-xs text-green-500">Online</p>}
            </div>
          </div>
          <Button
            icon={<MoreVertical className="h-5 w-5" />}
            variant="icon"
            onClick={() => console.log("More options")}
          />
        </div>

        {/* Chat messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} isOwn={msg.isOwn} />
          ))}
        </div>

        {/* Message input */}
        <form className="p-4 border-t flex items-center" onSubmit={handleSendMessage}>
          <Button icon={<Paperclip className="h-5 w-5" />} variant="icon" className="w-10 h-10" />
          <input
            type="text"
            className="flex-1 mx-2 p-2 bg-gray-50 rounded-md border-0 focus:ring-0 focus:outline-none"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button icon={<Smile className="h-5 w-5" />} variant="icon" className="w-10 h-10" />
          <Button icon={<Send className="h-6 w-6" />} variant="send" type="submit" className="w-25 h-20 ml-2" />
        </form>
      </div>
    </div>
  )
}

export default ChatApp
