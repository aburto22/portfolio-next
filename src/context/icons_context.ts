import { IIcon } from '@types';
import { createContext, useContext } from 'react';

const initialValue: IIcon[] = [];

const IconsContext = createContext(initialValue);

export const useIconsContext = () => useContext(IconsContext);

export default IconsContext;
