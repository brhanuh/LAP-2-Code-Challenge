const postForm = document.querySelector('#postForm');

async function submitPost (event) {
    event.preventDefault()
    const postData = {
        title: event.target.title.value,
        pseudonym: event.target.pseudonym.value,
        body: event.target.body.value
    }
    console.log(postData)
    try{
        let response = await fetch('http://localhost:3000/posts/',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(postData)
        });
    
        const { id, err } = await response.json();
        if (err){
            throw Error(err);
        }else{
            window.location.href = `http://127.0.0.1:5500/client/singlePost.html?id=${id}`;
        }

    }catch(err){
        console.log('Your entry wasn\'t published !')
    }

}

postForm.addEventListener('submit', submitPost);





