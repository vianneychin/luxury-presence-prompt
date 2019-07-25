import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = (resource) => {
  const [resources, setResources] = useState('')
  useEffect(() => {
    ;(async (resource) => {
      const response = await axios.get(
        `http://www.mocky.io/v2/5d018fbd3100005400ab2968`
      )
      const res = response.data.replace(/[\r\n]/g, '')
      let obj = res.substring(res.indexOf('Totals') + 9, res.length - 3)

      const formattedString = obj
        .split(',')
        .map((x) => x.split(':').map((y) => y.trim()))
        .reduce(
          (a, x) => {
            let val = x[0]
            a.Totals[val] = Number(x[1])
            return a
          },
          { Totals: {} }
        )

      /* This is using eval way but it's not secure. */
      // const y = eval(`(${res})`)
      // console.log(y)

      setResources(formattedString)
    })(resource)
  }, [resource])
  return resources
}
export default useResources
