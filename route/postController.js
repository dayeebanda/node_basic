exports.getAllPost = (req, res) => {

    console.log(req.query)
    res.send('rander all post');
}

exports.singlaePost = (req, res) => {

    res.send(' I am post no =' + req.params.postId);
}

exports.createNewPost = (req, res) => {

    res.send(' creat new post');
}

exports.updateNewPost = (req, res) => {

    res.send('upated post =' + req.params.postId);
}

exports.deletePost = (req, res) => {

    res.send('delete your post = ' + req.params.postId);
}