function clickButton() {
  alert("프로필을 좋아합니다..!");
}
// Facebook SDK
window.fbAsyncInit = function() {
  FB.init({
    appId      : '373957932968890',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
};
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
