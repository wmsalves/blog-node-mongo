const express = require('express');
const router = express.Router();


// Routes

router.get('', (req, res) => {
  const locals = {
    title: "NodeJS Blog",
    description: "Simple Blog created with NodeJS, Express & MongoDB"
  }

  res.render('index', {locals});
});

router.get('/about', (req, res) => {
  res.render('about');
});

  


module.exports = router;