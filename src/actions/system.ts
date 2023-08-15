import {AxiosError, AxiosRequestConfig} from 'axios';
import type {BunnyRequestAction} from '../types';
import {BunnyRequestFailedAction} from '../types';
import {ESystemAction} from '../constants';

export const bunnyRequestAction: (payload: AxiosRequestConfig) => BunnyRequestAction = (payload) => {
    return {
        type: ESystemAction.REQUEST,
        payload: payload,
    };
};

export const bunnyRequestFailedAction: (payload: AxiosError) => BunnyRequestFailedAction = (payload) => {
    return {
        type: ESystemAction.REQUEST_FAILED,
        payload: payload,
    }
}