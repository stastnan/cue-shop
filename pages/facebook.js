  // Delay in milliseconds (2 minutes = 120,000 milliseconds)
  const delay = 120000;

  // Function to show the delayed post
  function showDelayedPost() {
      const delayedPost = document.getElementById("delayedPost");
      delayedPost.style.display = "block";
  }

  // Set a timeout to execute the function after the specified delay
  setTimeout(showDelayedPost, delay);