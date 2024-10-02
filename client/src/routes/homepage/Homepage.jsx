import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
    const [typingStatus, setTypingStatus] = useState('human1')
    return (
        <div className="homepage">
            <img src="/orbital.png" alt="" className='orbital' />
            <div className="left">
            <h1>Nhat GPT</h1>
            <h2>Elevating your creativity and productivity</h2>
            <h3>Using Gemini Pro 1.5, Nhat GPT can help you do tasks faster</h3>
            <button>Let's begin!</button>
            </div>
            <div className="right">
                <div className='imgContainer'>
                    <div className='bgContainer'>
                        <div className='bg'></div>
                    </div>
                    <img src="bot.png" alt="" className='bot'  />
                    <div className='chat'>
                    <img src={typingStatus === "huaman1" ? "/human1.jpeg" : typingStatus === "human2" ? "/human2.jpeg" : "bot.png"} alt="" />
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Human:We produce food for Mice',
        1000, ()=>{
            setTypingStatus('bot')
        }, // wait 1s before replacing "Mice" with "Hamsters"
        'Bot:We produce food for Hamsters',
        1000, ()=>{
            setTypingStatus('human2')
        }, // wait 1s before replacing "Hamsters" with "Guinea Pigs"
        'Human:We produce food for Guinea Pigs',
        1000, ()=>{
            setTypingStatus('bot')
        },
        'Bot:We produce food for Chinchillas',
        1000, ()=>{
            setTypingStatus('human1')
        }
      ]}
      wrapper="span"
      cursor={true}
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      omitDeletionAnimation={true}
    />
                    </div>
                </div>
            </div>
            <div className='terms'>
                <img src="/logo.png" alt="" />
                <Link to="/">Terms of Service</Link>
                <span>|</span>
                <Link to="/">Privacy Policy</Link>
            </div>
        </div>
    )
}

export default Homepage