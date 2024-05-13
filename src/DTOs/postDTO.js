const ShortUniqueId = require('short-unique-id');
const { randomUUID } = new ShortUniqueId();

class PostDTO {
    constructor(req) {
        this.id = req.params.id ? req.params.id : randomUUID();
        this.title = req.body.title;
        this.content = req.body.content;
        this.authUser = req.authUser;
        this.createdAt = new Date();
    }

    getPostData() {
        return {
            id: this.id,
            title: this.title,
            content: this.content,
        }
    }

    getUserName() {
        return this.authUser.username;
    }

    getPostId() {
        return this.id;
    }
}

module.exports = PostDTO;