const editPostFormHandler = async (event) => {
    event.preventDefault();

    // need to split and grab the numeric value in the link
    const id = window.location.pathname.split('/')[2];
    const title = document.querySelector('#post-name').value.trim();
    const content = document.querySelector('#post-desc').value.trim();

    if (title && content){
       
        const response = await fetch(`/api/posts/${id}`, {
           
            method: 'PUT',
           
            body: JSON.stringify({ title, content }),
           
            headers: {'Content-Type': 'application/json'},
        
        });
        if(response.ok) {
            const data = await response.json();
            window.location.replace('/dashboard');
        }
        else {
            alert('Failed to edit the post');
        }
    }



};

document
.querySelector('.edit-post-form')
.addEventListener('submit', editPostFormHandler);