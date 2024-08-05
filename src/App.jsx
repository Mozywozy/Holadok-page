import Content from "./components/Content";
import Gambar from "./components/Gambar";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-between">
        <Content />
        <Gambar />
      </div>
    </>
  )
}