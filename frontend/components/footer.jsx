import React from 'react';

class Footer extends React.Component{
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='footer'>
        <ul className='ul-footer'>
          <li>Built with React and Ruby on Rails</li>
        </ul>
      </div>
    )
  }
}

export default Footer;