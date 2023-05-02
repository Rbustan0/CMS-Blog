// handles the edit page for a post. Specifically listens for a submittal.
const newCommentHandler = async (event) => {
    event.preventDefault();

    // selects what we need to be filled and submitted
    const commentText = document.querySelector('#comment-text');


    // if there is text in the comment text field
    if (commentText) {
        // This will parse the url and then grab the id of post.
        const postId = window.location.pathname.split('/').pop();

        // fetches the post route from the api folder.
        const response = await fetch(`/api/comments`,{
            method: 'POST',
            body: JSON.stringify({post_id: postId, comment_text: commentText.value}),
            headers: {'Content-Type': 'application/json'},
        });
        // will reload page with the added comment.
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