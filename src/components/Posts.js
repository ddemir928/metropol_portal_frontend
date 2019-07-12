import React, { Component } from 'react'
import Post from "./Post"
import PropTypes from 'prop-types'

 class Posts extends Component {
    render() {
        const {posts,deletePost} = this.props;
        
        return (
            <div>
                {
                    posts.map(post=>{
                        return(
                            <Post
                            key= {post.id}
                            id={post.id}
                            title = {post.title}
                            subtitle = {post.subtitle}
                            description ={post.description}
                            image_url= {post.image_url}
                            user_id= {post.user_id}
                            category_id= {post.category_id}
                            post_type_id= {post.post_type_id}
                            department_id= {post.department_id}
                            deletePost={deletePost} />

                        )
                    })
                }
            </div>
        )
    }
}

Posts.propTypes = {
    posts:PropTypes.array.isRequired,
    deletePost:PropTypes.func.isRequired
  }

export default Posts;