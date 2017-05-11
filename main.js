document.getElementsByClassName('feature-item-link').onclick = function() {
  FB.ui({
    method: 'feed',
    link: 'https://developers.facebook.com/docs/',
    caption: 'My Facebook profile application',
  }, function(response){});
};

// function clickButton() {
//   alert("프로필을 좋아합니다..!");
// }
