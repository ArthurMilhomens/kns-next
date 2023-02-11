import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Contact } from '../components/Contact';
import { Menu } from '../components/Menu';
import { OurVision } from '../components/OurVision';
import { Plans } from '../components/Plans';
import { Schedule } from '../components/Schedules';
import { Space } from '../components/Space';
import { TextMenu } from '../components/TextMenu';
import { Flex, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | KNS</title>
      </Head>
      <main>
        <Box
          bgImage="url('/assets/background.png')"
          bgRepeat='no-repeat'
          bgAttachment='fixed'
          bgSize='100% 100%'
          maxW='100vw'
          maxH='100vh'
        >
          <Flex
            maxH='100vh'
            maxW='100vw'
            overflowX='hidden'
            overflowY='scroll'
            direction='column'
            backdropFilter='auto'
            backdropBrightness='35%'
            scrollBehavior='smooth'
          >
            <Menu />
            <TextMenu />
            <Plans />
            <Space />
            <Schedule />
            <OurVision />
            <Contact />
          </Flex>
        </Box>
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {},
    revalidate: 60 * 60 * 24 // 24 hours
  }
}