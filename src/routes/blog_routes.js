const express = require("express");
const router = express.Router();

const blogs = [
  {
    id: 1,
    title: "this first is title",
    description: "this is first blog  description",
  },
  {
    id: 2,
    title: "this 2nd is title",
    description: "this is 2nd blog  description",
  },
  {
    id: 3,
    title: "this 3rd is title",
    description: "this is 3rd blog  description",
  },
];

router.get('/', (req, res) => {
    res.send(blogs)
})

router.get('/:id', (req, res) => {
  const {id} = req.params
  
  const existingBlog = blogs.find((blog) => blog.id === parseInt(id))

  if(!existingBlog) {
    return res.status(404).send({message:'No blog found'})
  }

  res.status(200).send(existingBlog)
})

// add a new blog
router.post('/add-post', (req, res) => {
  const {title, description} = req.body
  const newBlog = {id: blogs.length + 1, title, description }
  blogs.push(newBlog)
  res.status(200).json({
    message: 'new blog successfully',
    blog: newBlog
  })
})

module.exports = router;
