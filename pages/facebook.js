  // Delay in milliseconds (2 minutes = 120,000 milliseconds)
  const delay = 120000;

  // Function to show the delayed post
  function showDelayedPost() {
      const delayedPost = document.getElementById("delayedPost");
      delayedPost.style.display = "block";
  }

  // Set a timeout to execute the function after the specified delay
<<<<<<< HEAD
  setTimeout(showDelayedPost, delay);
=======
  setTimeout(showDelayedPost, delay);

  //POST REMOVE
  function removePost(button) {
    const post = button.closest('.post');
    if (confirm("Are you sure you want to remove this post?")) {
        post.style.display = 'none';
    }
}

//POSTING POST
function postContent() {
    const typingArea = document.querySelector('.typing-area');
    const content = typingArea.innerHTML;

    if (content.trim() !== '') {
        // Create a new post element
        const post = document.createElement('div');
        post.classList.add('post');

        // Populate the post with content
        post.innerHTML = `
            <div class="container">
                <div class="round-image">
                    <img src="../assets/fbprofile.jpeg" alt="Profile Image" />
                </div>
                <div class="text"><b> Mark Down </b></div>
            </div>
            <p>${content}</p>
            <time>Just Now</time>
        `;

        // Insert the new post below the typing window
        const postsContainer = document.querySelector('.posts-container');
        postsContainer.appendChild(post);

        // Clear the typing area
        typingArea.innerHTML = '';
    } else {
        alert("Please enter some content before posting.");
    }
}

//LOGIN PAGE
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email and password match the specified login details
    if (email === 'm.arkdown668@gmail.com' && password === 'HelloHello1') {
        alert('Login successful!');
        window.location.replace('facebook.html'); // Redirect to facebook.html
        return false; // Prevent form submission
    } else {
        alert('Invalid email or password. Please try again.');
        return false;
    }
}
>>>>>>> origin/main
