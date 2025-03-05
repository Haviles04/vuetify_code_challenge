/**
 * DeleteBlog Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function (res, req){
  try {
    const id = req.query.id;
    await Blog.destroyOne({ id });
    return res.status(200);

  }catch(err){
    return res.status(500).json(err.message);
  }

};
