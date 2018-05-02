// 路由Api文件

const express = require('express');
const router = express.Router();

// 设置路由

/** 
 * 登录
*/
router.post('/login', (req, res) => {

}); 

/** 
 * 登出
*/
router.post('/loginOut', (req, res) => {

});

/**
 * 注册用户信息
 */
router.get('/saveUserInfo', (req, res) => {

});

/**
 * 获取用户信息
 */
router.get('/getUserInfo', (req, res) => {

});

/**
 * 修改用户信息
 */
router.post('/editInfo', (req, res) => {

});

/**
 * 分页获取主页热门数据
 */
router.get('/getHotData', (req, res) => {

});

/**
 * 分页获取主页最新数据
 */
router.get('/getNewData', (req, res) => {

});

/** 
 * 搜索文章
*/
router.get('/searchArticle', (req, res) => {

});

/** 
 * 添加关注
*/
router.get('/addAttention', (req, res) => {

});

/** 
 * 移除关注
*/
router.get('/removeAttention', (req, res) => {

});

/** 
 * 添加收藏
*/
router.get('/addCollect', (req, res) => {

});

/** 
 * 移除收藏
*/
router.get('/removeCollect', (req, res) => {

});

/** 
 * 获取文章详细信息
*/
router.get('/getArticle', (req, res) => {

});

/** 
 * 查看我的文章
*/
router.get('/myArticle', (req, res) => {

}); 

/** 
 * 新增文章
*/
router.post('/addArticle', (req, res) => {

}); 

/** 
 * 删除文章
*/
router.post('/removeArticle', (req, res) => {

}); 

/** 
 * 修改文章
*/
router.post('/editArticle', (req, res) => {

}); 

/** 
 * 查看我的收藏
*/
router.get('/myCollect', (req, res) => {

}); 

/** 
 * 查看我的关注
*/
router.get('/myAttention', (req, res) => {

}); 

/** 
 * 上传头像
*/
router.get('/uploadAvatar', (req, res) => {

}); 

/** 
 * 上传文章图片
*/
router.get('/uploadArticleImg', (req, res) => {

}); 