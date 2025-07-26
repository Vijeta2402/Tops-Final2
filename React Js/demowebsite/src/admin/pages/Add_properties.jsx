import React from 'react'

function Add_properties() {
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
                               
                                <form action="/action_page.php">
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="form-floating mt-3 mb-3">
                                        <input type="text" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                        <label htmlFor="pwd">Password</label>
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

export default Add_properties