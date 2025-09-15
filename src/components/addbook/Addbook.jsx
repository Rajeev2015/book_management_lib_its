import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const Addbook = () => {
    const [bookdetail, setBookdetail] = useState(
        {
            book_name: '',
            book_author: '',
            book_edition: '',
            book_page_number: '',
            book_price: '',
            book_descrition: ''

        }
    )

    const handler=(e)=>{
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);

        
        const {name,value}=e.target; // destructing 
        // console.log(name+" "+value);
        setBookdetail({...bookdetail,[name]:value})
        

    }
    const handleSumit=async(e)=>{
        e.preventDefault();
        // console.log(bookdetail);
        const res=await axios.post("http://localhost:3004/book_details",bookdetail);
        console.log(res);
        window.scrollTo(0, 0);
        if(res.status===201)
        {
             toast.success('Book Added SucessfullY !');
        }
        
        


    }


    return (
        <div className="container">
            <div className="row">
               
                <div className="col-md-3"></div>
                <div className="col-md-6">
                       <Toaster />
                    <div className="container mt-1">
                        <div className="card shadow-lg rounded-3">
                            <div className="card-header bg-dark text-white text-center">
                                <h4>📖 Add New Book</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSumit}>

                                    {/* Book Name */}
                                    <div className="mb-3">
                                        <label htmlFor="bookName" className="form-label">
                                            Book Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="bookName"
                                            placeholder="Enter book name"
                                            name='book_name'
                                            onChange={handler}
                                        />
                                    </div>
                                    {/* Author */}
                                    <div className="mb-3">
                                        <label htmlFor="bookAuthor" className="form-label">
                                            Author
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="bookAuthor"
                                            placeholder="Enter author name"
                                            name='book_author'
                                            onChange={handler}
                                        />
                                    </div>
                                    {/* Edition */}
                                    <div className="mb-3">
                                        <label htmlFor="bookEdition" className="form-label">
                                            Edition
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="bookEdition"
                                            placeholder="Enter edition (e.g. 2nd, 3rd)"
                                            name='book_edition'
                                            onChange={handler}
                                        />
                                    </div>
                                    {/* Page Number */}
                                    <div className="mb-3">
                                        <label htmlFor="bookPages" className="form-label">
                                            Page Number
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="bookPages"
                                            placeholder="Enter total pages"
                                            name='book_page_number'
                                            onChange={handler}
                                        />
                                    </div>
                                    {/* Price */}
                                    <div className="mb-3">
                                        <label htmlFor="bookPrice" className="form-label">
                                            Price (₹)
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="bookPrice"
                                            placeholder="Enter price"
                                            name='book_price'
                                            onChange={handler}
                                        />
                                    </div>
                                    {/* Description */}
                                    <div className="mb-3">
                                        <label htmlFor="bookDescription" className="form-label">
                                            Description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="bookDescription"
                                            rows={3}
                                            placeholder="Enter book description"
                                            defaultValue={""}
                                            name='book_descrition'
                                            onChange={handler}
                                        />
                                    </div>
                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-dark px-4">
                                            Add Book
                                        </button>
                                        <button type="reset" className="btn btn-secondary px-4 ms-2">
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
