// CourseCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    const navigate = useNavigate()
    const enrollNow = () => {
        navigate(`/${course.id}`)
    }
    return (
        <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg  w-full">
            <img className="w-full h-48 object-cover object-center" src={course.url} alt={course.title} />
            <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.CourseName}</h2>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-teal-500 font-bold">${course.currentPrice}</span>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-full" onClick={enrollNow}>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;
