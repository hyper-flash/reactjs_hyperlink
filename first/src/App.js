import './App.css';
import Login from './login';
function App() {
  const data = {
    email: "kd@gmail.com",
    password: "000qweASD@",
    title: 'Access Point'
  };
  

  return (
    <div> 
      {/* <Register /> */}
      <Login data={data} />
    </div>
  );
}
export default App;
