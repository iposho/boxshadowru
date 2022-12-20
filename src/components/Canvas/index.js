import React, { useState } from 'react';

import InputColor from 'react-input-color';

import SettingsItem from '../SettingsItem';

import image from '../../assets/images/copy.svg';

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
  isCopied: false,
};

const Canvas = () => {
  const [state, setState] = useState(initialState);

  const validateNumericInputs = (max, min, name, value) => {
    if (value <= Number(max) && value >= Number(min)) {
      setState({
        ...state,
        [name]: value,
        isCopied: false,
      });
    } else {
      setState({
        ...state,
        [name]: Math.sign(value) === -1 ? min : max,
        isCopied: false,
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
        isCopied: false,
      });
      break;
    default:
      setState({
        ...state,
        [key]: e.target.value || value,
        isCopied: false,
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
    setState({
      ...state,
      color: color.hex,
      colorRgb: color.rgba,
      isCopied: false,
    });
  };

  const {
    blurRadius,
    color,
    colorRgb,
    inset,
    isCopied,
    offsetX,
    offsetY,
    spreadRadius,
  } = state;

  const style = {
    boxShadow: `${inset ? 'inset' : ''} ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${colorRgb}`,
  };

  const codeValue = `box-shadow: ${style.boxShadow};`;

  const handleCopyClick = () => {
    if (isCopied) {
      return false;
    }

    navigator.clipboard.writeText(codeValue);

    setState({
      ...state,
      isCopied: true,
    });

    return false;
  };

  return (
    <main className="main container">
      <div className="row">
        <div className={`${css.bsExampleWrapper} col-12 justify-content-center`}>
          <div className={`${css.bsExample}`} style={style}>
            <code>{codeValue}</code>
            <button onClick={handleCopyClick} type="button">
              <img className={css.copyIcon} src={image} alt="Copy icon" />
              {isCopied ? 'Copied ✔️' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <SettingsItem
            name="inset"
            onChange={handleChange('inset')}
            value={inset}
            type="checkbox"
            checked={inset}
            className={css.settingsItem}
          >
            <div className={css.colorPicker}>
              <InputColor
                initialValue={color}
                onChange={handleChangeComplete}
                placement="right"
              />
            </div>
          </SettingsItem>
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
        </div>
      </div>
    </main>
  );
};

export default Canvas;
