const data = require('../datab/database');


exports.getBlog = (req, res) => {

    data.execute("select * from blog_post").then((result) => {
        result.forEach(x => {
            console.log("isim " + x[0].name);
        })
        res.render('index', {
            'model': result[0]
        });
    }).catch((err) => {
        console.log(err);
    });
}

exports.getBlogDetail = (req, res) => {
    data.execute(`select * from blog_post where id = ${req.params.id}`).then((result) => {
        console.log(result[0]);
        res.render('blog-detail', { blog: result[0][0] });
    }).catch((err) => {
        console.log(err);
    });
}

exports.blogAdd = (req, res) => {
    res.render('admin/blog');
    data.execute("INSERT INTO blog_post (blog_title, blog_desc, blog_image) VALUES (?,?,?)", [req.body.blog_title, req.body.blog_desc, req.body.blog_image]).then((result) => {

    }).catch((err) => {
        console.log(err);
    });;
}

exports.blogList = (req, res) => {

    data.execute("select * from blog_post").then((result) => {

        res.render('admin/blog-list', {
            'blogModel': result[0]
        });

    }).catch((err) => {
        console.log(err);
    });
}

exports.blogDEL = (req, res) => {
    data.execute(`DELETE FROM blog_post WHERE id = ${req.params.id}`).then((result) => {
        res.redirect('/admin/blog-list')
    }).catch((err) => {
        console.log(err);
    });
}

exports.blogUPDATE = (req, res) => {
    data.execute(`SELECT * FROM blog_post WHERE id = ${req.params.id}`).then((result) => {
        res.render('admin/blog-update', { model: result[0][0] });
    }).catch((err) => {
        console.log(err);
    });
}

exports.blogUPDATEPOST = (req,res)=>{
    data.execute("UPDATE blog_post SET blog_title = ?, blog_desc = ?, blog_image = ? WHERE id = ?", [req.body.blog_title, req.body.blog_desc, req.body.blog_image, req.body.id]).then((result) => {
        console.log(result);
        res.redirect('/admin/blog-list')
    }).catch((err) => {
        console.log(err);
    });
}