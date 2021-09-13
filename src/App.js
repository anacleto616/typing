const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">raf</span>
        <span className="remainder">ael</span>
      </div>
      <div className="typed-keys">asdfrafasdf</div>
      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>carro</li>
          <li>profissional</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
