

const  getAllProductsStatic  =   async   ( req ,  res )   =>   {
    res.status ( 200 ) .json ( {msg: 'get all products' } )
}
const getAllProducts  =   async   ( req ,  res )   =>   {
    res.status ( 200 ) .json ( {msg: 'products route' } )
}

module . exports  =  {
    getAllProductsStatic,
    getAllProducts
}