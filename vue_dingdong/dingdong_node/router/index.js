const express = require('express')
const router = express.Router()

const querys = require('../model/query')

router.get('/getSwipers',function (req,res,next) {
       querys.getSwipers().then(ret=>{
         res.send({
           data:ret
         })
       })
})

router.get('/getOneClass',function (req,res,next) {
      querys.getOneClass().then(ret=>{
        res.send({
          data:ret
        })
      })
})

router.get('/getBannerGoods',function (req,res,next) {
        querys.getBannnerGoods().then(ret=>{
          res.send({
            data:ret
          })
        })
})

router.get('/getGuessGoods',function (req,res,next) {
        querys.getGuessGoods(req.query).then(ret=>{
          res.send({
            data:ret
          })
        })
})

router.get('/getDetail',function (req,res,next) {
        querys.getDetail(req.query).then(ret=>{
          res.send({
            data:ret
          })
        })
})

router.get('/goodsTitle',function (req,res,next) {
        querys.getGoodsTitle().then(ret=>{
          res.send({
            data:ret
          })
        })
})

router.get('/categoryGoods',function (req,res,next) {
        querys.getCategoryGoods(req.query.id).then(ret=>{
          res.send({
            data:ret
          })
        })
})

router.get('/getCartGoods',function (req,res,next) {
        querys.getCartGoods(req.query).then(ret=>{
          res.send({
            data:ret
          })
        })
})

module.exports = router