import React, { Component } from "react"
import ImageSearch from './components/ImageSearch/ImageSearch'


const API_KEY = "15084141-f3abad0d73220937b0af48bad"
const url = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`


class App extends Component {
    state = {
        images: []
    }
    getImage = async e => {
        e.preventDefault()
        const request = await fetch(url)
        const response = await request.json();
        this.setState({ images: response.hits })
       console.log(this.state.images)
    }
    

    
    render(){
        return (
            <div>
                <h1>Phase 1</h1>
                <ImageSearch getImage={this.getImage}/>
            
            </div>
        )
    }
}

export default App