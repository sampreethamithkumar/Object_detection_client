import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import { objectsInImage } from '../services/identifyImageService';

export default class inputFile extends Component {

    constructor() {
        super()
        this.state = {
          files: [],
          base64URL: "",
          id: "1",
          objects: [],
        }
      }

      imageAttached = async () => {
        try {
            console.log(this.state.base64URL);
            const objects = await objectsInImage(this.state.id,this.state.base64URL);
            this.setState({objects});
            console.log(this.state.objects);
        }
        catch (ex) {
            console.log("Exception occured:", ex);
        }
      }

    getFiles(files){
        const base64Data = files[0].base64.split(',');
        // console.log(base64Data);
        this.setState({ files: files, base64URL: base64Data[1] })
        this.imageAttached();
      }

    render() {
        return (
            <div>
                <label className="custom-file-upload">
                <FileBase64
                    multiple={ true }
                    onDone={ this.getFiles.bind(this) } />
                    Attach
                </label>

                {this.state.base64URL !== "" ? 
                <div className="pre-container">
                    <p>{this.state.objects}</p>
                </div>  : null  
            }
            </div>
        )
    }
}
