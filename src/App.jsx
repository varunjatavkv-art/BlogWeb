import Header from "./components/Header";

function App({ children }) {
  return (
    <>
      <Header />
      <div className="pt-40">{children}</div>
    </>
  );
}

export default App;
