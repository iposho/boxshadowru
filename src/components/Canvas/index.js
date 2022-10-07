import React, { useState } from 'react';

import { SketchPicker } from 'react-color';
import SettingsItem from '../SettingsItem';

import css from './Canvas.module.scss';

const initialState = {
  inset: false,
  offsetX: 8,
  offsetY: 8,
  blurRadius: 45,
  spreadRadius: -15,
  color: '#999999',
  colorRgb: '',
  isRgb: false,
};

const Canvas = () => {
  const [state, setState] = useState(initialState);

  const validateNumericInputs = (max, min, name, value) => {
    if (value <= Number(max) && value >= Number(min)) {
      setState({
        ...state,
        [name]: value,
      });
    } else {
      setState({
        ...state,
        [name]: Math.sign(value) === -1 ? min : max,
      });
    }
  };

  const handleChange = (key) => (e, value) => {
    const { inset } = state;
    switch (key) {
    case 'inset':
      setState({
        ...state,
        inset: !inset,
      });
      break;
    default:
      setState({
        ...state,
        [key]: e.target.value || value,
      });
      break;
    }
  };

  const onKeyUp = (e) => {
    const {
      max, min, name, value,
    } = e.target;
    validateNumericInputs(max, min, name, value);
  };

  const handleChangeComplete = (color) => {
    const value = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;

    setState({
      ...state,
      color: value,
      isRgb: true,
    });
  };

  const {
    inset, isRgb, offsetX, offsetY, blurRadius, spreadRadius, color, colorRgb,
  } = state;

  const style = {
    boxShadow: `${inset ? 'inset' : ''} ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`,
  };

  const codeValue = `box-shadow: ${style.boxShadow}`;

  return (
    <main className="main container">
      <div className="row">
        <div className={`${css.bsExampleWrapper} col-12 justify-content-center`}>
          <div className={`${css.bsExample}`} style={style} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-9">
          <SettingsItem
            name="inset"
            onChange={handleChange('inset')}
            value={inset}
            type="checkbox"
            checked={inset}
            className={css.settingsItem}
          />
          <SettingsItem
            name="offsetX"
            onChange={handleChange('offsetX')}
            min={-100}
            max={100}
            value={offsetX}
            onKeyUp={onKeyUp}
            className={css.settingsItem}
          />
          <SettingsItem
            name="offsetY"
            onChange={handleChange('offsetY')}
            min={-100}
            max={100}
            value={offsetY}
            onKeyUp={onKeyUp}
            className={css.settingsItem}
          />
          <SettingsItem
            name="blurRadius"
            onChange={handleChange('blurRadius')}
            min={0}
            max={100}
            value={blurRadius}
            onKeyUp={onKeyUp}
            className={css.settingsItem}
          />
          <SettingsItem
            name="spreadRadius"
            onChange={handleChange('spreadRadius')}
            min={-100}
            max={100}
            value={spreadRadius}
            onKeyUp={onKeyUp}
            className={css.settingsItem}
          />
          <div className="col-12 d-none d-lg-flex mb-4">
            <code>{codeValue}</code>
          </div>
        </div>
        <div
          className="col-12 col-lg-3 d-flex mt-4 mb-4 mt-lg-0 mb-lg-0
             justify-content-center align-items-lg-start justify-content-lg-end"
        >
          <div className="settingsItem colorPicker">
            <SketchPicker
              className={css.picker}
              color={color}
              onChangeComplete={handleChangeComplete}
            />
          </div>
        </div>
        <div className="col-12 d-lg-none mt-lg-5 mb-4">
          <code>{codeValue}</code>
        </div>
      </div>
    </main>
  );
};

export default Canvas;
