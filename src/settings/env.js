
const ENV = {
        server: (process.env.REACT_APP_PROD) ? 'https://hypersnab-server.herokuapp.com/' : 'https://thawing-tundra-53917.herokuapp.com' ,
        imgPath: 'https://res.cloudinary.com/ddjw7nmgb/image/upload/goods/',
        imgThumbPath: 'https://res.cloudinary.com/ddjw7nmgb/image/upload/c_thumb,w_50,g_face/goods/',
        prod: process.env.REACT_APP_PROD
    };

export default ENV;