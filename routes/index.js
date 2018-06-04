var express = require('express');
var router = express.Router();
var db = require('./db');
const projects = [
  {
    id: '0',
    title: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
    imageurl: 'http://placehold.it/700x400'
  },
  {
    id: '1',
    title: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
    imageurl: 'http://placehold.it/700x400'
  },
  {
    id: '2',
    title: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
    imageurl: 'http://placehold.it/700x400'
  },
  {
    id: '3',
    title: 'Project four',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
    imageurl: 'http://placehold.it/700x400'
  },
  {
    id: '4',
    title: 'Project five',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
    imageurl: 'http://placehold.it/700x400'
  },
  {
    id: '5',
    title: 'Project six',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
    imageurl: 'http://placehold.it/700x400'
  }
]


/* GET home page. */
router.get('/', function (req, res, next) {
  var collection = db.connect('real-estate')
  collection.find().toArray(function(err, docs) {
    res.render('index', {title: 'Home', project: docs})
  })

  // res.render('index', {
  //   title: 'Home',
  //   project: projects
  // });
}); 

router.get('/project/:id', function (req, res, next) {
  const id = req.params.id;
  res.render('project', {
    title: 'project',
    project: projects[id]
  });
});

router.get('/about', function (req, res) {
  res.render('about', {
    title: 'About'
  });
});

router.get('/service', function (req, res) {
  res.render('service', {
    title: 'Service'
  });
});

router.get('/contact', function (req, res) {
  res.render('contact', {
    title: 'Contact'
  });
});
module.exports = router;
