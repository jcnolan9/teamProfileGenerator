function html(team) {
    
    let myManager = document.createElement('section')
    let name = document.createElement('h2')
    let role = document.createElement('h3')
    let id = docuemnt.createElement('p')
    let email = docuemnt.createElement('p')
    let office = docuemnt.createElement('p')
    name.textContent = team.engineers[i].getName()
    role.textContent = team.engineers[i].getRole()
    id.textContent = team.engineers[i].getID()
    email.textContent = team.engineers[i].getEmail()
    office.textContent = team.engineers[i].getOffice()
    myManager.appendChild(name)
    myManager.appendChild(role)
    myManager.appendChild(id)
    myManager.appendChild(email)
    myManager.appendChild(office)

    for(let i=0; i<team.engineers.length; i++) {
       let myEng = document.createElement('section')
       let name = document.createElement('h2')
       let role = document.createElement('h3')
       let id = docuemnt.createElement('p')
       let email = docuemnt.createElement('p')
       let github = docuemnt.createElement('p')
       name.textContent = team.engineers[i].getName()
       role.textContent = team.engineers[i].getRole()
       id.textContent = team.engineers[i].getID()
       email.textContent = team.engineers[i].getEmail()
       github.textContent = team.engineers[i].getGithub()
       myEng.appendChild(name)
       myEng.appendChild(role)
       myEng.appendChild(id)
       myEng.appendChild(email)
       myEng.appendChild(github)
    }

    for(let i=0; i<team.interns.length; i++) {
        let myIntern = document.createElement('section')
        let name = document.createElement('h2')
        let role = document.createElement('h3')
        let id = docuemnt.createElement('p')
        let email = docuemnt.createElement('p')
        let school = docuemnt.createElement('p')
        name.textContent = team.engineers[i].getName()
        role.textContent = team.engineers[i].getRole()
        id.textContent = team.engineers[i].getID()
        email.textContent = team.engineers[i].getEmail()
        school.textContent = team.engineers[i].getSchool()
        myIntern.appendChild(name)
        myIntern.appendChild(role)
        myIntern.appendChild(id)
        myIntern.appendChild(email)
        myIntern.appendChild(school)
     }

}

module.exports = html