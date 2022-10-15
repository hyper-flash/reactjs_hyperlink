import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom'
import './main.css'
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";
  
export default function Profile() {

    const params = useParams();

    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState([]);


    const baseURL = `https://jsonplaceholder.typicode.com/users/${params.id}`;

    useEffect(() => {
        async function fetchData() {
            
                axios.get(baseURL)
                    .then((response) => {
                        setData(response.data);
                        setTimeout(()=>{
                            setLoading(false);
                        }, 1000)
                    }).catch(err => console.log(err));
            
        }    
            fetchData();
    }, [baseURL]);

    
    if (isLoading) {
        return <div className='text-center'>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
            </Helmet>
                <SyncLoader className={"d-flex align-items-center justify-content-center vh-100"} margin={8} size={20} color="#36d7b7" />
            </div>;            
      }

    return (
        <>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" />
            </Helmet>

            <div className="page-content page-container" id="page-content">
                <div className="padding">

                    <div className="row container d-flex justify-content-center">

                        <div className="col-xl-6 col-md-12">
                            <h2 className='text-center mb-5'>Profile</h2>
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User" />
                                            </div>
                                            <h6 className="f-w-600"><i className="bi bi-person-circle"></i> {data.name} @{data.username}</h6>
                                            <p>Web Designer</p>
                                            <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">{data.email}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">{data.phone}</h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Details</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Address</p>
                                                    <h6 className="text-muted f-w-400">{`${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">company</p>
                                                    <h6 className="text-muted f-w-400">{data.company.name}</h6>
                                                </div>
                                            </div>
                                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                <li><a href="/" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" /></a></li>
                                                <li><a href="/" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" /></a></li>
                                                <li><a href="/" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div><Link to="/"><i className="bi bi-arrow-left" style={{'font-size': '40px'}}></i></Link>
                        </div>
                    </div>
                </div>
                
            </div>
            <Helmet>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>


                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            </Helmet>

        </>
    )
}
