  
const { Post } = require('../models');

const postData = [
  {
    id:1,
    title: 'Tech Blog',
    body:"what a mess!",
    userId:5
  },
  {
    id:2,
    title: 'Tech Blog',
    body:"Is this working?!",
    userId:1
  },
  {
    id:3,
    title: 'Tech Blog',
    body:"Do we get an ID?!",
    userId:2
  },
  {
    id:4,
    title: 'Tech Blog',
    body:"what a mess!",
    userId:4
  },
  {
    id:5,
    title: 'Tech Blog',
    body:"Why is this happening to me??!",
    userId:3
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;