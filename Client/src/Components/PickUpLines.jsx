import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function PickUpLines(props) {
    const [data, setData] = useState()
    const [filteredData, setFilteredData] = useState();

    const { login, filteredName } = props

    useEffect(() => {
        axios.get('http://localhost:4000/lines')
            .then((res) => {
                console.log(res.data)
                setData(res.data)
                setFilteredData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    useEffect(() => {
        handleFilteredName()
    }, [filteredName])

    const handleFilteredName = () => {
        console.log(filteredName)

        if (filteredName === "all") {
            setFilteredData(data);
        }
        else {
            const newData = data.filter((user) => {
                return user.createdBy === filteredName
            })
            setFilteredData(newData)
        }

    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/deleteData/' + id)
            .then((res) => {
                console.log(res)
                setFilteredData(filteredData.filter((user) => user._id !== id));
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className='container'>
                {filteredData && filteredData.length > 0 ? (
                    filteredData.map((data) => (
                        <div className='data-container' key={data._id}>
                            <div className='box-1'>
                                <p><b>Created By: </b>{data.createdBy}</p>
                                <p><b>Category:</b> {data.category}</p>
                            </div>
                            <div className='box-2'>
                                <p>" {data.pickupline} "</p>
                            </div>
                            <div className='box-3'>
                                {(
                                    <>
                                        <Link to={`/updateLine/${data._id}`}>
                                            <button>Update</button>
                                        </Link>
                                        <button onClick={() => { handleDelete(data._id) }}>Delete</button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        No pickup lines created by this user.
                    </div>
                )}
            </div>
        </div >

    )
}

export default PickUpLines