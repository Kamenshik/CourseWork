//const sequelize = require('../config/sequelize')
const NewsPost = require('../models/newspost')

class NewsPostsService {
    async getPosts(){
        let posts = await NewsPost.findAll({ raw: true });
        console.log(posts);
    }
}

module.exports = new NewsPostsService();