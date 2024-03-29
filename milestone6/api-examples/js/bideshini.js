const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerText = user.results[0].gender;

    const name = `${user.results[0].name.first} ${user.results[0].name.last }`;
    document.getElementById('name').innerText = name;
}

loadUser();