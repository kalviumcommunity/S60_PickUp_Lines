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
        <div className='adding-container form-container'>
            <form action="" onSubmit={handleSubmit}>
                <h3>Add a PickUp Line</h3>
                <hr />
                <label htmlFor="PickupLine">PickUp Line:</label>
                <textarea name="pickupline" cols="50" rows="4" placeholder='Add a PickUp Line' onChange={(e) => {
                    setLine(e.target.value)
                }}
                ></textarea>
                <label htmlFor="Category:">Category:</label>
                <input
                    type="text"
                    placeholder='Funny, Cheesy, Romantic, Cute, Flirty.......'
                    required
                    value={category}
                    onChange={(e) => {
                        setcategory(e.target.value)
                    }}

                />
                <input className='submit-btn' type="submit" value="Create" />
            </form>
        </div>
    )
}

export default AddLines