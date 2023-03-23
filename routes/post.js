import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controlles/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:_id', getPost);
/* router.patch('/:_id', updatePost);
 */
router.delete('/:_id', deletePost);
router.put('/:_id/likePost', likePost); 

export default router;