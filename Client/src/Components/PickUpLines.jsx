import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'


function PickUpLines() {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('http://localhost:4000/lines')
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div className='container'>
                {data && data.map((data) => {
                    return (
                        <div className='data-container' key={data._id}>
                            {data.pickupline}
                            <div className='category' >
                                <p>Category: {data.category}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}

export default PickUpLines