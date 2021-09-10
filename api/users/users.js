const router = require('express').Router();

router.get('/', (req, res) => {
  Posts.find(req.query)
      .then(posts => {
          res.status(200).json(posts);
      })
      .catch(error => {
          console.log(error);
          res.status(500).json({
              message: 'The posts information could not be retrieved'
          });
      });
});

router.post('/api/register', (req, res) => {
    Posts.insert(req.body)
      .then(posts => {
        if (!req.body.name || !req.body.bio) {
            res.status(400).json({
                message: 'Please provide title and contents for the post'
            })
        } else {  
        res.status(201).json(posts);
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'There was an error while saving the post to the database',
        });
      });
  });

  router.post('/api/login', (req, res) => {
    Posts.insert(req.body)
      .then(posts => {
        if (!req.body.name || !req.body.bio) {
            res.status(400).json({
                message: 'Please provide title and contents for the post'
            })
        } else {  
        res.status(201).json(posts);
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'There was an error while saving the post to the database',
        });
      });
  });