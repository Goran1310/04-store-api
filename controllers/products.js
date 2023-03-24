const Product = require('../models/product')

const  getAllProductsStatic  =   async   ( req ,  res )   =>   {
    const products  =   await  Product.find ( { } )
    res.status ( 200 ) .json ( {products} )
    // throw new  Error ( 'TESTING ASYNC error from get all products static' )
    // res.status ( 200 ) .json ( {msg: 'get all products' } )
}
const getAllProducts  =   async   ( req ,  res )   =>   {
    res.status ( 200 ) .json ( {msg: 'products route' } )
}

module . exports  =  {
    getAllProductsStatic,
    getAllProducts
}