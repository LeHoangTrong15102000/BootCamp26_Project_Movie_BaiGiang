import axios from 'axios';
import qs from 'query-string';

// setup những cấu hình mặc định cho axios
const axiosClient = axios.create({
  baseURL: 'https://movienew.cybersoft.edu.vn/api/',
  headers: {
    TokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNiIsIkhldEhhblN0cmluZyI6IjEzLzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NTYxOTIwMDAwMCIsIm5iZiI6MTYzMzE5NDAwMCwiZXhwIjoxNjY1NzY2ODAwfQ.TMg-RWGpT6_kH-eG3Pbw5j_8yWUP84LrkWZAFj-Drfk',
  },

  // override lại cách axios set params lên URL
  paramsSerializer: (params) => {
    //     const filtered = Object.entries(params).filter(([key,value]) => {
    //         return value !== null && value !== undefined && value !== '';
    //     }).map(([key, value], index) => {
    //         return `${key}=${value}`
    //     })

    //    return filtered.length > 0 ? filtered.join("&") : '';

    return qs.stringify(params, { skipEmptyString: true, skipNull: true }); // Về mặc định thì axios ko bỏ qua empty string, còn chúng ta muốn bỏ qua thì setup cái mặc định vào
  },
});

// interceptor -> kết nối với API rồi trả về giao diện
// Cấu hình cho nó
axiosClient.interceptors.response.use(
  // kêt quả khi mà server trả về thì nó sẽ đi qua thầng interceptor này trước khi trả ra cho nơi gọi axios
  // ta có thể thay đổi data sau đó trả về cho nơi gọi axios
  (response) => {
    // response.data là format của axios, sau đó
    // Những gì ta return trong đây chỉnh là kết quả trả về của axios khi gọi API
    return response.data.content; // Chỉ cần trả về response nếu đã trả về response.data.content thì bên gọi data không cần phải bốc tách nữa
    /**
     * Nhũng gì mà mình return ở đây sẽ là kết quả trả về cho nơi gọi axios
     * // response.data là format của axios, sau đó .content là format của backEnd cybersoft quy định
     */
  },
  (error) => {// Có lỗi thì trả về ở đây
    // format lại error trả ra bên ngoài  
    // Thêm Promise.reject để đảm bảo rằng nó sẽ nhảy xuống catch tại nơi gọi API để lấy ra lỗi khi mà gọi API thất bại
    return Promise.reject(error.response.data.content);// Nếu có lỗi thì nó sẽ return về cái định dạng này
    // Nếu có lỗi thì nó sẽ nhảy xuống thz rejected của Reducer và quăng ra cái lỗi cho chúng ta
  }
);

export default axiosClient;
