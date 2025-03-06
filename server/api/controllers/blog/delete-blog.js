/**
 * DeleteBlog Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function (req ,res){
  try {
    const {id} = req.params;
    const result = await Blog.destroyOne({ id });
    if (result) {
      return res.status(200).json();
    } else {
      throw new Error('Cannot find blog');
    }

  }catch(err){
    return res.status(500).json(err.message);
  }

};
