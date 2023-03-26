<template>
  <div>
    <div class="Type2">
        <a href="#" class="item item1">
            <slot></slot>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>
  </div>
</template>

<script>
    

export default {
    props:{
        buttonType: Number,
        default: 1,
    },
    data(){
        return {

        }
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>
.Type2{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'fangsong';
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: rgb(0, 0, 0);
    a{
        text-decoration: none !important;
    }
    .item{
            position: relative;
            margin: 50px;
            width: 300px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 28px;
            letter-spacing: 5px;
            color: #00ffa6;
            overflow: hidden;
            -webkit-box-reflect: below 1px linear-gradient( transparent,rgba(6, 133, 133,0.4));
        }
        .item:hover{
            background-color: #2fe0ec;
            box-shadow:0 0 5px #2fe0ec,
            0 0 5px #2fe0ec,
            0 0 5px #2fe0ec;
            color: #0ba6be;
            span{
                display: none;
            }

        }
        .item span:nth-of-type(1){
            position: absolute;
            left: -100%; 
            width: 100%;
            height: 3px;
            background-image: linear-gradient(to left,#00ff9d ,transparent);
            animation: toUp 1s linear infinite;
        }
        @keyframes toUp{
            0%{
                left:-100%;
            }
            50%,100%{
                left:100%;
            }
        }
        .item span:nth-of-type(2){
            position: absolute;
            top: -100%;
            right: 0;
            width: 3px;
            height: 100%;
            background-image: linear-gradient(to top,rgb(0, 255, 251) ,transparent);
            animation: toRight 1s linear infinite;
            animation-delay: 0.25s;
        }
        @keyframes toRight{
            0%{
                top:-100%;
            }
            50%,100%{
                top:100%;
            }
        }
        .item span:nth-of-type(3){
            position: absolute;
            right: -100%;
            bottom: 0;
            width: 100%;
            height: 3px;
            background-image: linear-gradient(to right,rgb(109, 250, 128) ,transparent);
            animation: toDown 1s linear infinite;
            animation-delay: 0.5s;
        }
        @keyframes toDown{
            0%{
                right:-100%;
            }
            50%,100%{
                right:100%;
            }
        }
        .item span:nth-of-type(4){
            position: absolute;
            bottom: -100%;
            left: 0;
            width: 3px;
            height: 100%;
            background-image: linear-gradient(to bottom,rgb(0, 255, 251) ,transparent);
            animation: toLeft 1s linear infinite;
            animation-delay: 0.75s;
        }
        @keyframes toLeft{
            0%{
                bottom:-100%;
            }
            50%,100%{
                bottom:100%;
            }
        }
        .item1{
            filter: hue-rotate(324deg);
        }
    
}
</style>