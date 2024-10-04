import Cards from '../Cards/Cards'

const LandingPage = () => {
  // const [count, setCount] = useState(0)

  const cardData = [
    {
        title: "Conscious Leadership",
        description: "a new paradigm for leading",
        image: "/clg.JPG"
    },
    {
        title: "Latine Futurism",
        description: "a new paradigm for imagining",
        image: "/solarpunk_venezuela.jpg"
    },
    {
        title: "Creative and Protopian AI",
        description: "a new paradigm for inventing and living with technology",
        image: "/futurist_nature_living.JPG"
    },
    {
        title: "World Weaving Garage (WWG)",
        description: "a new paradigm for innovating and building the future",
        image: "/wwg.jpg"
    },
  ]

  return (
    <>
       <h1 className='font-semibold mb-3 font-mono text-stone-800'>Red Pill</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-mono">
            {cardData.map((item, index) => (
                <Cards 
                    key={index} 
                    title={item.title} 
                    description={item.description} 
                    image={item.image} 
                />
            ))}
        </div>
    </>
  )
}

export default LandingPage
