import http from '../helper/http';

export const types = {
    REEX_LOAD_SUCCESS: 'REEX_LOAD_SUCCESS',
};
// 获取退汇列表
export const loadData = (paramsData, callBack) => (dispatch, getState) => {
    http.get('api/reexchange-realtime', {
        params: paramsData
    })
        .then(response => {
            if (response.data.code === '0000') {
                dispatch({
                    type: types.REEX_LOAD_SUCCESS,
                    data: response.data.data,
                });
                callBack && callBack(response.data.data);
            } else {
                // message.error(response.data.message);
            }
        })
        .catch(function (error) {
            console.log('@error', error);
        });
};
