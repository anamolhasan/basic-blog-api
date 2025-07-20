const express = require("express");
const router = express.Router();

const blog = [
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

// router.get('/', (req, res) => {
//     res.send('this is form blog route')
// })

module.exports = router;
