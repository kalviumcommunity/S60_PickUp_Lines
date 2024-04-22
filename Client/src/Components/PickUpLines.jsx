import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function PickUpLines(props) {
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

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/deleteData/' + id)
            .then((res) => {
                console.log(res)
                setData(data.filter((user) => user._id !== id));
            })
            .catch((err) => {
                console.log(err)
            })
    }

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
                            <div>
                                {props.login && (
                                    <>
                                        <Link to={`/updateLine/${data._id}`}>
                                            <button>Update</button>
                                        </Link>
                                        <button onClick={() => { handleDelete(data._id) }}>Delete</button>
                                    </>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >

    )
}

export default PickUpLines