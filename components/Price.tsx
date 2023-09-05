

function Price({ price }: { price: string | number }) {
  const current = typeof price === 'string' ? parseFloat(price) : price
  return (
    <div className="text-xl md:text-2xl xl:text-3xl uppercase">
      ₽ {current}
    </div>
  )
}

export default Price;