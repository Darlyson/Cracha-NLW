const linksSocialMedia = {
  github: 'Darlyson',
  youtube: 'channel/UCZdqHA52zNEzBgGPjuN0CfQ',
  facebook: 'darlysonsabino',
  instagram: 'darlysonsabino',
  twitter: 'darlysonsabino'
}

function changeSocialMediaLinks() {
  /* DOM javascript
  document.getElementById('userName').textContent = 'mama'
  userName.textContent = 'Morena' 
  const social = li.getAttribute('class')
  alert(li.children[0].href)
  */

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()
