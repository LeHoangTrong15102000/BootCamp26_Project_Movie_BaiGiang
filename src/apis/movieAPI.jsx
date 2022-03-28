// Chứa các hàm gọi API liên quan đến movie

import axios from './axiosClient'


export const getMovieShowing = (name) => {
    // Nên viêt thoe cách thứ 2 để có thể dễ quan sát hơn là viết nối chuỗi
    return axios.get('QuanLyPhim/LayDanhSachPhim', {
        params: {
            maNhom: 'GP01',
        }
    })
}

export const getMovieDetails = () => {
    return axios.get("QuanLyPhim/LayThongTinPhim", {
        params: {
            maPhim: 'adsasd'
        }
    })
}

// action