const newCommentHandler = async (event) => {
    event.preventDefault();

    const commentText = document.querySelector('#comment-text');


    if (commentText) {
        // This will parse the url and then grab the id of post.
        const postId = window.location.pathname.split('/').pop();
        const response = await fetch(`/api/comments`,{
            method: 'POST',
            body: JSON.stringify({post_id: postId, comment_text: commentText.value}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.reload();
        }
        else{
            alert('Failed to create comment');
        }

    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);