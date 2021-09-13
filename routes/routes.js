const express = require('express');
const Posts = require('../model/prescription');
const Posts2 = require('../model/validpres');
const Posts3 = require('../model/invalidpres');

const router = express.Router();

//save posts
router.post('/post/save', (req,res) =>{
    //post instantiate
    let newPost = new Posts(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved succesfully"
        });
    });
});
//get posts
router.get('/posts', (rew,res) =>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});
//update posts
router.put('/post/update/:id', (req,res) =>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body //update all/any
        },
        (err,post) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});
//delete post
router.delete('/post/delete/:id', (req,res) => {
    Posts.findByIdAndDelete(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful", err
        });
    
        return res.json({
            message:"Delete Succesfull", deletedPost
        });
    });
 });
 //get a specific post by id
router.get("/post/:id", (req,res) =>{

    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});
//get a specific post by cusID
router.get("/alt/post/:id", (req,res) =>{

    let postId = req.params.id;

    Posts.findOne({ cusID : postId },(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
}); 

/**************************************************************************************************************/
/**************************************************************************************************************/

//save posts
router.post('/post2/save', (req,res) =>{
    //post instantiate
    let newPost = new Posts2(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved succesfully"
        });
    });
});
//get posts
router.get('/posts2', (rew,res) =>{
    Posts2.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});
//delete post
router.delete('/post2/delete/:id', (req,res) => {
    Posts2.findByIdAndDelete(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful", err
        });
    
        return res.json({
            message:"Delete Succesfull", deletedPost
        });
    });
 });
 //get a specific post by id
router.get("/post2/:id", (req,res) =>{

    let postId = req.params.id;

    Posts2.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});


/**************************************************************************************************************/
/**************************************************************************************************************/

//save posts
router.post('/post3/save', (req,res) =>{
    //post instantiate
    let newPost = new Posts3(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved succesfully"
        });
    });
});
//get posts
router.get('/posts3', (rew,res) =>{
    Posts3.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});
//delete post
router.delete('/post3/delete/:id', (req,res) => {
    Posts3.findByIdAndDelete(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful", err
        });
    
        return res.json({
            message:"Delete Succesfull", deletedPost
        });
    });
 });
 //get a specific post by id
router.get("/post3/:id", (req,res) =>{

    let postId = req.params.id;

    Posts3.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//export router
module.exports = router;