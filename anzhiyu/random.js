var posts=["posts/5f6551dc.html","posts/759e8c74.html","posts/261f.html","posts/179cdf12.html","posts/a1e8a28a.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2023/03/03/6401bcbf1d33b.webp"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/646cdb372913c.webp!avatar","descr":"分享网络安全与科技生活","siteshot":"https://avatar.qjqq.cn/1/647571edf20a9.webp!avatar"},{"name":"小植の小破站","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","siteshot":"https://static.xiaoztx.top/xiaozhi-blog-static/img/xiaozhi-siteshot.png","descr":"生生不息，好运不止"},{"name":"辰风","link":"https://chenfengblog.eu.org/","avatar":"https://image.anheyu.com/useruploads/108/2023/03/12/640dac11413b0.png","descr":"超电磁炮永世长存","siteshot":"https://image.anheyu.com/useruploads/108/2023/05/26/64709d5e8b9c5.png"},{"name":"轻笑Chuckle","link":"https://www.qcqx.cn","avatar":"https://www.qcqx.cn/img/head.webp","descr":"漫天倾尘,风中轻笑","siteshot":"https://www.qcqx.cn/img/qcqx.webp"},{"name":"Roozen 的小破站","link":"https://roozen.top","avatar":"https://roozen.top/upload/touxiang.jpg","descr":"技术宅男拯救世界！","siteshot":"https://roozen.top/upload/siteindex.png"},{"name":"屑殇","link":"https://jinghuashang.cn/","descr":"桃李春风一杯酒，江湖夜雨十年灯","avatar":"https://jinghuashang.cn/img/acc.webp"},{"name":"月亮","link":"https://blog.monl.cc/","avatar":"https://image.muerg.cn/2/2023/07/16/64b383ff8b832.jpeg","descr":"林，我一点都不遗憾没有在最好的时光遇到你因为遇到你之后最好的时光才开始"},{"name":"咬一口激动的鱼","link":"https://jiyu134.top/","avatar":"https://q.qlogo.cn/g?b=qq&nk=2056517872&s=0","descr":"风带来了故事的种子，时间使之发芽"},{"name":"呆鱼","link":"https://daiyu.fun/","avatar":"https://daiyu.fun/img/avatar.png","descr":"Hello World !"},{"name":"澪度の博客","link":"https://0du.top/","avatar":"http://q2.qlogo.cn/headimg_dl?dst_uin=110990498&spec=100","descr":"可能会随便写点什么"}];
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