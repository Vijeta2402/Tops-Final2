import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_categories() {

    useEffect(() => {
        getData();
    }, []);

    const [categories, setCategories] = useState([]);

    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setCategories(res.data);
    }

    return (
        <div className="featured section">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h6>| Categories</h6>
                            <h2>Manage Categories</h2>
                        </div>

                        <div className="container mt-3">

                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Categories Name</th>
                                        <th>Categories IMAGE</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        categories.map((value, index, entarr) => {

                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td><img style={{ width: "100px" }} src="data:image/jpeg;base64,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" alt="" /></td>
                                                    <td className='text-center'>
                                                        <button className='btn btn-danger me-1'>Delete</button>
                                                        <button className='btn btn-primary me-1'>Edit</button>
                                                    </td>
                                                </tr>
                                            )
                                        })

                                    }


                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Manage_categories