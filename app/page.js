import TopicsList from '@/components/TopicsList'
import Image from 'next/image'
import Connectmongodb from '@/database/Connectmongodb'
export default function Home() {
  return (
    <main >
  <TopicsList/>
  <Connectmongodb/>
    </main>
  )
}
