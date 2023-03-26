import Mock from 'mockjs';

// 引入json，json文件默认暴露的，不需要要export
// webpack默认对外暴露的有图片和json格式
import banner from './banner.json'
import floor from './floor.json'

// mock数据，参数1：请求地址；参数2：请求数据
Mock.mock('/mock/banner',{code:200,data:banner}) // 模拟首页轮播图数据

Mock.mock('/mock/floor', {code:200, data:floor}) // 模拟首页推荐