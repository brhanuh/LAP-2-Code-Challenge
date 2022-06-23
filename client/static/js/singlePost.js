let result;
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

const getSinglePost = async (id) => {
	await fetch(`http://localhost:3000/posts/${id}`)
		.then((res) => res.json())
		.then(async (data) => {
			result = data;

            const title = document.querySelector('#title');
			title.textContent = await result.title;

            const username = document.querySelector('#username');
            username.textContent = await result.pseudonym;

            const postContent = document.querySelector('#postContent');
            postContent.textContent = await result.body;

        })

        .catch((err) => console.log(err));
}

getSinglePost(id);
