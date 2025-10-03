// onload = () => {
//     const c = setTimeout(() => {
//       document.body.classList.remove("not-loaded");
//       clearTimeout(c);
//     }, 1000);
//   };

  
let openModalBtn = document.getElementById("openModal");
let modal = document.getElementById("myModal");
let messageRef = document.getElementById("message-ref");

openModalBtn.addEventListener("click", () => {
  // Hide the modal if it is visible
  if (modal) modal.style.opacity = "none";


  // Run your "onload-like" logic
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Optionally, show a message
  messageRef.style.visibility = "visible";
});
let moveBtn = document.getElementById("moveBtn");

moveBtn.addEventListener("click", () => {
  let container = document.querySelector(".container");
  let containerRect = container.getBoundingClientRect();

  let maxX = containerRect.width - moveBtn.offsetWidth;
  let maxY = containerRect.height - moveBtn.offsetHeight;

  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);

  moveBtn.style.position = "absolute"; // must be absolute to move
  moveBtn.style.left = randomX + "px";
  moveBtn.style.top = randomY + "px";
});
