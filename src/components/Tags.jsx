function Tag({ tag, id, setTags, tags }) {
  const handleClick = (e) => {
    let items = tags.filter((item) => {
      return item !== e.target.id;
    });
    setTags(items);
  };
  return (
    <div className="mb-2 p-2 flex items-center justify-between shadow-md text-white bg-cyan-300 mr-2 rounded">
      {tag}
      <button
        onClick={handleClick}
        id={tag}
        className="font-bold text-base ml-2"
      >
        x
      </button>
    </div>
  );
}

function Tags({ tags, setTags }) {
  return (
    <div className="mt-3 flex flex-wrap">
      {tags.map((tag, i) => {
        return <Tag tag={tag} tags={tags} setTags={setTags} key={i} />;
      })}
    </div>
  );
}

export default Tags;
