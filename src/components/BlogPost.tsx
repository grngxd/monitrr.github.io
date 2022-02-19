import React from 'react';
import '../App.css'
import { BsHandThumbsUp } from "react-icons/bs";
import { Avatar } from '@mui/material';

const Post = ({ post } : { post : any}) => {
    return (
        <div className="w-[auto] h-[auto]] p-[20px] scale-[0.9] flex flex-col shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <div className=''>
                <div className='flex flex-row'>
                <h1 className='text-neutral-400 pb-3 text-left flex-[0.5]'>{new Date(post.dateAdded).toLocaleDateString()}</h1>
                </div>
                <img src={post.coverImage} alt={post.title} className="w-auto rounded-lg mb-4"/>
                <h2 className='font-bold text-xl mb-3'>{post.title}</h2>
                <p className='text-neutral-400 font-light text-sm mb-4'>{post.brief}</p>

                <a href={"https://monitrr.hashnode.dev/" + post.slug}>
                    <div className='flex flex-row pl-1 gap-1 hover:shadow-none transition-all duration-300 items-center shadow-lg rounded-lg border-[2px] hover:border-monitrr-100 border-monitrr-200 bg-white w-20 mb-[10px] h-8'>
                        <div className="align-baseline">
                            <BsHandThumbsUp/>
                        </div>
                        
                        <p>{post.totalReactions}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Post;