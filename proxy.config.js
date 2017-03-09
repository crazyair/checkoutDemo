var mockjs = require('mockjs');
module.exports = {

    '/api/*': 'http://10.10.1.10:6060',
    // '/api/*':  'http://10.10.1.78:6061',
    '/v1/*': 'http://10.10.1.77:6061/',

    'OPTIONS *': function (req, res) {
        // res.set("Access-Control-Allow-Origin", "*"); // dora 自己会加上
        res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, dealer-id, api-auth-method,x-auth-token,request-id");
        // res.set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,HEAD,OPTIONS");

        res.status(200).end();
    },
    '/invoice/history/list': function (req, res) {
        res.json(mockjs.mock({
            status: 1,
            data: {
                'list|10': [{
                    'id|+1': 1
                    , name: '@cname'
                    , date: '@date(yyyymmdd)'
                    , type: '纸质发票'
                    , status: '发票申请已提交'
                    , money: /^[1][358][0-9]{3}/
                    , phone: /^[1][358][0-9]{9}/
                    , 'sex|1-2': 1
                    , 'age|1-100': 1
                    , birthday: '@datetime("yyyy-MM-dd")'
                    , 'mode|1-3': 1
                    , value: '@cname'
                    , 'permission|1-15': 1

                }],
                total: 20
            }
        }));
    },
    'GET /api/mg/getLiveData': mockjs.mock({
        code: '0000',
        data: [
            {id: 1, name: '六间房'},
            {id: 2, name: '夜夜'},
            {id: 3, name: '美空'},
        ],
    }),
    'GET /api/mg/getTax': mockjs.mock({
        code: '0000',
        data: {
            list: [
                {id: 1, name: '未报税', month: '@date("yyyy-MM")', type: 1},
                {id: 2, name: '已报税', month: '@date("yyyy-MM")', type: 2},
                {id: 3, name: '已部分报税', month: '@date("yyyy-MM")', type: 3},
            ]
        },
    }),
    'GET /api/mg/getTaxDetail': mockjs.mock({
        code: '0000',
        data: {
            list: [
                {id: 1, name: '@cname', live: '美空', money: 1},
                {id: 2, name: '@cname', live: '六间房', money: 2},
                {id: 3, name: '@cname', live: '美空，六间房', money: 3},
            ]
        },
    }),
    'GET /api/mg/getTaxUsers': mockjs.mock({
        code: '0000',
        data: {
            list: [
                {id: 1, name: '@cname', live: '美空', money: 1},
                {id: 2, name: '@cname', live: '六间房', money: 2},
                {id: 3, name: '@cname', live: '美空，六间房', money: 3},
            ]
        },
    }),
    'GET /users': mockjs.mock({
        success: true,
        data: [{name: '@Name'}],
    }),
    '/v2/permissions': function (req, res) {
        res.json(mockjs.mock({
            status: 1,
            data: {
                'permissions|10': [{
                    'id|+1': 1
                    , name: '@cname'
                    , date: '@date(yyyymmdd)'
                    , phone: /^[1][358][0-9]{9}/
                    , 'sex|1-2': 1
                    , 'age|1-100': 1
                    , birthday: '@datetime("yyyy-MM-dd")'
                    , 'mode|1-3': 1
                    , value: '@cname'
                    , 'permission|1-15': 1

                }],
                total: 20
            }
        }));
    }
};
