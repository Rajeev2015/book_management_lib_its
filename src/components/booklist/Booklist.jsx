import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


export const Booklist = () => {
    const [bookstore, setBookstore] = useState([]);

    const getAllBookDetails = async () => {
        try {
            const res = await axios.get("http://localhost:3004/book_details")
            setBookstore(res.data)
        } catch (err) {
            console.log(err);

        }
    }

    const deleteRedord = async (id) => {
        try {
            // const res=await axios.delete("http://localhost:3004/book_details/"+id)
            Swal.fire({
                title: "Are you sure want to delete this id "+id+" ?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
              
               
                  if (result.isConfirmed) {
                   
                     const res=await axios.delete("http://localhost:3004/book_details/"+id)
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    getAllBookDetails()
                }
      
            
                

            });


        } catch (err) {

        }


    }

    useEffect(() => {
        getAllBookDetails();

    }, [])
    return (
        <div className="container py-5">
            <div className="card table-card">
                <div className="card-header d-flex justify-content-between align-items-center">

                    <h5 className="mb-0">Book List</h5>
                    <div className="d-flex gap-2 align-items-center">
                        {/* simple search box to filter table */}
                        <input
                            id="searchInput"
                            onkeyup="filterTable()"
                            className="form-control form-control-sm"
                            placeholder="Search books (name, author, edition, price)..."
                            style={{ minWidth: 260 }}
                        />
                        <button
                            className="btn btn-sm btn-outline-light"
                            onclick="clearFilter()"
                        >
                            Reset
                        </button>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table
                            id="booksTable"
                            className="table table-striped table-hover align-middle mb-0"
                        >
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#ID</th>
                                    <th scope="col">Book Name</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Edition</th>
                                    <th scope="col">Pages</th>
                                    <th scope="col">Price (₹)</th>
                                    <th scope="col">Description</th>
                                    <th scope="col" >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example rows — replace/add with dynamic data as needed */}
                                {
                                    bookstore.map((item, index) =>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.book_name}</td>
                                            <td>{item.book_author}</td>
                                            <td>{item.book_edition}</td>
                                            <td>{item.book_page_number}</td>
                                            <td>{item.book_price}</td>
                                            <td>{item.book_descrition}</td>

                                            <td className="text-center action-btns">
                                                <Link to={`/edit/${item.id}`} className="btn btn-sm btn-primary" title="Edit">
                                                    Edit
                                                </Link>
                                                &nbsp;
                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    title="Delete"
                                                    onClick={() => { deleteRedord(item.id) }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}
