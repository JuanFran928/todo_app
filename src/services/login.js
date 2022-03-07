const ENDPOINT = 'http://127.0.0.1:8080'

export default function login ({ email, password }) {
    return fetch(`${ENDPOINT}/api/auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }).then( res => { 
        if (!res.ok) { throw new Error('Response is NOT ok!') }
            return res.json()
        })
        .then(
            res => {
                const {jwt} = res
                return jwt
            })
}

/*
  const Login = details => {
    console.log(details)
    fetch('http://127.0.0.1:8080/api/auth/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details)
    }).then(
      data => {
        if (data.status === 200 && data.statusText === "OK") {
          setUser({
            name: details.name,
            email: details.email
          })
          console.log("Logged in")
        } else if (data.status === 404 && data.statusText === "Not Found") {
          console.log("Details do not match!");
          setError("Details do not match!")
        }
      }
    ).catch(
      error => {
        console.log(error)
      }
    )
  }

  const Logout = () => {

    fetch('http://127.0.0.1:8080/api/auth/logout/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    }).then(
      data => {
        if (data.status === 200 && data.statusText === "OK") {
          setUser({
            name: "",
            email: ""
          })
          console.log("Logged out")
        } else {
          console.log("there was an error")
        }
      }
    ).catch(
      error => console.log(error)
    )
  }*/