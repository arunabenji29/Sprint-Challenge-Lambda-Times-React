import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselImages: [],
      currentIndex:0,
    }
  }
  componentDidMount() {
    this.setState({
      carouselImages: carouselData
    })
  }

  leftClick = (event) => {
    event.preventDefault();
    if(this.state.currentIndex <1){
      this.setState({
        currentIndex:this.state.carouselImages.length-1
      })
    }
      else{
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1
        })
        );
      }
    

    
    console.log('left click current INdex '+this.state.currentIndex)
    this.selectedImage()
  }

  rightClick = (event) => {
    event.preventDefault();
    if(this.state.currentIndex >= this.state.carouselImages.length-1){
      this.setState({
        currentIndex:0
      })
    }
    else{
    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
    
  }
    console.log('right click current INdex '+this.state.currentIndex)
    
  }

  selectedImage = (curIndex) => {
    return <img src={this.state.carouselImages[curIndex]} style={{ display: 'flex' }} />
  }

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage(this.state.currentIndex)}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}