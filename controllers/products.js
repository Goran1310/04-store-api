const Product = require('../models/product')

const  getAllProductsStatic  =   async   ( req ,  res )   =>   {
    const search  =   'ab'
    const products  =   await  Product.find ( { 
        name : { $regex: search, $options: 'i' }
     } )
    res.status ( 200 ) .json ( {products, nbHits: products.length} )
    // throw new  Error ( 'TESTING ASYNC error from get all products static' )
    // res.status ( 200 ) .json ( {msg: 'get all products' } )
}
const getAllProducts  =   async   ( req ,  res )   =>   {
    const { featured ,  company, name, search}  =  req.query
    const queryObject  =   { }

    if ( featured ) {
        queryObject.featured  =  featured  ===   'true'   ?  true  :  false
    }
    if ( company ) {
        queryObject.company  =  company
    }
    if ( name ) {
        queryObject.name  =  { $regex: name, $options: 'i' }
    }
    console.log ( queryObject )
    const products =   await  Product.find (queryObject);
    res.status ( 200 ) .json ( {products, nbHits: products.length} )
    // console.log ( req .query )
    // res.status ( 200 ) .json ( {msg: 'products route' } )
}

module . exports  =  {
    getAllProductsStatic,
    getAllProducts
}