/*!
=> Push Notification Material Design V 1.0
=> Copyright: 2018 CodePelajar
=> Licensed under MIT | https://github.com/codepelajar/codepelajar/blob/master/LICENSE
*/

document.getElementById('infoPelajarjo').classList.add('fadeInDown')
document.getElementsByClassName('gelap')[0].classList.add('active')


setTimeout(function(){
 document.getElementById('infoPelajarjo').classList.add('fadeOutU')
 document.getElementById('infoPelajarjo').classList.remove('fadeInDown')
document.getElementsByClassName('gelap')[0].classList.remove('active')

},8000)
