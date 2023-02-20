const Mock = require('mockjs');

module.exports = Mock.mock('/detail', 'get', () => {
    const res = Mock.mock({
        detail: ['details1', 'details2']
    })
    return {
        code: 200,
        dara: res
    }
});

module.exports = Mock.mock('/postDetail', 'post', (options) => {
    // console.log("post data == ", options);
    return {
        code: 200,
        message: 'success',
        data: []
    }
})