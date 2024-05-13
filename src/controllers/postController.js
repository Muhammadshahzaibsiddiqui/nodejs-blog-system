const postService = require('../services/postService')
const PostDTO = require('../DTOs/postDTO')

async function getAllPost(req, res) {
    try {
        const postDTO = new PostDTO(req)
        const username = postDTO.getUserName();

        const posts = await postService.get(username);

        return res.status(200).send({ message: "Success", posts });

    } catch (error) {
        throw error
    }
}

async function getPostById(req, res) {
    try {
        const postDTO = new PostDTO(req)
        const username = postDTO.getUserName();
        const id = postDTO.getPostId();

        const post = await postService.getOne(id, username);

        if (!post) {
            return res.status(200).send({ message: "Post Not Found", });
        }

        return res.status(200).send({ message: "Success", post });

    } catch (error) {
        throw error
    }
}

async function createPost(req, res) {
    try {
        const postDTO = new PostDTO(req)
        const data = postDTO.getPostData();
        const username = postDTO.getUserName();

        const response = await postService.create(username, data);

        if (!response) {
            return res.status(200).send({ message: "Post Not Created!", });
        }

        return res.status(200).send({ message: "Successfully Created", });

    } catch (error) {
        throw error
    }
}

async function updatePost(req, res) {
    try {
        const postDTO = new PostDTO(req)
        const data = postDTO.getPostData();
        const username = postDTO.getUserName();
        const id = postDTO.getPostId();

        const response = await postService.update(id, username, data);

        if (!response) {
            return res.status(200).send({ message: "Post Not Found", });
        }

        return res.status(200).send({ message: "Successfully Updated", });

    } catch (error) {
        throw error
    }
}

async function deletePost(req, res) {
    try {

        const postDTO = new PostDTO(req)
        const id = postDTO.getPostId();
        const username = postDTO.getUserName();

        const response = await postService.dalete(id, username);

        if (!response) {
            return res.status(200).send({ message: "Post Not Found", });
        }

        return res.status(200).send({ message: "Successfully Deleted", });

    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllPost,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}