import React, { Component } from 'react';
import PDF from './PDF';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Post extends Component {

    state = {
        title: '',
        content: '',
        image: '',
        postSubmitted: false
    }


    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {

        if (!this.state.title || !this.state.content) {
            alert('All fields are required!');
            e.preventDefault();
        } else {
            this.setState({
                postSubmitted: true
            });
        }
    }

    render() {

        return (
            <>
                {!this.state.postSubmitted ?
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Add new Post</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('title')} name="title" type="text" placeholder="Post Title" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>

                                                    <select onChange={this.onChange('image')} name="image" placeholder="Seleccione una imagen" className="form-control" >
                                                        <option>--Seleccione una opcion--    </option>
                                                        <option value="https://i.imgur.com/iiDHoGV.jpg">Perro</option>
                                                        <option value="https://i.imgur.com/x2V772l.jpg">Gato</option>
                                                        <option value="https://i.imgur.com/f1mh74Z.png">Conejo</option>

                                                    </select>

                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>

                                                    <CKEditor
                                                        // onChange={this.onChange('content')} 
                                                        className="form-control" name="content"
                                                        editor={ClassicEditor}
                                                        data="<p>Hello from CKEditor 5!</p>"
                                                        onReady={editor => {
                                                            // You can store the "editor" and use when it is needed.
                                                            console.log('Editor is ready to use!', editor);
                                                        }}
                                                        onChange={(event, editor) => {
                                                            const data = editor.getData();
                                                            console.log({ event, editor, data });
                                                            this.setState({ content: data });
                                                        }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Enviar</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF title={this.state.title} content={this.state.content} image={this.state.image} />
                    )
                }
            </>
        );
    }
}

export default Post;