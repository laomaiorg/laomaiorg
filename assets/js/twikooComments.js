function updateComments() {
  twikoo.getRecentComments({
    envId: 'https://twikoo.laomai.org', // 环境 ID
    pageSize: 5, // 获取多少条，默认：10，最大：100
    includeReply: false // 是否包括最新回复，默认：false
  }).then(function (res) {
    // console.log(res);
    const latestCommentsContainer = document.getElementById('latestComments');

    // 遍历评论数组，创建每个评论的 HTML 元素并添加到容器中
    res.forEach(function (comment) {

      const commentLink = document.createElement('a');
      commentLink.className = 'flex items-center gap-4 px-4 py-3 rounded opacity-80 hover:opacity-100 hover:bg-stone-200 dark:hover:bg-stone-800';
      // 将 API 返回的 URL 与 ID 进行拼接来获取想要的值
      commentLink.href = comment.url + '#' + comment.id;
      
      const commentImage = document.createElement('div');
      commentImage.className = 'flex items-center self-center shrink-0';
      const image = document.createElement('img');
      image.src = comment.avatar;
      image.alt = 'Avatar';
      image.className = 'w-10 rounded';
      commentImage.appendChild(image);
      
      const commentContent = document.createElement('div');
      commentContent.className = 'flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0';
      const commentMeta = document.createElement('div')
      commentMeta.className = 'flex flex-row justify-between w-full'
      const commentTitle = document.createElement('h4');
      commentTitle.innerText = comment.nick;
      commentTitle.className = 'text-base font-medium';
      const commentTime = document.createElement('time')
      commentTime.innerText = comment.relativeTime;
      commentTime.className = 'text-sm opacity-40'
      const commentText = document.createElement('p');
      commentText.innerText = comment.commentText;
      commentText.className = 'w-full text-sm truncate';

      // 定义创建的标签
      commentMeta.appendChild(commentTitle);
      commentMeta.appendChild(commentTime);

      commentContent.appendChild(commentMeta);
      commentContent.appendChild(commentText);
      
      commentLink.appendChild(commentImage);
      commentLink.appendChild(commentContent);

      latestCommentsContainer.appendChild(commentLink);
    });
  }).catch(function (err) {
    console.error(err);
  });
}
// 页面加载完成后调用更新评论数量函数
window.addEventListener('load', updateComments)