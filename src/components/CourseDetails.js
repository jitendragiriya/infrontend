// CourseDetails.js

import React, { useEffect, useState } from 'react';
import { COURSES } from '../constants';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from "../context/auth";
import axios from 'axios';


const CourseDetails = () => {
    const { id } = useParams()
    const { token } = useAuth()
    const navigate = useNavigate()
    const [course, setCourse] = useState(null)

    useEffect(() => {
        const data = COURSES.filter((x) => x.id === +id)
        setCourse(data[0])
        if(!data[0]) navigate("/")

        if (token) {
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/explored`, {
                id, name: data[0]?.CourseName
            }, {
                headers: {
                    "token": token
                }
            }).then((res) => {
            }).catch((err) => console.log(err))
        }
    }, [])


    return (
        <div className="container mx-auto mt-8">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">{course?.CourseName}</h1>
                <p className="text-gray-600 mb-6">{course?.description}</p>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-teal-500 mb-2">Instructor: {course?.instructor}</h2>
                    <p className="text-gray-700">{course?.instructorDescription}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-teal-500 mb-2">Lessons</h2>
                    <ul className="list-disc pl-6">
                        {course?.lessons?.map((lesson, index) => (
                            <li key={index} className="text-gray-700">{lesson}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-teal-500">${course?.actualPrice}</span>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-full" >Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
