import React from 'react';


class AboutTab extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className='about-tab'>
        <div className='content-display'>
          <h2>About {this.props.user.fname[0].toUpperCase() + this.props.user.fname.slice(1)}</h2>
          <div className='bio'>
            <span>{this.props.user.bio}</span>
          </div>
          <div className='work'>
            <span className='bold'>Work: </span><span>{this.props.user.work}</span>
          </div>
          <div className='city'>
            <span className='bold'>Lives in: </span><span>{this.props.user.city}</span>
          </div>
          <div className='school'>
            <span className='bold'>Studied at: </span> <span>{this.props.user.school}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutTab;