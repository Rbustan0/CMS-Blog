const editPostFormHandler = async (event) => {
    event.preventDefault();

    const id = window.location.pathname.split('/').pop();
    const title = document.querySelector('#post-name');
    const content = document.querySelector('#post-desc');

    const response = await fetch(`/api/post/${id}`, {
       
        method: 'PUT',
       
        body: JSON.stringify({title,content}),
       
        headers: {'Content-Type': 'application/json'},
    
    });

    if(response.ok) {
        window.location.replace('/dashboard');
    }

    else {
        alert('Failed to edit the post');
    }
};

document
.querySelector('.edit-post-form')
.addEventListener('submit', editPostFormHandler);