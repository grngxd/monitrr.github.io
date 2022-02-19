import React from 'react';
import Post from './BlogPost';
import '../App.css';
import { CircularProgress } from '@mui/material';


const query = `
{
  user(username: "monitrr") {
    publication {
      posts{
        title
        brief
        coverImage
        totalReactions
        slug
        dateAdded
      }
    }
  }
}
  `;

class Blog extends React.Component {
    state = {
        posts: [],
        loading: true
    };

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = async () => {
        const response = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
        const parsed = await response.json();

        console.log(parsed.data.user.publication.posts);
        this.setState({ posts: parsed.data.user.publication.posts, loading: false });


    };

    render() {

        if (this.state.loading) return <div className='w-full h-[calc(100vh-6rem)] flex items-center justify-center'><CircularProgress className='text-monitrr-200 hover:text-monitrr-100 transition-all duration-300' color='inherit' variant='indeterminate'/></div>;

        return (
          <div className=' mt-16 p-16 hidden justify-center items-center flex-col md:flex'>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <h1 className='mt-10 moni-gradient font-medium transition-all hover:font-bold duration-150 cursor-pointer mb-1 drop-shadow-lg shadow-white text-2xl'>// Blog</h1>
                <div className="grid grid-cols-2 gap-4">
                    {this.state.posts.map((post : any, index) => (
                        <a key={index} href={"https://monitrr.hashnode.dev/" + post.slug}>
                            <Post post={post} />
                        </a>
                    ))}
              </div>
            </div>
        );
    }
}

export default Blog;