import React from 'react';

import { Slider, Switch } from '@material-ui/core';

import css from './style.scss';

class SettingsItem extends React.Component {
  renderItem = ({
    checked = false, className, max, min, name = '', onChange, onKeyUp, type, value,
  }) => {
    switch (type) {
    case 'checkbox':
      return (
        <div className={className}>
          <label htmlFor={name}>{name}</label>
          <Switch
            checked={checked}
            name={name}
            onChange={onChange}
            color="primary"
            data-toggle="toggle"
          />
        </div>
      );
    default:
      return (
        <div className={className}>
          <label htmlFor={name}>{name}</label>
          <Slider
            step={1}
            onChange={onChange}
            min={min}
            max={max}
            value={value}
            valueLabelDisplay="auto"
            name={name}
          />
          <input
            type="number"
            name={name}
            onChange={onChange}
            className="value"
            value={value}
            min={min}
            max={max}
            onKeyUp={onKeyUp}
          />
        </div>
      );
    }
  };

  render() {
    return (
      this.props && this.renderItem(this.props)
    );
  }
}

export default SettingsItem;
