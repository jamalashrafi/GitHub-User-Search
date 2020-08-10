class Ui {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showUserProfile = (user) => {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img alt="User Image" src="${user.avatar_url}" class="img-fluid mb-2"/>
                    <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank"> View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary ">Public Repos : ${user.public_repos}</span>
                    <span class="badge badge-secondary ">Public Gists : ${user.public_gists}</span>
                    <span class="badge badge-success ">Followers : ${user.followers}</span>
                    <span class="badge badge-danger ">Following : ${user.following}</span>
                    <br>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">Name : ${user.name}</li>
                        <li class="list-group-item">Location : ${user.location}</li>
                        <li class="list-group-item">Email : ${user.email}</li>
                        <li class="list-group-item">Created At : ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="h1 mb-3">Latest Repos</div>
        <div id="repos"></div>
      `;
  };

  showRepos = (repos) => {
    let output = '';

    repos.forEach(
      (repo) =>
        (output += `
        <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary ">Stars : ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary ">Watchers : ${repo.watchers_count}</span>
                    <span class="badge badge-danger ">Forks : ${repo.forms_count}</span>
                </div>
            </div>
      </div>
      `)
    );
    document.getElementById('repos').innerHTML = output;
  };

  showAlert = (message, className) => {
    this.clearAlert();
    const div = document.createElement('div');
    const textNode = document.createTextNode(message);
    div.classList = className;
    div.appendChild(textNode);

    const searchContainer = document.querySelector('.searchContainer');
    const searchUser = document.querySelector('.search');
    searchContainer.insertBefore(div, searchUser);
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  };

  clearAlert = () => {
    let divAlert = document.querySelector('.alert');
    if (divAlert !== null) {
      divAlert.remove();
    }
  };

  clearSearchText = () => {
    let profileDiv = document.getElementById('profile');
    if (profileDiv !== null) {
      profileDiv.innerHTML = '';
    }
  };
}
