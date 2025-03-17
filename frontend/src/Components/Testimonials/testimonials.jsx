import React from 'react'
import './testimonials.css' 
import Circle_kenia from '../../assets/Circle_kenia.png'
import Circle_Ryan from '../../assets/Circle_Ryan.png'
import Vishal_Verma from '../../assets/Vishal_Verma.png'


const responses_about_app= [
  {
    image:Circle_kenia,
    name: 'John Doe',
    country: 'USA',
    response: '"MindForge is the best platform for learning.It has helped me a lot in my career. I would recommend it to everyone."',
    rating: 5
  },{
    image:Circle_Ryan,
    name: 'Jane Doe',
    country: 'Canada',
    response: '"MindForge has completely transformed the way I learn. The structured courses and interactive content have been a game-changer for my career."',
    rating: 5
  },{
    image:Vishal_Verma,
    name: 'John Doe',
    country: 'USA',
    response: '"MindForge has completely transformed the way I learn. The structured courses and interactive content have been a game-changer for my career."',
    rating: 5
  }
]

const testimonials = () => {
  return (
    <div className='main-container w-full h-[40vw]'>
        <h1 className='text-3xl font-bold flex justify-center'>From The MindForge Community</h1>
        <h3 className='flex justify-center text-lg font-semibold'>10000+ people have already joined MindForge</h3>
        <div className="people-responses w-full h-[30vw]  flex justify-evenly items-center">
            {responses_about_app.map((response,index)=>(
                <div key={index} className="response-panel w-[14vw] h-[25vw] flex flex-col items-center justify-center ">
                    <img src={response.image} alt={response.name} className="border-2 border-yellow-300 w-30 h-30 rounded-full object-cover  transition-all duration-300 ease-in-out transform hover:scale-150 hover:border-blue-500" />
                    <h1 className=' text-xl font-semibold'>{response.name}</h1>
                    <h3 className='response text-sm font-semibold'>{response.response} from {response.country}</h3>
                    <h3 className='text-md font-semibold text-yellow-600'>Rating: {response.rating}</h3>
                </div>
            ))}

        </div>
    </div>
  )
}

export default testimonials