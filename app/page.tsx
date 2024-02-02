import Image from 'next/image'

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }

    return res.json();
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

export default async function Home() {

  const { topics } = await getTopics();
  return (<>
    {
      topics.map((t: any) => (
        <div
        className='flex flex-row items-center justify-center py-2'
        >
          <h1 className='text-xl font-bold'>{t.title}, </h1>
          <h1 className='ml-2'>{t.description}</h1>
        </div>
      ))
    }
  </>
  )
}


