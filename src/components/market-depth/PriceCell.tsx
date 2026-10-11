import { useEffect, useRef } from 'react'

interface PriceCellProps {
  price: number
  side: 'bid' | 'ask'
}

export function PriceCell({ price, side }: PriceCellProps) {
  const previousPrice = useRef<number | null>(null)

  useEffect(() => {
    previousPrice.current = price
  }, [price])

  function arrowDisplay(oldPrice: number | null, newPrice: number) {
    if (oldPrice === null) {
      return
    }
    if (oldPrice < newPrice) {
      return '⬆'
    } else {
      return '⬇'
    }
  }

  return (
    <div className={side}>{arrowDisplay(previousPrice.current, price)}</div>
  )
}
