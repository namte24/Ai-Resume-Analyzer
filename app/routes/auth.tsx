import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { usePuterStore } from "~/lib/puter"

export const meta: () => {title: string} [] = () =>([
    {title: 'ProfileIQ| Auth'},
    {name: 'description', content: 'Log into your account'},
])

function Auth() {
    const {isLoading, auth} = usePuterStore()
    const location = useLocation()
    const next = location.search.split('next=')[1]
    const navigate = useNavigate()

    useEffect(() => {
        if(auth.isAuthenticated) {
            navigate(next)
        }
    },[auth.isAuthenticated, next])
  return (
    <main className="bg-gray-900 bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
            <section className="flex flex-col gap-8 bg-gray-800 rounded-2xl p-10">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1>Welcome</h1>
                    <h2>Log in!</h2>
                </div>
                <div>
                    {isLoading ? (
                        <button className="auth-button animate-pulse bg-sky-400">
                            <p>Signing you in...</p>
                        </button>
                    ): (
                        <>
                        {auth.isAuthenticated ? (
                            <button className="auth-button" onClick={auth.signOut}>Log out</button>
                        ): (
                            <button className="auth-button" onClick={auth.signIn}>Log In</button>
                        )}
                        </>
                    )}
                </div>
            </section>
        </div>
    </main>
  )
}

export default Auth  