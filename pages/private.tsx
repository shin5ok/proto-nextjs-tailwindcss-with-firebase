import type { NextPage } from 'next'
import Head from 'next/head'
import { useAuth } from '../lib/authContext'

const Home: NextPage = () => {
  const { user, loading} = useAuth()

  // ローディングの文字
  if(loading) return <h1>Loading...</h1>

  // ログインが必要
  if(!user) return <h1>U need to login</h1>

  return (
    <>
      <Head>
        <title>Private</title>
      </Head>

      <main>
      <h1>Email : {user?.claims.email}</h1>
      Private
      </main>
    </>
  )
}

export default Home
