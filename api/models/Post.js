const db = require('../dbConfig/init');

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.pseudonym = data.pseudonym
        this.body = data.body
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(d => new Post(d))
                console.log(posts)
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    }

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE posts.id = $1;`, [ id ]);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    };

    static async create(postData){
        console.log(postData)
        console.log('create post')
        return new Promise (async (resolve, reject) => {
            try{
                const {title, pseudonym, body} = postData;
                let result = await db.query(`INSERT INTO posts (title, pseudonym, body)
                                                VALUES ($1, $2, $3)
                                                RETURNING *;`, [title, pseudonym, body]);
                resolve(result.rows[0]);
            }catch (err){
                reject('Post not published');
            }
        })
    }

}    

module.exports = Post;
