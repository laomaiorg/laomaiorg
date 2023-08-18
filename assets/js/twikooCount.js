// 获取并更新评论数量
function updateCommentsCount() {
  let liElements = document.querySelectorAll('.latestPosts li')
  let promises = []

  liElements.forEach(function (li) {
    let relPermalink = li.getAttribute('data-relpermalink')
    console.log(relPermalink)
    let promise = twikoo.getCommentsCount({
      envId: 'https://twikoo.laomai.org',
      urls: [relPermalink],
      includeReply: false, // 评论数是否包括回复，默认：false
    })
    console.log(promise)
    promises.push(promise)
  })

  Promise.all(promises)
    .then(function (responses) {
      console.log(responses)
      // 处理每个请求的结果
      responses.forEach(function (res, index) {
        let countElement = document.getElementById(liElements[index].getAttribute('data-relpermalink'))
        if (countElement) {
          countElement.textContent = res[0].count
        }
      })
    })
    .catch(function (err) {
      // 发生错误
      console.error(err)
    })
}

// 页面加载完成后调用更新评论数量函数
window.addEventListener('load', updateCommentsCount)
