const { Comments } = require('../models');

const commentData = [
  {id:1,
    body: 'Nice point of view',
    userId:5,
    postId:4
  },
  {id:2,
    body: 'I really like your post',
    userId:1,
    postId:2
  },
  {id:3,
    body: 'Fascinating',
    userId:3,
    postId:3
},
  
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;