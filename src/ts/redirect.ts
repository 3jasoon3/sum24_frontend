window.onload = () => {
  const jokeButton = document.getElementById("joke-btn") as HTMLButtonElement;
  jokeButton.onclick = () => {
    location.href = "./comic.html";
  };
};
