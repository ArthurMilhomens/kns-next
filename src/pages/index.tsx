import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Menu } from '../components/Menu';
import { Plans } from '../components/Plans';
import { Schedule } from '../components/Schedules';
import { Space } from '../components/Space';
import { TextMenu } from '../components/TextMenu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | KNS</title>
      </Head>
      <main>
        <Menu />
        <TextMenu />
        <Plans />
        <Space />
        <Schedule />
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