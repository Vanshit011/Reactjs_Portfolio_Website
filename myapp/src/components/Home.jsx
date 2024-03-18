import React from 'react'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";
import '../styles/home.scss'
import vg from "../assets/2.webp";
// import { useState, useEffect } from 'react';


function Home() {
    // const url = "https://jsonplaceholder.typicode.com/users";
    // const [data, setData] = useState([]);

    // const fetchInfo = () => {
    //     return fetch(url)
    //         .then((res) => res.json())
    //         .then((d) => setData(d))
    // }

    // useEffect(() => {
    //     fetchInfo();
    // }, []);

    return (
        <>
            <div className='home' id='Home'>
                <main>
                    <h3>Vanshit Thummar</h3>
                    <p>solution to all your problems</p>
                </main>

                

                <div className='home2'>
                    <img src={vg} alt="Graphics" />
                    <div>
                        {/* <p>
                            We are your one and only solution to the tech problems you face
                            every day. We are leading tech company whose aim is to increase the
                            problem solving ability in children.
                        </p> */}
                    </div>
                </div>

                <div className="home3" id='about'>
                    <div>
                        <h1>Who we are?</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
                            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
                            mollitia. Dolor placeat repellendus officia aspernatur dolorum
                            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
                            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
                            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
                            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
                            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
                            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
                            similique maxime praesentium sunt unde necessitatibus voluptates
                            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
                            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
                            sed
                        </p>
                    </div>
                </div>

                {/* <h1 style={{ color: "green" }}> fetch data</h1>
                <center>
                    {data.map((dataObj, index) => {
                        return (
                            <div>
                                <p style={{ fontSize: 20, color: 'white' }}>{dataObj.id}.{dataObj.email}</p>
                            </div>
                        );
                    })}
                </center> */}

                <div className="home4" id="brands">
                    <div>
                        <h1>Brands</h1>
                        <article>
                            <div
                                style={{
                                    animationDelay: "0.3s",
                                }}
                            >
                                <AiFillGoogleCircle />

                                <a href="https://google.com" target={"blank"} ><p>
                                    Google</p></a>

                            </div>

                            <div
                                style={{
                                    animationDelay: "0.5s",
                                }}
                            >
                                <AiFillAmazonCircle />
                                <a href="https://Amazon.com" target={"blank"} ><p>
                                    Amazon</p></a>
                            </div>

                            <div
                                style={{
                                    animationDelay: "0.5s",
                                    // display: "flex"
                                }}
                            >
                                <AiFillYoutube />
                                <a href="https://Youtube.com" target={"blank"} ><p>
                                    Youtube</p></a>
                            </div>

                            <div
                                style={{
                                    animationDelay: "1s",
                                }}
                            >
                                <AiFillInstagram />
                                <a href="https://Instagram.com" target={"blank"} ><p>
                                    Instagram</p></a>
                            </div>
                        </article>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home