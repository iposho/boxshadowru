import React from 'react';

import { SketchPicker } from 'react-color';

import './Canvas.css';

class Canvas extends React.Component {
  state = {
    inset: false,
    offsetX: 8,
    offsetY: 8,
    blurRadius: 45,
    spreadRadius: -15,
    color: '#999999',
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
    this.setState({
      color: color.hex
    });
  }

  render() {
    const { inset, offsetX, offsetY, blurRadius, spreadRadius, color } = this.state;
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
            <div className="col-12 col-md-9">
              <div className="settingsItem">
                <label htmlFor="inset">Inset</label>
                <input type="checkbox" name="inset" onChange={this.handleChange('inset')} data-toggle="toggle" checked={inset} />
              </div>
              <div className="settingsItem">
                <label htmlFor="offsetX">offsetX</label>
                <input type="range" onChange={this.handleChange('offsetX')} value={offsetX} name="offsetX" min="-100" max="100" />
                <input type="number" onChange={this.handleChange('offsetX')} className="value" value={offsetX} min="-100" max="100" />
              </div>
              <div className="settingsItem">
                <label htmlFor="offsetY">offsetY</label>
                <input type="range" onChange={this.handleChange('offsetY')} value={offsetY} name="offsetY" min="-100" max="100" />
                <input type="number" onChange={this.handleChange('offsetY')} className="value" value={offsetY} min="-100" max="100" />
              </div>
              <div className="settingsItem">
                <label htmlFor="blurRadius">blurRadius</label>
                <input type="range" onChange={this.handleChange('blurRadius')} value={blurRadius} name="blurRadius" min="0" max="100" />
                <input type="number" onChange={this.handleChange('blurRadius')} className="value" value={blurRadius} min="0" max="100" />
              </div>
              <div className="settingsItem">
                <label htmlFor="blurRadius">spreadRadius</label>
                <input type="range" onChange={this.handleChange('spreadRadius')} value={spreadRadius} name="spreadRadius" min="-100" max="100" />
                <input type="number" onChange={this.handleChange('spreadRadius')} className="value" value={spreadRadius} min="-100" max="100" />
              </div>
              <div className="col-12">
                <code>
                  box-shadow: {style.boxShadow}
                </code>
              </div>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-end">
              <div className="settingsItem colorPicker">
                <SketchPicker
                    color={this.state.color}
                    onChangeComplete={this.handleChangeComplete}
                />
                {/*<input type="color" onChange={this.handleChange('color')} name="color" value={color} />*/}
                {/*<input type="text" value={color} onChange={this.handleChange('colorText')} />*/}
              </div>
            </div>
          </div>
          <div className="row text-center">

          </div>
        </main>
    );
  }
}

export default Canvas;
