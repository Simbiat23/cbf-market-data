
import { useMarketDepthData } from './useMarketDepthData'
import "./MarketDepthFeature.css"

/**
 * TODO
 */
export const MarketDepthFeature = () => {
  const data = useMarketDepthData()
  const maxQuantity = Math.max(...data.flatMap(row => [row.bidQuantity, row.offerQuantity]))
  console.log(maxQuantity);



  const isEmptyList = data.length === 0
  return (
    <div className='marketTable-container'>
      <table className= "marketTable">
        <colgroup>
          <col className="marketTable-colLevel" />
          <col className="marketTable-colQty" />
          <col className="marketTable-colPrice" />
          <col className="marketTable-colPrice" />
          <col className="marketTable-colQty" />
      </colgroup>
        <thead>
          <tr>
            <th rowSpan={2}></th>
            <th colSpan={2}>Bid</th>
            <th colSpan={2}>Ask</th>
          </tr>
        
          <tr>
              <th>Quantity</th>
              <th>Price</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
        </thead>

        <tbody>
      
          {data.map((row )=> (
              <tr key={row.symbolLevel}>
                <td className='marketTable-center'>{row.level}</td>

                <td className='marketTable-quantity marketTable-right'><div className='marketTable-bidBar' style={{ width: `${(row.bidQuantity / maxQuantity) * 100}%` }}></div><span >{row.bidQuantity}</span></td>

                <td>{row.bid}</td>
                <td>{row.offer}</td>
                <td className='marketTable-quantity'><div className='marketTable-askBar' style={{ width:`${(row.offerQuantity / maxQuantity) * 100}%`}}></div><span>{row.offerQuantity}</span></td>
              </tr>
            ))} 

          </tbody>

        
      </table>
    </div>
     
        
      
 
  )
}
