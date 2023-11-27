import { Icon } from "@/Icon"
import RemoveBtn from "./RemoveBtn"
import Link from "next/link"

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {cache:"no-store" })
    if (!res.ok) {
      throw new Error("Failed to fetch topics")
    }
    return res.json()

  } catch (error) {
    console.log("Error Loading Topics", error)
  }
}

const TopicsList = async () => {

  const { topics } = await getTopics()

  return (
    <>
      {topics.map((t) => (
        <div className="gap-5 items-start p-4 border border-slate-300 my-3 flex justify-between">
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div className="w-[660px]">{t.description}</div>

          </div>

          <div className="flex gap-2 ">

            <RemoveBtn id={t._id}/>
            <Link href={`/editTopic/${t._id}`}>
              <Icon.Hi.HiPencil size={24} />
            </Link>

          </div>

        </div>
      ))}
    </>

  )

}

export default TopicsList