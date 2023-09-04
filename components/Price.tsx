

function Price({price}:{price:string | number}){
 const current = typeof price==='string'?parseFloat(price):price
return (
  <div>
     ₽{current}
  </div>
)
}

export default Price;