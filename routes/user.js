// 路由Api文件

const express = require('express');
const router = express.Router();

/** 
 * 登录
*/
router.post('/login', (req, res) => {
    let userModel = req.db;
    // 查询用户信息
    userModel.find({},(err, result) => {
        if(err) return console.log(err);
        res.json(result);
    });
}); 

/** 
 * 登出
*/
router.post('/loginOut', (req, res) => {
    res.send("loginOut")
});

/**
 * 注册用户信息
 */
router.get('/regUserInfo', (req, res) => {
    res.send("regUserInfo")
});

/**
 * 获取用户信息
 */
router.get('/getUserInfo', (req, res) => {
    res.send("getUserInfo")
});

/**
 * 修改用户信息
 */
router.put('/editUserInfo', (req, res) => {
    res.send("editUserInfo")
});

/** 
 * 查看我的文章
*/
router.get('/myArticle', (req, res) => {
    res.send("myArticle")
}); 

/** 
 * 新增文章
*/
router.post('/addArticle', (req, res) => {
    res.send("addArticle")
}); 

/** 
 * 删除文章
*/
router.delete('/removeArticle', (req, res) => {
    res.send("removeArticle")
}); 

/** 
 * 修改文章
*/
router.put('/editArticle', (req, res) => {
    res.send("editArticle")
}); 

/** 
 * 查看我的收藏
*/
router.get('/myCollect', (req, res) => {
    res.send("myCollect")
}); 

/** 
 * 查看我的关注
*/
router.get('/myAttention', (req, res) => {
    res.send("myAttention");
}); 

/** 
 * 添加关注
*/
router.get('/addAttention', (req, res) => {
    res.send("addArticle")
});

/** 
 * 移除关注
*/
router.delete('/removeAttention', (req, res) => {
    res.send("removeArticle")
});

/** 
 * 添加收藏
*/
router.get('/addCollect', (req, res) => {
    res.send("addCollect")
});

/** 
 * 移除收藏
*/
router.delete('/removeCollect', (req, res) => {
    res.send("removeCollect")
});

/** 
 * 上传头像
*/
router.post('/uploadAvatar', (req, res) => {
    res.send("uploadAvatar");
}); 

module.exports = router;