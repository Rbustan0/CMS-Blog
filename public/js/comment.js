const newCommentHandler = async (event) => {
    event.preventDefault();

    const commentText = document.querySelector('#comment-text');


    if (commentText) {
        // This will parse the url and then grab the id of post.
        const postId = window.location.pathname.split('/').pop();
        // const response = await fetch(``)

    }
}