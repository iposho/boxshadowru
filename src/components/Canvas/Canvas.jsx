import React from 'react';

import { ChromePicker } from 'react-color';
import SettingsItem from '../SettingsItem/SettingsItem';

import './Canvas.css';

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

  handleChange = key => (e) => {
    switch (key) {
      case 'inset':
        this.setState({
          inset: !this.state.inset,
        })
        break;
      default:
        this.setState({
          [key]: e.target.value,
        })
        break;
    }
  }

  handleChangeComplete = (color) => {
    const value = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;

    this.setState({
      color: value,
      colorRgb: color.rgb,
      isRgb: true,
    });
  }

  render() {
    const { inset, isRgb, offsetX, offsetY, blurRadius, spreadRadius, color } = this.state;
    const style = {
      boxShadow: `${inset ? 'inset' : ''} ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`,
    }

    return (
        <main className="main container">
          <div className="row">
            <div className="col-12 justify-content-center bs-example-wrapper">
              <div className="bs-example" style={style}></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-9">
              <SettingsItem
                  name='inset'
                  onChange={this.handleChange('inset')}
                  value={inset}
                  type='checkbox'
                  checked={inset}
              />
              <SettingsItem
                name='offsetX'
                onChange={this.handleChange('offsetX')}
                min={-100}
                max={100}
                value={offsetX}
              />
              <SettingsItem
                  name='offsetY'
                  onChange={this.handleChange('offsetY')}
                  min={-100}
                  max={100}
                  value={offsetY}
              />
              <SettingsItem
                  name='blurRadius'
                  onChange={this.handleChange('blurRadius')}
                  min={0}
                  max={100}
                  value={blurRadius}
              />
              <SettingsItem
                  name='spreadRadius'
                  onChange={this.handleChange('spreadRadius')}
                  min={-100}
                  max={100}
                  value={spreadRadius}
              />
              <div className="col-12 d-none d-lg-flex mb-4">
                <code>
                  box-shadow: {style.boxShadow};
                </code>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-end">
              <div className="settingsItem colorPicker">
                <ChromePicker
                    color={isRgb ? this.state.colorRgb : this.state.color}
                    onChangeComplete={this.handleChangeComplete}
                />
              </div>
            </div>
            <div className="col-12 d-lg-none mb-4">
              <code>
                box-shadow: {style.boxShadow};
              </code>
            </div>
          </div>
        </main>
    );
  }
}

export default Canvas;
