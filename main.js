document.getElementById('share').onclick = function() {
  FB.ui({
    method: 'feed',
    link: 'https://joshua1988.github.io/DevCampWAP-SWA/',
    caption: 'My Facebook profile application',
  }, function(response){});
};

// function clickButton() {
//   alert("프로필을 좋아합니다..!");
// }
