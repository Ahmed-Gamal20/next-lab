import React from 'react'
import Link from 'next/link'

const Card = ({title,body,userId,id}) => {
  return (
    <div className=' bg-gray-400 p-4 flex flex-col gap-3 rounded'>
            <p>{userId}</p>
            <h1 className="font-bold">{title}</h1>
            <p  >{body}</p>
            <Link className="bg-blue-600 p-3 text-center rounded" href={`/posts/${id}`}>View Details</Link>
        </div>
        
  )
}

export default Card