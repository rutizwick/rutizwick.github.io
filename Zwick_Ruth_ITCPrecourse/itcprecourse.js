const GITHUB_URL = "https://api.github.com/users/IsraelTechChallengeITC";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });

//contact 

$(document).ready(function() {
  $(':input[type="submit"]').prop('disabled', true);
  $('input[type="text"]').keyup(function() {
     if($(this).val() != '') {
        $(':input[type="submit"]').prop('disabled', false);
     }
  });
});