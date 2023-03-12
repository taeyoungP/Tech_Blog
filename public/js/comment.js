const addCommentHandler = async (event) => {

    event.preventDefault();

    const data = document.querySelector('.form-input');
    const comment = data.value.trim();

    console.log("comment: " + comment);
    
    const post_id = data.getAttribute('data-id');

    if(comment){
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ 
                comment, 
                post_id 
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            //document.location.replace(`/post/${post_id}`);
            document.location.reload();

          } else {
            alert('Failed to create comment');
          }
    }
}

document
    .querySelector('.form')
    .addEventListener('submit', addCommentHandler);