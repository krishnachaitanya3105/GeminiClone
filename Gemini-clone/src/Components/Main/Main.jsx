import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="maincontainer">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Can you give me a fun fact about outer space?</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                 <div className="card">
                    <p>What's the best way to learn a new language?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                 <div className="card">
                    <p>What are you capable of?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                 <div className="card">
                    <p>How do you learn new things?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
               Gemini may display inaccurate info, including about people, so it's always a good practice to double-check its responses.
                </p>
            </div>
        </div>
    </div>

  )
}

export default Main