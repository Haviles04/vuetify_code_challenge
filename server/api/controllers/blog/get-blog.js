/**
 * GetBlog Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function (req, res){
  try {
    const {id} = req.params;
    const blog = await Blog.findOne({ id });
    return res.status(200).json(blog);

  } catch (err) {
    return res.status(500).json(err.message);
  }

};
