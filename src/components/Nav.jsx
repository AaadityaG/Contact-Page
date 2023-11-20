// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css";
import { useState } from 'react';
import './Nav.css'




const Nav = () => {
    
    const[nam, setName] = useState('');
    let phone;
    let email;
    let message;

    const[confirm, setConfirm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submiting form");

        nam = e.target[0].value;
        phone = e.target[1].value;
        email = e.target[2].value;
        message = e.target[4].value;

        // alert(`Name: ${nam}\nPhone:${phone}\nEmail:${email}\nMessage:${message}`)
        setConfirm(`Thank you, ${e.target[0].value}. We'll get back to you soon!\n`)
    }

    return (
        <>
 
            <div class="container">
                <div class="content">
                
                    <div className="Calling">
                        <img src="hero.svg" alt="image" />
                    </div>
                <div class="right-side">
                    <div class="topic-text">Send us a message</div>
                    <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                <form onSubmit={handleFormSubmit}>
                    <div class="input-box">
                    <input type="text" placeholder="Enter your name" required/>
                    </div>
                    <div class="input-box">
                    <input type="text" placeholder="Enter your phone"/>
                    </div>
                    <div class="input-box">
                    <input type="text" placeholder="Enter your email"/>
                    </div>
                    <div class="input-box message-box">
                    <textarea name="msg" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
                    </div>
                    <div class="button">
                    <input type="submit" value="Send Now" />
                    <br/><br/>
                    <div>{confirm}</div>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </>
    );
}

export default Nav;