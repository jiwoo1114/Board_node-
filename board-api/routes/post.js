const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const { Post, Hashtag, User } = require('../models')
const {isLoggedIn} = require('./middleware')
const router = express.Router()

//uploads 폴더가 없을 경우 새로 생성
try {
    fs.readdirSync('uploads')
} catch (error) {
    console.log('uploads 폴더가 없어 uploads 폴더를 생성합니다.')
    fs.mkdirSync('uploads')
}

//게시물 등록 localhost:8000/post
router.post('/', async (req, res) => { })

//게시물 수정 localhost:8000/post/:id
router.post('/:id', async (req, res) => { })


//게시물 삭제 localhost:8000/post/:id
router.post('/:id', async (req, res) => { })

//특정 게시물 불러오기(id로 게시물 조회) localhost:8000/post/:id
router.post('/:id', async (req, res) => { })


//전체 게시물 불러오기(페이징 가능) localhost:8000/post
router.post('/', async (req, res) => { })


module.exports = router