import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Post extends Component {

    static defaultProps ={
        title: "Bilgi Yok",
        subtitle:"Bilgi Yok",
        description:" Bilgi Yok",
        image_url: "Bilgi Yok",
        user_id:"Bilgi Yok",
        category_id:" Bilgi Yok",
        post_type_id: "Bilgi Yok",
        department_id:"Bilgi Yok",
    }

    state = {
        isVisible:false
    }

    onClickEvent= (number,e) => {
        console.log(number);
    }

    onClickEvent = (e) => {
       
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    onDeletePost = (e) => {
        const{id,deletePost}=this.props;

        deletePost(id);
    }
    render() {

        ///// Destructing

        const{title,subtitle,description,image_url,user_id,category_id,post_type_id,department_id} = this.props;
        const {isVisible} = this.state;
        return (
            <div className = "col-md-8 mb-4">
                <div className= "card">
                    <div className ="card-header d-flex justify-content-between">
                      <h4 className= "d-inline" onClick ={this.onClickEvent.bind(this,42)}> {title}</h4> 
                      
                      <hr/>
                      <h5 className= "d-down"> {subtitle}</h5>   
                      <i onClick= {this.onDeletePost} className= "far fa-trash-alt" style = {{cursor : "pointer"}}></i>
                    </div>

                    {
                         isVisible ? <div className ="card-body">
                    
                         <p className ="card-text"> Tanım: {description}</p>
                         <p className ="card-text"> Image_Url : {image_url}</p>
                         <p className ="card-text"> Kullanıcı : {user_id}</p>
                         <p className ="card-text"> Kategori: {category_id}</p>
                         <p className ="card-text"> Post Tipi : {post_type_id}</p>
                         <p className ="card-text"> Departman : {department_id}</p>
     
                         </div> : null
                    }
                
              </div>
            </div>
        )
    }
}

Post.propTypes= {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    image_url:PropTypes.string.isRequired,
    user_id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    post_type_id:PropTypes.string.isRequired,
    department_id:PropTypes.string.isRequired
}

export default Post;