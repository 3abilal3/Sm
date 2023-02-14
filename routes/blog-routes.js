import express from 'express';
import { addBlog, findOne, getAllBlogs } from '../controllers/blog-controllers';
import { updateBlog } from '../controllers/blog-controllers';
import { deleteBlog } from '../controllers/blog-controllers';

const blogRouter=express.Router();

blogRouter.get('/',getAllBlogs)
blogRouter.post('/add',addBlog)
blogRouter.put('/update/:id',updateBlog)
blogRouter.get('/find/:id',findOne)
blogRouter.delete('/delete/:id',deleteBlog)

export default blogRouter;