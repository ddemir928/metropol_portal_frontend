import React, { Component } from 'react'
import SelectTag from "./AddSelect"


const axios = require('axios');

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {

            title: '',
            subtitle:'',
            description:'',
            image_url:'',
            user_id:'',
            category_id:'',
            post_type_id:'',
            department_id:'',
            post_types:[],
            departments:[],
            categories:[]

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      componentDidMount(){
        var globalthis = this;
        axios.get('http://localhost:8888/api/categories')
            .then(function (response) {
              console.log(response);
              globalthis.setState({categories : response.data});
              console.log("state içerikleri");
              console.log(globalthis.state);
            })
            .catch(function (error) {
              console.log(error);
            });

            axios.get('http://localhost:8888/api/departments')
            .then(function (response) {
              console.log(response);
              globalthis.setState({departments : response.data});
              console.log("state içerikleri");
              console.log(globalthis.state);
            })
            .catch(function (error) {
              console.log(error);
            });

            axios.get('http://localhost:8888/api/post_types')
            .then(function (response) {
              console.log(response);
              globalthis.setState({post_types : response.data});
              console.log("state içerikleri");
              console.log(globalthis.state);
            })
            .catch(function (error) {
              console.log(error);
            });
      }
    


      handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
      }
    
      handleSubmit() {
        console.log(this.state);
        axios.post('http://localhost:8888/api/posts', this.state
     
      )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        //event.preventDefault();
      }
    render() {
     // <AddSelect selectElement = {this.selectElement} name= {this.state.selectElement}
//       var catList = this.state.categories;
// var selectElement = [];
// for (let index = 0; index < catList.length; index++) {
//   selectElement.push(<option key={catList[index]._id} value={catList[index]._id}>{catList[index].name}</option>);
// }
    return (<React.Fragment>
        <div className="col-md-8 mb-4">
            <div className="card">
                <div className="card-header">
                    <h4>Post Ekleme Formu</h4>

            </div>
            <div>
                <form>
                    <div className="form-group">
                    <label htmlFor="title">Başlık</label>
                    <input
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                    id="t_id"
                    className="form-control"/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="subtitle">Altbaşlık</label>
                    <input
                    type="text"
                    value={this.state.subtitle}
                    onChange={this.handleChange}
                    name="subtitle"
                    id="s_id"
                    className="form-control"/>
                        
                    </div>
                    <div className="form-group">
                    <label htmlFor="description">İçerik</label>
                    <textarea rows="10"
                    
                    onChange={this.handleChange}
                    id="d_id"
                    value={this.state.description}
                    name="description"
                    className="form-control"></textarea>
                        
                    </div>
                    <div className="form-group">
                    <label htmlFor="image_url">Fotoğraf URL</label>
                    <input
                    type="url"
                    value={this.state.image_url}
                    onChange={this.handleChange}
                    id="i_id"
                    name="image_url"
                    className="form-control"/>
                        
                    </div>
                    <div className="form-group">
                    <label htmlFor="user_id">Kullanıcı</label>  
                    <input
                    type="text"
                    value={this.state.user_id}
                    onChange={this.handleChange}
                    name="user_id"
                    id="u_id"
                    className="form-control"/>
                        
                    </div>
                    <div className="form-group">
                    <label htmlFor="category_id">Kategori</label>
                    <div className="category-select">
                      <SelectTag name='category_id' data={this.state.categories} onchange={this.handleChange}/>
                    {/* <select className="form-control" name="category_id" onChange={this.handleChange} id="c_id">
                    {selectElement }
                    </select> */}
                    </div>


                    </div>
                    <div className="form-group">
                    <label htmlFor="post_type_id">Post Türü</label>
                    <div className="post_type-select">
                    <SelectTag name='post_type_id' data={this.state.post_types} onchange={this.handleChange}/>

                  </div>
                        
                    </div>
                    <div className="form-group">
                    <label htmlFor="department_id">Departman</label>
                    <div className="department-select">
                    <SelectTag name='department_id' data={this.state.departments} onchange={this.handleChange}/>

                    </div>
                        
                    </div> 
                    <a href="javascript:void(0);" className="btn btn-danger btn-block" onClick={this.handleSubmit}>Post Ekle</a>

                </form>
            </div>

            </div>
            
        </div>
        </React.Fragment>
    )
}
}

export default AddPost;



