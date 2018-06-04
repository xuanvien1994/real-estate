var express = require('express');
var router = express.Router();


const projects = [
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
        title: 'Project One',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
        imageurl: 'http://placehold.it/700x400'
    },
    {
        id: '4',
        title: 'Project One',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
        imageurl: 'http://placehold.it/700x400'
    },
    {
        id: '5',
        title: 'Project One',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
        imageurl: 'http://placehold.it/700x400'
    },
    {
        id: '6',
        title: 'Project One',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
        imageurl: 'http://placehold.it/700x400'
    }
]


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home',
        project: projects
    });
});
router.route('/:id').get((req, res) => {
    const { id } = req.params;
    res.render('project', {
        title: '  ',
        project: project[id]
    });
})
module.exports = projectRouter;