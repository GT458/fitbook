import React from 'react';


class PhotosTab extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className='about-tab'>
        <div className='content-display'>
          <h2>{this.props.user.fname[0].toUpperCase() + this.props.user.fname.slice(1)}'s Photos</h2>
          <div className='photos-content'>
            0 photos :(
          </div>
        </div>
      </div>
    )
  }
}

export default PhotosTab;