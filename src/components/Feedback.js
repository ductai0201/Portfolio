import { useEffect, useState } from "../lib";

const Feedback = () => {

    const [feedbacks, setFeedBack] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/feedback")
        .then((Response) => Response.json())
        .then((data) => setFeedBack(data));
    }, []);
  return `
  <head> 
    <link rel="stylesheet" href="/assetFeedBack/feedback.css">
    <script src="/assetFeedBack/feedback.js"></script>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    
  <head>
  <div id="home-feedback">
            <div class="feedback-container">
                <div class="feedback-title">
                    <p class="feedback-subheading">Testimony</p>
                    <h2 class="feedback-heading">Our satisfied customer says</h2>
                    <p class="feedback-dsc">This is feedback from customer</p>
                </div>

                <div class="feedback-list-wrapper">
                    <div class="feedback-list row">
                    ${feedbacks.map((feedback)=>{
                        return `
                        
                        <div class="feedback-item col">
                            <div class="user-avatar" style="background-image: url(${feedback.avt});">
                                <span class="quote-bg">
                                    <i class='bx bxs-quote-right bx-rotate-180'></i>
                                </span>
                            </div>

                            <div class="user-feedback">
                                <p class="user-fb-content">${feedback.content}</p>
                            </div>

                            <div class="user-name">
                                <h2>${feedback.name}</h2>
                            </div>

                            <div class="user-job">
                                <p>${feedback.job}</p>
                            </div>
                        </div>
                        `
                    }).join('')}

                    </div>
                </div>

                <div class="moving-dots row">
                    <div class="dot-item feedback-active" data-index="0"> </div>
                    <div class="dot-item" data-index="1"> </div>
                    <div class="dot-item" data-index="2"> </div>
                    <div class="dot-item" data-index="3"> </div>
                    <div class="dot-item fb-final-dot" data-index="4"> </div>
                </div>
            </div>
        </div>`;
};

export default Feedback;
