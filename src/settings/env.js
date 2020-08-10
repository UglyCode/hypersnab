
const ENV = {
     server: (process.env.NODE_ENV === 'production') ? 'https://hypersnab-server.herokuapp.com/' : 'https://thawing-tundra-53917.herokuapp.com' ,
     imgPath: 'https://res.cloudinary.com/ddjw7nmgb/image/upload/goods/',
     imgThumbPath: 'https://res.cloudinary.com/ddjw7nmgb/image/upload/c_thumb,w_50,g_face/goods/',
    };

export default ENV;