// your ImageSlider code here!
import React, { Component} from 'react'

export default class ImageSlider extends Component {
  constructor(){
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  
  slider = () => {
    slideIndex = this.state.currentSlideIndex + 1
    this.setState({currentSlideIndex: slideIndex})
  }
  
  render() {
    return (
      <div onClick={this.slider}>
      'I am on slide {this.state.currentSlideIndex}'
      </div>
      )
  }
  
}
