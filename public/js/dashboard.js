// handles new post.
const newFormHandler = async (event) => {
  event.preventDefault();

  // selects the variables we want to target
  const title = document.querySelector('#post-name').value.trim();
  const content = document.querySelector('#post-desc').value.trim();

  // checks if info was filled.
  if (title && content) {
    // fetches api post we want and passes it as a JSON object.
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // if successful refresh the page.
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post.');
    }
  }
};

// handles deleting a post through a button.
const delButtonHandler = async (event) => {
  // if the target is the red button and has a data-id associated.
  if (event.target.hasAttribute('data-id')) {
    // grabs and saves which id it is
    const id = event.target.getAttribute('data-id');

    // fetches the delete route from the api folder
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    // refreshes page again.
    if (response.ok) {
      document.location.replace('/dashboard');
    } 
    
    else {
      alert('Failed to delete post');
    }
  }
};

// checks to see if user clicks on the edit button.
const editButtonHandler = async (event) => {
  
  // grabs id data similarily to the delete button
  const id = event.target.getAttribute('data-id');

  // if we have an id:
  if (id) {
    // fetch from api folder a new page that will call the PUT route there.
    const response = await fetch(`/post/${id}/edit`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // moves user to new page to edit post.
    if (response.ok) {
      window.location.replace(`/post/${id}/edit`);
    } 
    else {
      alert('Failed to get post');
    }
  } 
  else {
    alert('Failed to edit post');
  }
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document.querySelectorAll('#delete-btn').forEach(button => {
  button.addEventListener('click', delButtonHandler);
});

document
  .querySelectorAll("#edit-btn")
  .forEach((btn) => btn.addEventListener("click", editButtonHandler));