/**
 * AddBlogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function (req, res){
  try{
    const { title, author, text } = req.body;
    const blog = await Blog.create({
      title,
      author,
      text,
      // no date needed, we can use sails' built in createdAt, and updatedAt
    }).fetch();

    return res.status(200).json({ blog });

  }catch(err){
    return res.status(500).json(err.message);
  }

};

