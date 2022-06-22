const db = require('../dbConfig/init');

class Post {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.age = data.age
        this.location = data.location
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(d => new Post(d))
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    }
}

module.exports = Post;