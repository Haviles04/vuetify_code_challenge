/**
 * UpdateBlog Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function (req , res){
  try {
    const { title, author, text, id } = req.body;
    const blogs = await Blog.updateOne({ id }).set({ title, author, text, id });
    return res.status(200).json(blogs);

  } catch (err) {
    console.log(err);
    return res.status(500).json(err.message);
  }

};
