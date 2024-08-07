var posts=["posts/1b7c/","posts/2c81e055/","posts/261f/","posts/759e8c74/","posts/8934/","posts/179cdf12/","posts/5f7448b7/","posts/cba8/","posts/a1e8a28a/","posts/81160ed8/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"主题开发"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2023/03/03/6401bcbf1d33b.webp","color":"vip","tag":"主题设计"},{"name":"Roozen 的小破站","link":"https://roozen.top","avatar":"https://roozen.top/upload/touxiang.jpg","descr":"技术宅男拯救世界！","siteshot":"https://roozen.top/upload/siteindex.png","color":"vip","tag":"主题开发"},{"name":"轻笑Chuckle","link":"https://www.qcqx.cn","avatar":"https://www.qcqx.cn/img/head.webp","descr":"漫天倾尘,风中轻笑","siteshot":"https://www.qcqx.cn/img/qcqx.webp","color":"vip","tag":"技术"},{"name":"Naokuo","link":"https://www.naokuo.top","avatar":"https://cdn.cbd.int/naokuo-blog@1.2.18/img/about/avatar-512x512.png","descr":"请给我来亿碗三鲜面","siteshot":"https://cdn.cbd.int/naokuo-blog@1.2.20/img/about/www.naokuo.top.webp","color":"vip","tag":"脑阔"},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://npm.elemecdn.com/@kmar/fonts@1/avatar/own.png","descr":"开发学习启发性二刺螈","siteshot":"https://npm.elemecdn.com/@kmar/fonts@1/sc/own.jpg","color":"vip","tag":"技术"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。","siteshot":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","color":"vip","tag":"技术"},{"name":"辰风","link":"https://chenfengblog.eu.org/","avatar":"https://image.anheyu.com/useruploads/108/2023/03/12/640dac11413b0.png","descr":"超电磁炮永世长存"},{"name":"屑殇","link":"https://jinghuashang.cn/","descr":"桃李春风一杯酒，江湖夜雨十年灯","avatar":"https://jinghuashang.cn/img/acc.webp"},{"name":"小植の小破站","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","descr":"生生不息，好运不止"},{"name":"狼林鱼池","link":"https://blog.jiyu134.top/","avatar":"https://q.qlogo.cn/g?b=qq&nk=2056517872&s=0","descr":"风带来了故事的种子，时间使之发芽","tag":"激鱼"},{"name":"呆鱼","link":"https://daiyu.fun/","avatar":"https://daiyu.fun/img/avatar.png","descr":"Hello World !","tag":"呆鱼"},{"name":"小李同学 Coding","link":"https://blog.xxfer.cn/","avatar":"https://www.freeimg.cn/i/2023/10/31/65408016573a9.jpg","descr":"一支努力变强的小彩笔"},{"name":"布丁の小窝","link":"https://www.furryowo.top/","avatar":"https://dn-qiniu-avatar.qbox.me/avatar/7da7e82f04de94c795db0301c3397bb6?","descr":"一个有梦想的咸鱼","tag":"布丁"},{"name":"Gabriel","link":"https://blog.553888.xyz/","avatar":"https://ooo.0x0.ooo/2024/01/14/OvOHpi.webp","descr":"是一名分享趣味，收获新知的博主","tag":"Gabriel"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };