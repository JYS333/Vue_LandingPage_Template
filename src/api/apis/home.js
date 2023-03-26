import mockRequests from '@/utils/mockAjax';

// export const reqBannerList = () => {
//     return mockRequests.get('/banner')
// }

// web requests for detail Page
import request from '@/utils/request';

export const getTest = () => {
    return request('get', 'api/Cg/Itf/Java/CmnMisItf.jsp?method=GetCurConcurrentUserCount');
}

export const postTest = (data) => {
    return request('post', 'api/Cg/Itf/Java/CmnMisItf.jsp?ItfName=GetUserInfo&method=GetSqlData', data);
}