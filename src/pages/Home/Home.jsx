import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { greet } = useAuth();
  return (
    <div>
      This is Home
      <p>{greet}</p>
      <h2 className="text-3xl font-bold underline">Hello World</h2>
      <button className="btn btn-primary">Click</button>
      {/* <dotlottie-player src="https://lottie.host/168f1f7a-4e8d-46ef-94db-23e1da1413d0/RgRysZ70TK.json" background="transparent" speed={1} style={{width: 300, height: 300}} direction={1} playmode="bounce" autoPlay /> */}
    </div>
  );
};

export default Home;
