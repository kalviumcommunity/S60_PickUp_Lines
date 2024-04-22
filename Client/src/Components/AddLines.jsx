import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddLines() {
    const [pickupline, setLine] = useState('')
    const [category, setcategory] = useState('')
    const navigate = useNavigate()

    const createdBy = localStorage.getItem("id")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/addPickUpLine', { createdBy, pickupline, category })
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

export default AddLines