
  async function getAll(){
    try {
        const response = await fetch(`http://localhost:3000/posts`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}
async function loadHtml(){
    const data = await getAll();
    let htmlCode = ``;
    data.forEach(function(post) {
       htmlCode = htmlCode + `
        <div class="col-sm-3 m-4">
            <div class="card">
                <div class="card-body">
                    <h2 class="title">${post.title}</h2>
                    <h5 class="pseudoname">${post.pseudonym}</h5>
                    <p class="bodyText">${post.body}</p>
                    <a href="./singlePost.html?id=${post.id}">
                        <button type="button" class="allPosts-btn">Read more</button>
                    </a>
                </div>
            </div>
        </div>  
        `
      });
      
      const postCards = document.querySelector(".row");
      
      postCards.innerHTML = htmlCode;
}

function init () {
    loadHtml()
}
function search_post(){
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('title');
    let cards = document.getElementsByClassName('col-sm-3');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            cards[i].style.display="none";
        }
        else {
            cards[i].style.display="";                 
        }
    }
    
}
init();
