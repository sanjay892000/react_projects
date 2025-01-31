import shopContext from "./shopContext"
import allProduct from '../productimage/all_product.js'
function ShopState({children}) {
  return (
    <shopContext.Provider value={allProduct}>
      {children}
    </shopContext.Provider>
  )
}

export default ShopState
