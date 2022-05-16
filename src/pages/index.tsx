import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Menu } from '../components/Menu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | KNS</title>
      </Head>
      <main>
        <Menu />
      </main>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {

  return {
    props: {},
    revalidate: 60 * 60 * 24 // 24 hours
  }
}