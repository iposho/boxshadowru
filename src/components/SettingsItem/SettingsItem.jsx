import React from 'react';

class SettingsItem extends React.Component {
  renderItem = ({ checked = false, max, min, name = '', onChange, type, value }) => {
      switch (type) {
        case 'checkbox':
          return (
              <div className="settingsItem">
                <label htmlFor={name}>{name}</label>
                <input
                    type="checkbox"
                    name={name}
                    onChange={onChange}
                    data-toggle="toggle"
                    checked={checked}
                />
              </div>
          )
        default:
          return (
              <div className="settingsItem">
                <label htmlFor={name}>{name}</label>
                <input
                    type="range"
                    onChange={onChange}
                    value={value}
                    name={name}
                    min={min}
                    max={max}
                />
                <input type="number"
                       onChange={onChange}
                       className="value"
                       value={value}
                       min={min}
                       max={max}
                />
              </div>
          )
      }
  };

  render() {
    return (
      this.props && this.renderItem(this.props)
    );
  }
}

export default SettingsItem;
