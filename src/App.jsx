import { useState } from "react";
import Head from "./components/Head";
import Search from "./components/Search";
import Tags from "./components/Tags";

function App() {
  const [tags, setTags] = useState([]);
  return (
    <div className="h-screen">
      <div className="flex flex-col w-[700px] h-[350px] shadow-lg p-12 absolute bg-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Head />
        <Search setTags={setTags} />
        <Tags tags={tags} setTags={setTags}/>
      </div>
    </div>
  );
}

export default App;
