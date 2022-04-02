import { Config } from '../data-types/config';
import { createContext, useContext } from 'react';

const ConfigContext = createContext<Config>({
  color: {
    primary: '#068093',
  },
});

const ConfigProvider = ConfigContext.Provider;
const useConfig = () => useContext(ConfigContext);

export { ConfigProvider, useConfig };
