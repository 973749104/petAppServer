// 路由Api文件

const express = require('express');
const router = express.Router();

/**
 * 分页获取主页热门数据
 */
router.get('/getHotData', (req, res) => {
    res.send("getHotData")
});

/**
 * 分页获取主页最新数据
 */
router.get('/getNewData', (req, res) => {
    res.send("getNewData")    
});

/** 
 * 搜索文章
*/
router.get('/searchArticle', (req, res) => {
    res.send("searchArticle")
});

/** 
 * 获取文章详细信息
*/
router.get('/getArticleInfo', (req, res) => {
    res.send("getArticleInfo")
});

/** 
 * 上传文章图片
*/
router.post('/uploadArticleImg', (req, res) => {
    res.send("uploadArticleImg");
}); 

module.exports = router;