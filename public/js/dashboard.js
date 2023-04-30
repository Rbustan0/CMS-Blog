const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const content = document.querySelector('#project-desc').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post.');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

const editButtonHandler = async (event) => {
  
  const id = event.target.getAttribute('data-id');

  if (id) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const post = await response.json();
      window.location.replace(`/posts/${id}/edit`);
    } else {
      alert('Failed to get post');
    }
  } else {
    alert('Failed to edit project');
  }
}

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document.querySelectorAll('#delete-btn').forEach(button => {
  button.addEventListener('click', delButtonHandler);
});

document
  .querySelectorAll("#edit-btn")
  .forEach((btn) => btn.addEventListener("click", editButtonHandler));