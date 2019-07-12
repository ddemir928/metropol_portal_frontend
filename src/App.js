import React, {Component} from 'react';
//import Users from "./components/Users";
import Navbar from "./components/Navbar";
import './App.css';
import PropTypes from 'prop-types'
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

//function App() {

  class App extends Component {

  state = {
    posts: [{
      id: 1,
      title: "Tiyatro Oyunu",
      subtitle:"Güzel vakit geçirmek için",
      description:"Some web pages annoy the hell out of me with page elements they display to me when I'm opening them in a web browser.\n\nMaybe it is this silly \"we use cookies\" notification that every site under the sun seems to use these days, an on-top prompt to sign up for the newsletter, ",
      user_id: "admin",
      image_url:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiA8ceZ-5jjAhXSjqQKHeTCCWsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCCgkP2naE-XIPMcqNEfAISQ&psig=AOvVaw3LS1QMbokD4mvGqcAiNJ2X&ust=1562250614614935",
      category_id:"Duyurular",
      post_type_id: "Etkinlik",
      department_id:"İnsan Kaynakları",
      
    },{
      id: 2,
      title: "Piknikten fotoğraflar",
      subtitle:"Güzel vakit geçirdik",
      description:"Some web pages annoy the hell out of me with page elements they display to me when I'm opening them in a web browser.\n\nMaybe it is this silly \"we use cookies\" notification that every site under the sun seems to use these days, an on-top prompt to sign up for the newsletter, ",
      user_id: "admin",
      image_url:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiA8ceZ-5jjAhXSjqQKHeTCCWsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCCgkP2naE-XIPMcqNEfAISQ&psig=AOvVaw3LS1QMbokD4mvGqcAiNJ2X&ust=1562250614614935",
      category_id:"Foto Galeri",
      post_type_id: "Etkinlik",
      department_id:"İnsan Kaynakları",
      
    },
    {
      id: 3,
      title: "Sigorta belgeleri",
      subtitle:"Kimliğinizi unutmayın",
      description:"Some web pages annoy the hell out of me with page elements they display to me when I'm opening them in a web browser.\n\nMaybe it is this silly \"we use cookies\" notification that every site under the sun seems to use these days, an on-top prompt to sign up for the newsletter, ",
      user_id: "admin",
      image_url:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiA8ceZ-5jjAhXSjqQKHeTCCWsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCCgkP2naE-XIPMcqNEfAISQ&psig=AOvVaw3LS1QMbokD4mvGqcAiNJ2X&ust=1562250614614935",
      category_id:"Belgeler",
      post_type_id: "Duyuru",
      department_id:"İnsan Kaynakları",
      
    }

    ]
  }
  deletePost =(id)=> {
    this.setState({
      posts :this.state.posts.filter(post => id !==post.id)
    })
  }
  render () {

    return (
      <div className="container">
        <Navbar title ="Portal"/>
        <AddPost/>

        <Posts deletePost= {this.deletePost} posts = {this.state.posts}/>

    </div>
  );
}
  }
Posts.propTypes = {
  posts:PropTypes.array.isRequired,
  deletePost:PropTypes.func.isRequired
}
export default App;
