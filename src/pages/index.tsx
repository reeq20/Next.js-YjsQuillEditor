import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const ReactQuillEditor = dynamic(
    () =>
        import('../components/ui/Editor/ReactQuillEditor'),
    {ssr: false}
)


const Home: NextPage = () => {
    return (
        <ReactQuillEditor/>
    )
}

export default Home
