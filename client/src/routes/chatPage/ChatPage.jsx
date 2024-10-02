import './chatPage.css'
import { useEffect, useRef } from 'react'
import NewPrompt from '../../components/newPrompt/newPrompt.jsx'

const ChatPage = () => {

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);
    return (
        <div className="chatPage">
            <div className="wrapper">
                <div className="chat">
                    <div className="message">Text message</div>
                    <div className="message user">Text message from user</div>
                    <div className="message">Text message from ai</div>
                    <div className="message user">Text message from user</div>
                    <div className="message">Text message</div>
                    <div className="message user">Text message from user</div>
                    <div className="message">Text message from ai</div>
                    <div className="message user">Text message from user</div><div className="message">Text message</div>
                    <div className="message user">Text message from user</div>
                    <div className="message">Text message from ai</div>
                    <div className="message user">Text message from user</div><div className="message">Text message</div>
                    <div className="message user">Text message from user</div>
                    <div className="message">Text message from ai</div>
                    <div className="message user">Text message from user</div><div className="message">Text message</div>
                    <div className="message user">Text message from user</div>
                    <div className="message">Text message from ai</div>
                    <div className="message user">Text message from user</div>
                    <NewPrompt />
                    <div ref={endRef}/>
                </div>
            </div>
        </div>
    )
}

export default ChatPage