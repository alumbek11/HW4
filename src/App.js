import "./App.css";

function App() {
  const comment = [
    {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/62/62",
      },
    },
    {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/64/64",
      },
    },
    {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/64/64",
      },
    },
  ];

  return (
    <div className="App">
      <h1>Git progect</h1>
      {comment.map((item) => (
        <div className='div' key={item.text}>
          <div >
            <img src={item.author.avatarUrl} />
            <h4>{item.author.name}</h4>
          </div>
          <div>
            {item.text}
            <h4>{item.date.toDateString()}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
