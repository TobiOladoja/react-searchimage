import React, { Component } from "react"
import ImageSearch from '../ImageSearch/ImageSearch'
import ImageList from '../ImageList/ImageList'


const API_KEY = "15084141-f3abad0d73220937b0af48bad"


class App extends Component {
    state = {
        images: []
    }
    getImage = async e => {
        e.preventDefault()
        const searchValue = e.target.elements.searchValue.value
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&image_type=photo`
        const request = await fetch(url)
        const response = await request.json()
        this.setState({ images: response.hits })
        console.log(searchValue)
       console.log(this.state.images)
    }
    

    
    render(){
        return (
            <div>
                <h1>Phase 1</h1>
                <ImageSearch getImage={this.getImage}/>
              <ImageList images={this.state.images}/>
            
            </div>
        )
    }
}

export default App

