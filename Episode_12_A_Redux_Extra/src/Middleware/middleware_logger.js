

const middleware_logger = (store) => (next) => (action) => {
    // console.log("Middleware logger", store);
    // console.log("Middleware logger", next);
    // console.log("Middleware logger", action);
    next(action);
};

export default middleware_logger;