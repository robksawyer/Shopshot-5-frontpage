/**
 * @see https://stackoverflow.com/questions/27117337/exclude-route-from-express-middleware
 */
const unless = (path, middleware) => {
  return function(req, res, next) {
      if (path === req.path) {
          return next();
      } else {
        if(middleware){
          return middleware(req, res, next);
        }
        return next();
      }
  };
};

export default unless;
