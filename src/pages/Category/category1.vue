<template>
    <div >
      <Navigator />
      <div class="document-container">
          <div class="title">Category1</div>
          <div class="title2">随时联系</div>
          <div class="content">
              <p>最后，再次感谢使用，如果想继续联系作者，可以扫码添加微信~随时沟通。</p>
          </div>
          <div class="image"><el-image class="image" style="width: 300px;" :src="require('../../assets/wechat.jpeg')" fit="cover"></el-image></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="less" scoped>
  .document-container{
      padding: 80px 200px 100px;
      width: 100%;
      // height:100%;
      overflow: scroll;
      background: #f5f5fb;
      display: flex;
      flex-direction: column;
      .title{
          color: #2f3b5e;
          font-size: 32px;
          line-height: 1.2380952380952381;
          margin-bottom: 13px;
          font-weight: 700;
      }
      .title2{
          color: #2f3b5e;
          margin-bottom: 13px;
          font-size: 24px;
          font-weight: 700;
      }
      .content{
          color: #2f3b5e;
          font-size: 14px;
          line-height: 1.2380952380952381;
          margin-bottom: 20px;
          p{
              margin-bottom: 10px;
          }
      }
      .image{
          width: 100%;
          display: flex;
          justify-content: center;
      }
  }
  </style>