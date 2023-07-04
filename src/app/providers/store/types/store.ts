import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

export interface IThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}
