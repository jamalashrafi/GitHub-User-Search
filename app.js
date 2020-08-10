const githubApi = new Github();
const UiClass = new Ui();
const userText = document.getElementById('searchUser');

userText.addEventListener('keyup', (event) => {
  if ('' !== event.target.value) {
    githubApi.getUser(event.target.value).then((data) => {
      if (data.profile.message === 'Not Found') {
        UiClass.showAlert('User Not Found', 'alert alert-danger');
      } else {
        UiClass.showUserProfile(data.profile);
        UiClass.showRepos(data.repos);
      }
    });
  } else {
    UiClass.clearSearchText();
  }
});
