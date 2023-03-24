// assets
import { IconDashboard, IconBrandChrome, IconHelp, IconKey, IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconBrandChrome, IconHelp, IconKey, IconTypography, IconPalette, IconShadow, IconWindmill };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '대시보드',
    type: 'group',
    children: [
        {
            id: 'default',
            title: '대시보드',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            svgIcon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="7" height="7" rx="0.5" fill="#252525" />
                    <rect x="9" width="7" height="7" rx="0.5" fill="#252525" />
                    <rect x="9" y="9" width="7" height="7" rx="0.5" fill="#252525" />
                    <rect y="9" width="7" height="7" rx="0.5" fill="#252525" />
                </svg>
            ),
            breadcrumbs: false
        },
        {
            id: 'authentication',
            title: '메모관리',
            type: 'item',
            url: '/utils/util-typography',
            svgIcon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="2" fill="#979797" />
                    <path d="M4 8H12" stroke="white" strokeWidth="1.5" />
                    <path d="M4 4H12" stroke="white" strokeWidth="1.5" />
                    <path d="M4 12H12" stroke="white" strokeWidth="1.5" />
                </svg>
            ),
            icon: icons.IconKey

            //     children: [
            //         {
            //             id: 'login3',
            //             title: 'Login',
            //             type: 'item',
            //             url: '/pages/login/login3',
            //             target: true
            //         },
            //         {
            //             id: 'register3',
            //             title: 'Register',
            //             type: 'item',
            //             url: '/pages/register/register3',
            //             target: true
            //         }
            //     ]
        },
        {
            id: 'util-color',
            title: '달력관리',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconPalette,
            svgIcon: (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="1" width="16" height="16" rx="1" fill="#979797" />
                    <rect x="3" width="2" height="2" fill="#979797" />
                    <rect x="11" width="2" height="2" fill="#979797" />
                    <rect width="16" height="2" transform="matrix(1 0 0 -1 0 7)" fill="white" />
                    <circle cx="3.75" cy="9.75" r="0.75" fill="white" />
                    <circle cx="3.75" cy="12.75" r="0.75" fill="white" />
                    <circle cx="7.75" cy="9.75" r="0.75" fill="white" />
                    <circle cx="7.75" cy="12.75" r="0.75" fill="white" />
                    <circle cx="11.75" cy="9.75" r="0.75" fill="white" />
                    <circle cx="11.75" cy="12.75" r="0.75" fill="white" />
                </svg>
            ),
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: '사용자관리',
            type: 'item',
            url: '/pages/login/login3',
            icon: icons.IconTypography,
            svgIcon: (
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 14C0 11.2386 2.23858 9 5 9H11C13.7614 9 16 11.2386 16 14V15H15.9H5H0.100018C0.0344303 14.6769 0 14.3425 0 14Z"
                        fill="#979797"
                    />
                    <circle cx="8" cy="4" r="4" fill="#979797" />
                </svg>
            ),
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: '공지사항관리',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconPalette,
            svgIcon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="2" fill="#979797" />
                </svg>
            ),
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: '회원관리',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            svgIcon: (
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.9992 4C12.9992 5.44878 12.383 6.75365 11.3984 7.66682C11.8886 7.88111 12.43 8 12.9992 8C15.2084 8 16.9992 6.20914 16.9992 4C16.9992 1.79086 15.2084 0 12.9992 0C12.43 0 11.8886 0.118885 11.3984 0.333179C12.383 1.24635 12.9992 2.55122 12.9992 4Z"
                        fill="#979797"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 14C0 11.2386 2.23858 9 5 9H11C13.7614 9 16 11.2386 16 14V15H15.9H5H0.100018C0.0344303 14.6769 0 14.3425 0 14Z"
                        fill="#979797"
                    />
                    <circle cx="8" cy="4" r="4" fill="#979797" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.9003 15H17.0003H17V14H17.0003C17.0003 11.9131 15.9351 10.075 14.3184 9H16.0003C18.7618 9 21.0003 11.2386 21.0003 14C21.0003 14.0193 21.0002 14.0385 21 14.0577V15H20.9003Z"
                        fill="#979797"
                    />
                </svg>
            ),
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: '콘텐츠관리',
            type: 'item',
            icon: icons.IconKey,
            url: '/icons/tabler-icons',
            svgIcon: (
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="16" rx="3" fill="#979797" />
                    <path d="M4 11L12 11" stroke="#D9D9D9" strokeWidth="1.5" />
                    <path d="M8 7L16 7" stroke="#D9D9D9" strokeWidth="1.5" />
                    <path d="M14 11H16" stroke="#D9D9D9" strokeWidth="1.5" />
                    <path d="M4 7L6 7" stroke="#D9D9D9" strokeWidth="1.5" />
                </svg>
            ),
            breadcrunbs: false
            // children: [
            //     {
            //         id: 'tabler-icons',
            //         title: 'Tabler Icons',
            //         type: 'item',
            //         url: '/icons/tabler-icons',
            //         breadcrumbs: false
            //     },
            //     {
            //         id: 'material-icons',
            //         title: 'Material Icons',
            //         type: 'item',
            //         url: '/icons/material-icons',
            //         breadcrumbs: false
            //     }
            // ]
        },
        {
            id: 'sample-page',
            title: ' 관리',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            svgIcon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="8" fill="#EE3C30" />
                </svg>
            ),
            titleIcon: (
                <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="39.3846" height="16" rx="8" fill="#EE3C30" />
                    <path
                        d="M8.88287 12V3.04895H10.5044V10.6407H14.4467V12H8.88287ZM15.7841 12V5.28671H17.3663V12H15.7841ZM16.5795 4.33392C16.329 4.33392 16.1133 4.25087 15.9327 4.08479C15.752 3.91579 15.6617 3.71329 15.6617 3.47727C15.6617 3.23834 15.752 3.03584 15.9327 2.86975C16.1133 2.70076 16.329 2.61626 16.5795 2.61626C16.833 2.61626 17.0487 2.70076 17.2264 2.86975C17.4071 3.03584 17.4974 3.23834 17.4974 3.47727C17.4974 3.71329 17.4071 3.91579 17.2264 4.08479C17.0487 4.25087 16.833 4.33392 16.5795 4.33392ZM24.9897 5.28671L22.599 12H20.8507L18.46 5.28671H20.1471L21.6899 10.2736H21.7598L23.307 5.28671H24.9897ZM28.8282 12.1311C28.1552 12.1311 27.5739 11.9913 27.0844 11.7115C26.5978 11.4289 26.2233 11.0297 25.9611 10.514C25.6989 9.99534 25.5677 9.38491 25.5677 8.68269C25.5677 7.99213 25.6989 7.38607 25.9611 6.86451C26.2263 6.34003 26.5963 5.93211 27.0712 5.64073C27.5462 5.34645 28.1042 5.1993 28.7452 5.1993C29.1589 5.1993 29.5494 5.26632 29.9165 5.40035C30.2866 5.53147 30.6129 5.73543 30.8955 6.01224C31.1811 6.28904 31.4054 6.64161 31.5686 7.06993C31.7318 7.49534 31.8134 8.00233 31.8134 8.59091V9.07605H26.3108V8.00962H30.2968C30.2939 7.70658 30.2283 7.43706 30.1001 7.20105C29.9719 6.96212 29.7927 6.77418 29.5625 6.63724C29.3352 6.50029 29.0701 6.43182 28.767 6.43182C28.4436 6.43182 28.1595 6.51049 27.9148 6.66783C27.67 6.82226 27.4792 7.02622 27.3422 7.27972C27.2082 7.5303 27.1397 7.80565 27.1368 8.10577V9.03671C27.1368 9.42716 27.2082 9.76224 27.351 10.042C27.4937 10.3188 27.6933 10.5315 27.9497 10.6801C28.2061 10.8258 28.5063 10.8986 28.8501 10.8986C29.0803 10.8986 29.2886 10.8666 29.4751 10.8024C29.6616 10.7354 29.8233 10.6378 29.9602 10.5096C30.0972 10.3814 30.2006 10.2226 30.2705 10.0332L31.7478 10.1993C31.6546 10.5897 31.4768 10.9307 31.2146 11.222C30.9553 11.5105 30.6231 11.7348 30.2181 11.8951C29.8131 12.0524 29.3498 12.1311 28.8282 12.1311Z"
                        fill="white"
                    />
                </svg>
            ),
            breadcrumbs: false
        }
        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
    ]
};

export default dashboard;
