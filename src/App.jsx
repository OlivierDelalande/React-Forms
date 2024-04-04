import Header from './components/Header.jsx';
import Login from './components/StateLogin.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
    </>
  );
}

export default App;

// PS: You could also try react third party form libraries like 
// React Hook Form or Formik