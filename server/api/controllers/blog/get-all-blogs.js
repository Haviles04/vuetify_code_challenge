/**
 * GetAllBlogs Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function (req, res){
  try{
    const blogs = await Blog.find();
    return res.status(200).json(blogs);

  }catch(err){
    return res.status(500).json(err.message);
  }

};

