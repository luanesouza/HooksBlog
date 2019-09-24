import React from 'react';
import { Component } from 'react';
import ImageUploader from 'react-images-upload';

class ImageUpload extends Component {
  state = {
    pictures: []
  }

  onDrop = (picture) => {
    console.log(picture);
    this.setState({
      pictures: this.state.pictures.concat(picture)
    })

    

  }
  render() {
    console.log(this);
        return (
          <section>
            <h2>Upload your image here</h2>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
          </section>
        );
    }
}

export default ImageUpload
