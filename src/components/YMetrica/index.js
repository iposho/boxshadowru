import React from 'react';

import { YMInitializer } from 'react-yandex-metrika';

import params from '../../../configs/parameters';

const { yMetrica } = params;
const { accounts, options } = yMetrica;

const isDevelopment = process.env.development;

const YMetrika = () => (!isDevelopment && <YMInitializer accounts={accounts} options={options} />);

export default YMetrika;
