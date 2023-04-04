<template>
  <div >
    <Navigator />
    <div class="document-container">
        <div class="title">作者的一些小说明</div>
        <div class="content">
            <p>感谢你使用这套模板。</p>
            <p>它的诞生源自本人业余时间的一些突发奇想，因为尽管网上有很多纯H5和JS实现的前端模板，但很少能找到比较简约靠谱的Vue模板，大部分都是项目管理类的，千篇一律。因此想自己写一个风格化的落地页模板，有页面，有路由，有接口，有各种依赖，随下随用。方便自己在后续工作中遇到业务需求从0搭建落地页时，直接复制粘贴。</p>
        </div>
        
        <div class="title2">内容介绍</div>
        <div class="content">
            <p>我承认这个模板并不专业及完整，但对于那些追求拿来即用Vue模板的朋友来说十分友好，为了让它更加可自定义，作者未添加过多的路由页面、组件和特效，一切从简，让每个人都能看懂，都能自己再创造。抛砖引玉，更好的实现和设计需要使用者自己完善。在此基础上，可以再从网上找一些特定的静态模板，复制粘贴，去路由里追加新的路由页，去导航里追加新的菜单等等。</p>
            <p>模板基本按照传统Vue2项目的结构开发。即便你没有Vue相关经验，因为Vue本身比React要通俗很多，所以也花不了多少时间去了解整体结构；如果你有Vue相关开发经验，那基本拿来改一改就能用了。模板中已经配置好路由、接口、VueX等等，基本无需修改结构，每次添加新的即可。</p>
        </div>

        <div class="title2">一些感想</div>
        <div class="content">
            <p>我觉得能看到这个模板的人应该都是前端的初学者or大学毕业生等等，这里作者有些心里话想说。</p>
            <p>Run！不要入行！</p>
            <p>哈哈，不开玩笑了。作者本人是入行不久的前端新人，海龟，回来后立刻去了大厂搬砖，俗称拧螺丝。
                我的一个985毕业未读研的朋友在我入职初期很多次和我说，他很后悔没毕业后来大厂，去经历这种折磨人的强度，现在这个年纪虽然也还很年轻但已经感觉有点吃不消了。
                我那时只是笑笑，觉得他说的有道理，直到第二年开春，我被裁员...然后我们俩都才意识到这个行业的现状早就不能与曾经相提并论，这里我不想展开说这段经历，在我离职前后的很长一段里，
                国内外的大厂也都在同一时间裁员，甚至延续至今（2023年）。我现在跑到一家传统行业里，在大厂搬砖用的React+TS，来这之后现学的Vue，总体来说传统行业的技术积累、资金实力和团队氛围完全不能和大厂比，但能准点下班，意味着我有更多的时间去做自己想做的事。
                除此之外，在这种地方，每个人carry的项目和负责的职位也变多了，其实整体给人锻炼提升的程度，真的不比大厂差，但还是，工资、技术、氛围还是没法比。
            </p>
            <p>离职的时候leader和我说，<span style="color: brown;">『你还年轻，这个行业的黄金10年已经过了，我们已经离不开了，你要想想，以后是不是还有别的黄金领域可以涉足，如果指望再在互联网迎接第二春，还是有点困难了』</span>。</p>
            <p>说实话，我和我朋友现在都越发觉得有道理。我们本是普通人，工作即是人生的主旋律，但怎么找到一份能让人愿意为之付出努力的工作却是难上加难，还是希望正在看的你，如果还有机会，好好想想未来的职业，自己是不是喜欢，发展前景如何，
            能干多久，以及最重要的，是不是让自己失去了原本的生活。
            </p>
        </div>

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