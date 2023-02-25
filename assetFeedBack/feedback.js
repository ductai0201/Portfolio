window.addEventListener("load",function(){
    const feebackList = document.querySelector(".feedback-list");
    const dotItems = document.querySelectorAll(".dot-item");
    const feedbackItems = document.querySelectorAll(".feedback-item")
    const feedbackItemWidth = feedbackItems[0].offsetWidth;
    var positionX = 0;

    [...dotItems].forEach(item=>item.addEventListener("click",function(e){
        const fbItemIndex = e.target.dataset.index;
        positionX = 0 - (feedbackItemWidth*fbItemIndex);
        feebackList.style = `transform : translateX(${positionX}px)`;
        [...dotItems].forEach(item=>item.style =`background-color: #cecbcb !important`)
        dotItems[fbItemIndex].style = `background-color: #82ae46 !important`;
    }));
});