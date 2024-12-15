let productId = 2
let products = []
const getP = () => {
        return products
}

const createP = (newProduct) => {
    products.push({id:productId, ...newProduct})
    productId++
}

const updateP = (id, updatedProduct) => {
    products =  products.map(product => {
        if(product.id!==id){
            return product
        }else{
            return {id, ...updatedProduct}
        }
    })

}

const deleteP = (id) => {
    products = products.filter(product => {
      if(product.id !== id) {
          return true
      } else {
          return false
      }
    })
  }

module.exports = {
    getP,
    createP,
    updateP,
    deleteP 
}