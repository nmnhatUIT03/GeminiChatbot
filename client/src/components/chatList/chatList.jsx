import './chatList.css';
import { Link } from 'react-router-dom';

const ChatList = () => {
    return (
        <div className='chatList'>
            <span className='title'>Dashboard</span>
            <Link to="/dashboard">Create a new Chat</Link>
            <Link to="/">Explore Nhat GPT</Link>
            <span className='title'>Chats</span>
            <Link to="/">Contact</Link>
            <hr/>
            <div className='list'>
                <Link to="/">Chat 1</Link>
                <Link to="/">Chat 2</Link>
                <Link to="/">Chat 3</Link>
                <Link to="/">Chat 4</Link>
                <Link to="/">Chat 5</Link>
                <Link to="/">Chat 6</Link>
                <Link to="/">Chat 7</Link>
                <Link to="/">Chat 8</Link>
                <Link to="/">Chat 9</Link>
                <Link to="/">Chat 10</Link>
            </div>
            <hr/>
            <div className="upgrade">
                <img src="/logo.png" alt="" />
                <div className='texts'>
                    <span>Upgrade to Pro</span>
                    <span>Unlock more features</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList