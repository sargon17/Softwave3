import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </p>
      </div>
      <SignupForm />
    </div>
  );
}

export default App;
