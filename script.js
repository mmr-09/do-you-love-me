const wrapper = document.querySelector(".wrapper");

const question = document.querySelector(".question");

const gif = document.querySelector(".gif");

const yesBtn = document.querySelector(".yes-btn");

const noBtn = document.querySelector(".no-btn");


yesBtn.addEventListener("click", () => {

  question.innerHTML = "Chúc Nhím 8/3 luôn xinh đẹp, may mắn và hạnh phúc. Chúc cậu một ngày vui vẻ! 😘";

  gif.src =

    "https://i.pinimg.com/originals/55/3d/42/553d42bea9b10e0662a05aa8726fc7f4.gif";

});


noBtn.addEventListener("mouseover", () => {

  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = window.innerWidth - noBtnRect.width;

  const maxY = window.innerHeight - noBtnRect.height;


  const randomX = Math.floor(Math.random() * maxX);

  const randomY = Math.floor(Math.random() * maxY);


  noBtn.style.left = randomX + "px";

  noBtn.style.top = randomY + "px";

});
