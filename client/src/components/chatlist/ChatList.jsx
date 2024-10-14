import { Link } from 'react-router-dom';
import './chatlist.css'

const ChatList = () => {
  return (
    <div className='chatList'>
      <span className='title'>DASHBOARD</span>
      <Link to="/dashboard">New Chat</Link>
      <Link to="/">Explore</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className='title'>RECENT CHATS</span>
      <div className="list">
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link> 
      </div>
      <hr />
      <div className="copyright">
        <img src="/logo.png" alt="" />
        <div className="text">
          <span>&copy;kevin</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList;