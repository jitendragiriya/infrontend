import React from 'react'
import { COURSES } from '../constants'
import Course from '../components/Course'

const Home = () => {
    return (
        <div>
            <div class="text-center">
                <h1 class=" text-2xl mx-2 sm:text-4xl xl:text-5xl font-bold text-teal-500 my-4">What would you like to learn?</h1>
                <p class="text-gray-700">Explore our diverse range of courses and start your learning journey today!</p>
            </div>
            <div className='mx-4 flex gap-4 sm:gap-6 flex-wrap my-6'>
                {COURSES?.map((cour)=>(
                    <Course course={cour} key={cour.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home