import AppDrawer from './AppDrawer';

function App() {
  const drawerItems = ['About', 'Get Started', 'Sign In'];
  return (
    <>
      <AppDrawer drawerItems={drawerItems} />
    </>
  );
}

export default App;
