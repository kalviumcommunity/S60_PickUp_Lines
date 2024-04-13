import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateLines() {
    const [name, setName] = useState('')
    const [pickupline, setLine] = useState('')
    const [category, setcategory] = useState('')
    const navigate = useNavigate()
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:4000/updateLine/' + id)
            .then((res) => {
                console.log(res)
                setName(res.data.name)
                setLine(res.data.pickupline)
                setcategory(res.data.category)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:4000/updateLine/' + id, { name, pickupline, category })
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='form-container'>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="PickupLine">User Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    placeholder='Add Your name'
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <label htmlFor="PickupLine">PickUp Line:</label>
                <input
                    type="text"
                    required
                    value={pickupline}
                    placeholder='Add PickUp Line'
                    onChange={(e) => {
                        setLine(e.target.value)
                    }}
                />
                <label htmlFor="Category:">Category:</label>
                <input
                    type="text"
                    placeholder='Category'
                    required
                    value={category}
                    onChange={(e) => {
                        setcategory(e.target.value)
                    }}
                />
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default UpdateLines