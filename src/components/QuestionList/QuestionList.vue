<template>
    <div class="question-container">
        <div :class="{showup:isReached}" class="title">Frequently Asked Questions</div>
        <div :class="{showup:isReached}" class="desc">Put your investing ideas into action with full range of investments. Enjoy real benefits and rewards on your accrue investing</div>
        <div class="grid-wrap">
            <div class="question" :class="{toRight1:isReached}">
                <div class="up"><span class="front"></span><div>What is investment and its objectives?</div></div>
                <div class="down">asda asdklmmc mdmks kqwo o mam aasdnkln  dsnklnan masdmma ankdn. asda asdklmmc mdmks kqwo o mam aasdnkln  dsnklnan masdmma ankdn.</div>
            </div>
            <div class="question" :class="{toLeft1:isReached}">
                <div class="up"><span class="front"></span><div>What is investment process?</div></div>
                <div class="down">asda asdklmmc mdmks kqwo o mam aasdnkln  dsnklnan masdmma ankdn.</div>
            </div>
            <div class="question" :class="{toRight2:isReached}">
                <div class="up"><span class="front"></span><div>What is the objective of a portfolio?</div></div>
                <div class="down">asda asdklmmc mdmks kqwo o mam aasdnkln  dsnklnan masdmma ankdn. o mam aasdnkln  dsnklnan masdmma ankdn.</div>
            </div>
            <div class="question" :class="{toLeft2:isReached}">
                <div class="up"><span class="front"></span><div>What about loan programs?</div></div>
                <div class="down">asda asdklmmc mdmks kqwo o mam aasdnkln  dsnklnan masdmma ankdn.</div>
            </div>
            <div class="question" :class="{toRight3:isReached}">
                <div class="up"><span class="front"></span><div>What is investment and its objectives?</div></div>
                <div class="down">asda asdklmmc mdmks kqwo o mam aasdnkln  dsnklnan masdmma ankdn.</div>
            </div>
            <div class="question" :class="{toLeft3:isReached}">
                <div class="up"><span class="front"></span><div>What is investment process?</div></div>
                <div class="down">asda asdklmmc mdmks kqwo o mam aasdnkln  dsnklnan masdmma ankdn. asda asdklmmc mdmks kqwo o mam aasdnkln  dsnklnan masdmma ankdn.</div>
            </div>
            <div class="question" :class="{toRight4:isReached}">
                <div class="up"><span class="front"></span><div>What is the objective of a portfolio?</div></div>
                <div class="down">asda asdklmmc mdmks kqwo o mam ankdn. asda asdklmmc mdmks kqwo o mam aasdnkln  dsnklnan masdmma ankdn.</div>
            </div>
            <div class="question" :class="{toLeft4:isReached}">
                <div class="up"><span class="front"></span><div>What about loan programs?</div></div>
                <div class="down">asda asdklmmc mdmks kqwo o mam aasdnkln  dsnklnan masdmma ankdn.</div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'QuestionList',
      data() {
          return {
              isReached: false, // 是否达到当前卡片的位置
          }
      },
      methods: {
          scrolling() {
              let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
              if (scrollTop >= 3200) { // 需要根据位置选择性修改
                  this.isReached = true;
              } else {
                  this.isReached = false;
              }
              // if (scrollTop >= 800) { // 是否让动画一次性
              //     window.removeEventListener("scroll", this.scrolling, true);
              // }
          }
      },
      mounted() {
          window.addEventListener("scroll", this.scrolling, true);
      },
      destroyed(){
          window.removeEventListener("scroll", this.scrolling, true);
      }
  }
  </script>
  
  <style lang="less" scoped>
  .showup{
        animation: showup 1.5s ease-in-out;
    }
    @keyframes showup{
        0%{
            opacity: 0;;
        }
        100%{
            opacity: 1;
        }
    }
    .toRight1{
    animation: right1 0.8s ease-in-out;
    animation-delay: 0;
    animation-fill-mode: backwards;
}
@keyframes right1
{
    from {transform:translateX(-100%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.toRight2{
    animation: right2 0.8s ease-in-out;
    animation-delay: 0.1s;
    animation-fill-mode: backwards;
}
@keyframes right2
{
    from {transform:translateX(-100%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.toRight3{
    animation: right3 0.8s ease-in-out;
    animation-delay: 0.2s;
    animation-fill-mode: backwards;
}
@keyframes right3
{
    from {transform:translateX(-100%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.toRight4{
    animation: right4 0.8s ease-in-out;
    animation-delay: 0.3s;
    animation-fill-mode: backwards;
}
@keyframes right4
{
    from {transform:translateX(-100%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.toLeft1{
    animation: left1 0.8s ease-in-out;
    animation-delay: 0;
    animation-fill-mode: backwards;
}
@keyframes left1
{
    from {transform:translateX(100%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.toLeft2{
    animation: left2 0.8s ease-in-out;
    animation-delay: 0.1s;
    animation-fill-mode: backwards;
}
@keyframes left2
{
    from {transform:translateX(100%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.toLeft3{
    animation: left3 0.8s ease-in-out;
    animation-delay: 0.2s;
    animation-fill-mode: backwards;
}
@keyframes left3
{
    from {transform:translateX(100%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.toLeft4{
    animation: left4 0.8s ease-in-out;
    animation-delay: 0.3s;
    animation-fill-mode: backwards;
}
@keyframes left4
{
    from {transform:translateX(100%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
  .question-container{
      padding: 0 300px;
      margin: 60px 0 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title{
            text-align: center;
            font-size: 32px;
            line-height: 1.2833333333333333;
            color: #28D0A8;
            margin-bottom: 10px;
      }
      .desc{
            width: 600px;
            text-align: center;
            font-size: 18px;
            color: #2f3b5e;
            margin-bottom: 40px;
            line-height: 30px;
            font-weight: 300;
      }
      .grid-wrap{
        position: relative;
        display: grid;
        grid-template-columns: 600px 600px;
        grid-row-gap: 30px;
        grid-column-gap: 30px;
        .question{
            cursor: pointer;
            position: relative;
            font-size: 18px;
            height: 80px;
            .up{
                border-radius: 10px;
                width: 100%;
                height: 100%;
                background: rgb(255, 255, 255);
                position: absolute;
                padding: 0 50px;
                color: #2f3b5e;
                display: flex;
                align-items: center;
                backface-visibility: hidden;
                transition: transform 0.6s ease;
                .front{
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: linear-gradient(120deg, #1CF196 0%, #36A6BF 100%);
                    margin-right: 10px;
                }
                
            }
            .down{
                border-radius: 10px;
                width: 100%;
                height: 100%;
                color: #fff;
                background: linear-gradient(120deg, #1CF196 0%, #36A6BF 100%);
                position: absolute;
                display: flex;
                align-items: center;
                padding: 0 50px;
                backface-visibility: hidden;
                transition: transform 0.6s ease;
                transform: rotateX(180deg);
            }
        }
        .question:hover .up {
            transform: rotateX(180deg);
        }

        .question:hover .down {
            transform: rotateX(0deg);
        }
      }
  }
  </style>