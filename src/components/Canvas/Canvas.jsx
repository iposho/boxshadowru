import React from 'react';

import { v4 as uuid } from 'uuid';

import { SketchPicker } from 'react-color';
import SettingsItem from '../SettingsItem/SettingsItem';

import items from './items';

import './Canvas.scss';

class Canvas extends React.Component {
  state = {
    inset: false,
    offsetX: 8,
    offsetY: 8,
    blurRadius: 45,
    spreadRadius: -15,
    color: '#999999',
    colorRgb: '',
    isRgb: false,
  };

  validateNumericInputs = (max, min, name, value) => {
    if (value <= Number(max) && value >= Number(min)) {
      this.setState({
        [name]: value,
      });
    } else {
      this.setState({
        [name]: Math.sign(value) === -1 ? min : max,
      });
    }
  }

  handleChange = (key) => (e, value) => {
    const { inset } = this.state;

    switch (key) {
    case 'inset':
      this.setState({
        inset: !inset,
      });
      break;
    default:
      this.setState({
        [key]: e.target.value || value,
      });
      break;
    }
  }

  onKeyUp = (e) => {
    const {
      max, min, name, value,
    } = e.target;
    this.validateNumericInputs(max, min, name, value);
  };

  handleChangeComplete = (color) => {
    const value = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;

    this.setState({
      color: value,
      colorRgb: color.rgb,
      isRgb: true,
    });
  }

  render() {
    const {
      inset, isRgb, offsetX, offsetY, blurRadius, spreadRadius, color, colorRgb,
    } = this.state;
    const style = {
      boxShadow: `${inset ? 'inset' : ''} ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`,
    };

    return (
      <main className="main container">
        <div className="row">
          <div className="col-12 justify-content-center bs-example-wrapper">
            <div className="bs-example" style={style} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-9">
            {
              items.map((item) => (
                <SettingsItem
                  key={uuid()}
                  name={item.name}
                  onChange={this.handleChange(item.name)}
                  value={this.state[item.name]}
                  type={item.type ? item.type : false}
                  min={item.min}
                  max={item.max}
                  checked={this.state[item.name]}
                  onKeyUp={this.onKeyUp}
                />
              ))
            }
            <div className="col-12 d-none d-lg-flex mb-4">
              <code>
                box-shadow:
                {' '}
                {style.boxShadow}
                ;
              </code>
            </div>
          </div>
          <div
            className="col-12 col-lg-3 d-flex mt-4 mb-4 mt-lg-0 mb-lg-0
             justify-content-center align-items-lg-start justify-content-lg-end"
          >
            <div className="settingsItem colorPicker">
              <SketchPicker
                className="picker"
                color={isRgb ? colorRgb : color}
                onChangeComplete={this.handleChangeComplete}
              />
            </div>
          </div>
          <div className="col-12 d-lg-none mt-lg-5 mb-4">
            <code>
              box-shadow:
              {' '}
              {style.boxShadow}
              ;
            </code>
          </div>
        </div>
      </main>
    );
  }
}

export default Canvas;
