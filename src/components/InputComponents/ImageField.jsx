import React from 'react';
import PropTypes from 'prop-types';

class ImageField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image || '',
    };
  }

  handleImageChange = (event) => {
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
    });
  }

  render() {
    return (
      <div>
        <label>
          Image:
          <input type="file" onChange={this.handleImageChange} />
        </label>
        {this.state.image && <img src={this.state.image} alt="Preview" />}
      </div>
    );
  }
}

ImageField.propTypes = {
  image: PropTypes.string,
};

export default ImageField;