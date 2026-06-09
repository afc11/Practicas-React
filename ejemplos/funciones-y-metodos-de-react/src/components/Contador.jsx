const Contador = ({ count, setCount }) => {
  return (
    <>
      <h2>Contador</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>contador +</button>
      <button onClick={() => setCount(count - 1)}>contador -</button>
    </>
  );
};

export default Contador;
