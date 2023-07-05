import Simp from "./compoments/simpsoms/simp.js";


const App = () => {
  return (
      <div>
        <Simp name={"Bart"} surname={"Simpson"} age={10} photo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>,
        <Simp name={"Homer"} surname={"Simpson"} age={40}
              photo={'https://static.wikia.nocookie.net/p__/images/3/3c/HomerSimpson.png'}/>,
        <Simp name={"Marge"} surname={"Simpson"} age={38}
              photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>,
        <Simp name={"Lisa"} surname={"Simpson"} age={8}
              photo={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>,
      </div>

  );
};

export default App;
