import React, {useCallback, useContext, useState} from 'react'
import Context from '../context/UserContext'
import loginService from '../services/login'

function useUser() {
    const {jwt, setJWT} = useContext(Context)
    const [state, setState] = useState({loading: false, error: false})

    const login = useCallback(({email, password}) => {
      setState({loading: true, error: false})
        loginService({email, password})
        .then(jwt => {
          window.sessionStorage.setItem('jwt', jwt)
          setState({loading: true, error: false})
          setJWT(jwt)
        })
        .catch(err => {
          window.sessionStorage.removeItem('jwt')
          setState({loading: false, error: true})
          console.log(err)
        })
    }, [setJWT])

    const logout = useCallback(() => {
      setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
}

export default useUser