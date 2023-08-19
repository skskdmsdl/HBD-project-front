import axios from 'axios';

import { BASE_URL } from 'common/constants';

export default () => {

    // Axios 인스턴스 생성
    const instance = axios.create();

    // 전역 설정
    instance.defaults.baseURL = BASE_URL + '/api/v1';
    instance.defaults.headers.post['Content-Type'] = 'application/json';
    instance.defaults.timeout = 20000;

    // 요청 인터셉터 추가
    instance.interceptors.request.use((config) => {
        // 요청 전에 수행할 작업을 설정
        // config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
    );
  
    // 응답 인터셉터 추가
    instance.interceptors.response.use((response) => {
        // 응답 데이터 전에 수행할 작업을 설정
        // 예를 들어, 응답 데이터를 가공하거나 특정 상태 코드에 따른 처리를 수행
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
  );
}