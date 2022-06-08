import {lazy} from 'react'

// tạo ra một cái array để quản lí các cái routes của dự án
// const lazzy = dir => lazy(() => import(dir))
import NotFound from 'components/NotFound';
const HomePage = lazy(() => import('modules/Home/pages/HomePage')); // Mới đầu vào chạy homePage thì chỉ có mỗi file js của homepage là chạy thôi
const LoginPage = lazy(() => import('modules/Auth/pages/Login')); // Các cái page thì thường sẽ sử dụng kĩ thuật lazy load để tối ưu tốc độ tải trang
const RegisterPage = lazy(() => import('modules/Auth/pages/Register'));
const MovieShowing = lazy(() => import('modules/Movies/pages/MovieShowing'));
const MovieComming = lazy(() => import('modules/Movies/pages/MovieComming'));
const MovieDetails = lazy(() => import('modules/Movies/pages/MovieDetails'));
const DemoUseCallback = lazy(() =>
  import('_playground/Hook/DemoUseCallback')
);
const DemoUseMemos = lazy(() => import('_playground/Hook/DemoUseMemo'));
const DemoUseReducer = lazy(() => import('_playground/Hook/DemoUseReducer'));

const routes = [
    {
        path: '/',
        // nó bắt cái type của element phải là JSX nên import trực tiếp vào thì nó không cho
        element: <HomePage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/movies',
        children: [
            {
                path: 'now-showing',
                element: <MovieShowing />
            },
            {
                path: 'coming-soon',
                element: <MovieComming />
            },
            {
                path: ':movieId',
                element: <MovieDetails />
            }
        ]
    }   
]

export default routes