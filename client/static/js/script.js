const submitBtn = document.querySelector('#submit-btn');
const postForm = document.querySelector('#postForm');
let result;

async function submitPost (event) {
    event.preventDefault()
    try{
        let response = await fetch('http://localhost:3000/posts/',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(Object.fromEntries(new FormData(postForm)))
        });
        const { id, err } = await response.json();
        if (err){
            throw Error(err);
        }else{
            window.location.hash = `/posts/${id}`;
        }

    }catch(err){
        console.log('Your entry wasn\'t published !')
    }

}

submitBtn.addEventListener('click', submitPost);



const getSinglePost = async () => {
	await fetch(`https://localhost:3000/posts/${id}`)
		.then((res) => res.json())
		.then(async (data) => {
			result = data;

            const title = document.querySelector('#title');
			title.textContent = await result.title;

            const username = document.querySelector('#username');
            username.textContent = await result.username;

            const postContent = document.querySelector('#postContent');
            postContent.textContent = await result.body;

        })

        .catch((err) => console.log(err));
}
