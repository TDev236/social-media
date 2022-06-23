import StoryCard from "./StoryCard"

const storiesInfo = [
    {
        id:4,
        name: 'Elon Musk',
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        id:3,
        name: 'Jeff Benzos',
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        id:2,
        name:"Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
    {
        id:1,
        name: 'Mark Zuckerberg',
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    }
]


const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
        {storiesInfo.map(({name, src, profile, id}) => (
            <StoryCard key={id} name={name} profile={profile} src={src}/>
        ))}
    </div>
  )
}

export default Stories