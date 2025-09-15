import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


export const Edit = () => {
    const [state, setState] = useState({
        book_name: '',
        book_author: '',
        book_edition: '',
        book_page_number: '',
        book_price: '',
        book_descrition: ''
    })

    const { id } = useParams();

    const navigate=useNavigate();

    const handler = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })

    }
    const updateData = async (e) => {
        try {
            e.preventDefault();
            // console.log(state);
            const res =await axios.put("http://localhost:3004/book_details/"+id,state)
            if(res.status===200 || res.status===201)
            {
                navigate("/book-list");
            }
        } catch (err) {
            console.log(err);

        }

    }



    useEffect(() => {
        // console.log(" useEffcet reder");
        axios.get("http://localhost:3004/book_details/" + id)
            .then((res) => {
                console.log(res.data);
                setState(res.data)

            })


    }, [])

    return (
        <div className="container py-5">
            {console.log("com render")
            }
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title mb-3">Update Book</h4>
                            <p className="text-muted small">
                                Edit details for <strong>id: {id}</strong>
                            </p>
                            {/* Update form */}
                            <form onSubmit={updateData}>
                                {/* Hidden field for id */}
                                <input type="hidden" name="id" defaultValue="2f79" />
                                <div className="mb-3">
                                    <label htmlFor="book_name" className="form-label">
                                        Book Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="book_name"
                                        name="book_name"
                                        defaultValue="Html"
                                        value={state.book_name}
                                        onChange={handler}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="book_author" className="form-label">
                                        Author
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="book_author"
                                        name="book_author"
                                        defaultValue="Jone"
                                        value={state.book_author}
                                        onChange={handler}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="book_edition" className="form-label">
                                        Edition
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="book_edition"
                                        name="book_edition"
                                        defaultValue="3 rd"
                                        value={state.book_edition}
                                        onChange={handler}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="book_page_number" className="form-label">
                                            Page Number
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="book_page_number"
                                            name="book_page_number"
                                            defaultValue={200}
                                            value={state.book_page_number}
                                            onChange={handler}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="book_price" className="form-label">
                                            Price (₹)
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="book_price"
                                            name="book_price"
                                            defaultValue={250}
                                            value={state.book_price}
                                            onChange={handler}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="book_descrition" className="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="book_descrition"
                                        name="book_descrition"
                                        rows={3}
                                        defaultValue={"hi"}
                                        value={state.book_descrition}
                                        onChange={handler}


                                    />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="submit" className="btn btn-primary">
                                        Save Changes
                                    </button>
                                    <button type="reset" className="btn btn-outline-secondary">
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
