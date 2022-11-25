import Button from './Button'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardProductsOrder = ({ productSelect, setOrderList, orderList }) => {

  function addQuantityProduct() {
    setOrderList((products) => {
      return products.map((product) => {
        if (product.product.id === productSelect.product.id) {
          product.qty++
        }
        return product
      })
    })
  }

  function subtractQuantityProduct() {
    setOrderList((products) => {
      return products.map((product) => {
        if (product.product.id === productSelect.product.id) {
          product.qty--
        }
        return product
      })
    })
  }

  const productDelete = () => {
    setOrderList(orderList.filter((item) => item.product.id !== productSelect.product.id));
  }

  const totalPriceProduct = productSelect.product.price * productSelect.qty

  return (
    <div className='containerProductOrder'>
      <div className='name'>
        <p>{productSelect.product.name}</p>
      </div>
      <div className='price'>
        <p>${totalPriceProduct}</p>
      </div>
      <div className='btnQuantity'>
        <Button type="button" text='–' className='btnFewer' onClick={() => subtractQuantityProduct()} />
        <p className='pControl'>{productSelect.qty}</p>
        <Button type="button" text='+' className='btnAdd' onClick={() => addQuantityProduct()} />
      </div>
      <div className='btnDelete'>
        <Button type="button" className='trashContainer' onClick={productDelete}><FontAwesomeIcon icon={faTrash} /></Button>
      </div>
    </div>
  )
}

export default CardProductsOrder