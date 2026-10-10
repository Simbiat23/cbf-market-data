
import { useMarketDepthData } from './useMarketDepthData'
import "./MarketDepthFeature.css"

/**
 * TODO
 */
export const MarketDepthFeature = () => {
  const data = useMarketDepthData()
  // Uncomment and open devtools conbsole to inspect data
  // console.log(data.map(row => row.bid));
const isEmptyList = data.length == 0
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
                <td className='marketTable-center '>{row.level}</td>
                <td><span>{row.bidQuantity}</span> <div></div></td>
                <td>{row.bid}</td>
                <td>{row.offer}</td>
                <td>{row.offerQuantity}</td>
              </tr>
            ))} 

          </tbody>

        
      </table>
    </div>
     
        
      
 
  )
}
