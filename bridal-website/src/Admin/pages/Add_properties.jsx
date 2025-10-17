import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";

function Add_properties() {

    useEffect(() => {
        getData();
    }, []);

    const [categories, setCategories] = useState([]);

    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        setCategories(res.data);
    };

    const [formdata, setFormdata] = useState({
        id: "",
        cate_id: "",
        package_name: "",
        description: "",
        duration: "",
        price: "",
        package_image: ""
    });

    const changeHandel = (e) => {
        setFormdata({
            ...formdata,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        });
    };

     function validation() {
        let ans = true;
        if (formdata.cate_id === "") {
            toast.error('Category is required');
            return false;
        }
        if (formdata.package_name === "") {
            toast.error('Package Name is required');
            return false;
        }
        if (formdata.description === "") {
            toast.error('Description is required');
            return false;
        }
        if (formdata.duration === "") {
            toast.error('Duration is required');
            return false;
        }
        if (formdata.price === "") {
            toast.error('Price is required');
            return false;
        }
        if (formdata.package_image === "") {
            toast.error('Image URL is required');
            return false;
        }
        return ans;
    }


    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/properties`, formdata);
            console.log(res);
            swal("Good job!", "Makeup Package added successfully!", "success");
            setFormdata({
                cate_id: "",
                package_name: "",
                description: "",
                duration: "",
                price: "",
                package_image: ""
            });
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card shadow-lg border-0 rounded-4 p-4" style={{ background: "#fff5f8" }}>
                        <div className="card-body">
                            <h2 className="text-center mb-4" style={{ color: "#d63384", fontWeight: "600" }}>
                                Add Bridal Makeup Package
                            </h2>
                            <form onSubmit={submitHandel}>
                                {/* Category */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Select Category</label>
                                    <select
                                        onChange={changeHandel}
                                        value={formdata.cate_id}
                                        className="form-select"
                                        name="cate_id"
                                    >
                                        <option value="">-- Select Category --</option>
                                        {categories.map((value) => (
                                            <option key={value.id} value={value.id}>
                                                {value.cate_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Package Name */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Package Name</label>
                                    <input
                                        type="text"
                                        onChange={changeHandel}
                                        value={formdata.package_name}
                                        className="form-control"
                                        placeholder="Enter Package Name"
                                        name="package_name"
                                    />
                                </div>

                                {/* Description */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Description</label>
                                    <textarea
                                        onChange={changeHandel}
                                        value={formdata.description}
                                        className="form-control"
                                        rows="3"
                                        placeholder="Write details about this package..."
                                        name="description"
                                    />
                                </div>

                                {/* Duration */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Duration</label>
                                    <input
                                        type="text"
                                        onChange={changeHandel}
                                        value={formdata.duration}
                                        className="form-control"
                                        placeholder="e.g., 2 hours"
                                        name="duration"
                                    />
                                </div>

                                {/* Price */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Price (INR)</label>
                                    <input
                                        type="number"
                                        onChange={changeHandel}
                                        value={formdata.price}
                                        className="form-control"
                                        placeholder="Enter Price"
                                        name="price"
                                    />
                                </div>

                                {/* Image */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Package Image URL</label>
                                    <input
                                        type="url"
                                        onChange={changeHandel}
                                        value={formdata.package_image}
                                        className="form-control"
                                        placeholder="Enter Image URL"
                                        name="package_image"
                                    />
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn px-5 py-2" style={{ background: "#d63384", color: "#fff", borderRadius: "30px" }}>
                                        Add Package
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Add_properties;

{/* import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import swal from 'sweetalert'; 

function Add_properties() {

    useEffect(() => {
        getData();
    }, []);

    const [categories, setCategories] = useState([]);

    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setCategories(res.data);
    }

    const [formdata, setFormdata] = useState({
        id: "",
        cate_id: "",
        prop_name: "",
        bedroom: "",
        bathroom: "",
        floor: "",
        prop_area: "",
        price: "",
        prop_image: ""
    });

    const changeHandel = (e) => {
        setFormdata({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formdata);
    }

    function validation() {
        let ans = true;
        if (formdata.cate_id == "") {
            toast.error('Category Name Field is required');
            return false;
            ans = false;
        }
        if (formdata.prop_name == "") {
            toast.error('Product Name Field is required');
            return false;
            ans = false;
        }
        if (formdata.bedroom == "") {
            toast.error('Bedroom Field is required');
            return false;
            ans = false;
        }
        if (formdata.bathroom == "") {
            toast.error('bathroom Field is required');
            return false;
            ans = false;
        }
         if (formdata.floor == "") {
            toast.error('Floor Field is required');
            return false;
            ans = false;
        }
         if (formdata.prop_area == "") {
            toast.error('Area Field is required');
            return false;
            ans = false;
        }
         if (formdata.price == "") {
            toast.error('Price Field is required');
            return false;
            ans = false;
        }
         if (formdata.prop_image == "") {
            toast.error('Image Field is required');
            return false;
            ans = false;
        }

        return ans;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/properties`, formdata);
            console.log(res);
            swal("Good job!", "Property added Success!", "success");
            setFormdata({ ...formdata, cate_id: "", prop_name: "", bedroom: "", bathroom: "", floor: "", prop_area: "", price: "", prop_image: "" });
        }
    }
    return (
        <div>


            <div className="featured section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h6>| Properties</h6>
                                <h2>Add Properties</h2>
                            </div>

                            <div className="container mt-3">

                                <form method="post" onSubmit={submitHandel}>
                                    <div className="form-floating mb-3 mt-3">
                                        <select onChange={changeHandel} className="form-control" name="cate_id">
                                            <option value="">Select Categories Name</option>
                                            {
                                                categories.map((value) => {
                                                    return (
                                                        <option value={value.id}>{value.cate_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <label htmlFor="email">Select Categories Name</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" onChange={changeHandel} value={formdata.prop_name} className="form-control" placeholder="Enter Properies Name" name="prop_name" />
                                        <label htmlFor="email">Properies Name</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="number" onChange={changeHandel} value={formdata.bedroom} className="form-control" placeholder="Enter No of bedroom" name="bedroom" />
                                        <label htmlFor="email">No of Bedroom</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="number" onChange={changeHandel} value={formdata.bathroom} className="form-control" placeholder="Enter No of bathroom" name="bathroom" />
                                        <label htmlFor="email">No of Bathroom	</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="number" onChange={changeHandel} value={formdata.floor} className="form-control" placeholder="Enter No of floor" name="floor" />
                                        <label htmlFor="email">No of Floor		</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" onChange={changeHandel} value={formdata.prop_area} className="form-control" placeholder="Enter Properies Area" name="prop_area" />
                                        <label htmlFor="email">Properies Area</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="number" onChange={changeHandel} value={formdata.price} className="form-control" placeholder="Enter Properies Price" name="price" />
                                        <label htmlFor="email">Properies Price</label>
                                    </div>
                                    <div className="form-floating mt-3 mb-3">
                                        <input type="url" onChange={changeHandel} value={formdata.prop_image} className="form-control" id="pwd" placeholder="Enter Propertyies image url" name="prop_image" />
                                        <label htmlFor="pwd">Properties URL</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add_properties*/ }