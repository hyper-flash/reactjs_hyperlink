import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Table() {

    var [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
                setData(res.data)
                //setLoading(false);
            }).catch(error => {
                console.log(error)
            })
        }
        fetchData();
    }, []);

    return (
        <>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
            </Helmet>
        
            <div className="content">
                <div className="container">
                    <h2 className="mb-5">Data</h2>
                    <h3 className='mb-5'><Link to={"/post"}>post</Link></h3>
                    <div className="table-responsive custom-table-responsive">

                        <table className="table custom-table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {data.map((item, temp) => {
                                    return (
                                        <tr key={temp}>
                                            <td>{item.id}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address.city}</td>
                                            <td>{item.address.zipcode}</td>
                                            <td><Link to={"/profile/" + item.id}><i className="bi bi-box-arrow-up-right"></i></Link></td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>


                </div>

            </div>
        </>
    )
}
