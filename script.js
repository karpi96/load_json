let createProfile = function(user){
    let newDiv = document.createElement('div');
    let profilePic = document.createElement('img');
    let ul = document.createElement('ul');
    let nameLi = document.createElement('li');
    let emailLi = document.createElement('li');
    
    let nameTxt = document.createTextNode(user.name);
    let emailTxt = document.createTextNode(user.email);

    profilePic.src = user.profilePicture;

    nameLi.appendChild(nameTxt);
    emailLi.appendChild(emailTxt);

    ul.appendChild(nameLi);
    ul.appendChild(emailLi);
    
    newDiv.appendChild(profilePic);
    newDiv.appendChild(ul);

    newDiv.classList.toggle('user');
    //newDiv.className = "user"
    let content = document.getElementById('content');

    content.appendChild(newDiv);
}

let createElementsFromJson = function(users){
    for(let user of users){
        createProfile(user)
    }
}

fetch('users.json').then( (response)=>response.json()  )
                    .then( (users)=> createElementsFromJson(users) );


            