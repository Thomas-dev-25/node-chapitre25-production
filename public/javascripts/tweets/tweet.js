document.addEventListener("DOMContentLoaded", () => {
  bindTweet();
});

function bindTweet() {
  const elements = document.querySelectorAll(".btn-danger");
  const tweetsContainer = document.querySelector(".tweets-container");

  elements.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const tweetId = event.target.getAttribute("tweetid");
      axios
        .delete("/tweets/" + tweetId)
        .then(function (response) {
          tweetsContainer.innerHTML = response.data;
          bindTweet();
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}
