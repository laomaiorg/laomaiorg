function updateCommentsCount() {
  const liElements = document.querySelectorAll('.archive-entry')
  const urls = []
  
  liElements.forEach(function (li) {
    const relPermalink = li.getAttribute('data-relpermalink')
    urls.push(relPermalink)
  })

  twikoo.getCommentsCount({
    envId: 'https://twikoo.laomai.org',
    urls: urls,
    includeReply: false, // 评论数是否包括回复，默认：false
  })
    .then(function (responses) {
      responses.forEach(function (res) {
        const countElement = document.getElementById(res.url)
        if (countElement && typeof res.count !== 'undefined') {
          countElement.textContent = res.count
        } else {
          console.error('Invalid response:', res)
        }
      })
    })
    .catch(function (err) {
      console.error(err)
    })
}

// 页面加载完成后调用更新评论数量函数
window.addEventListener('load', updateCommentsCount)