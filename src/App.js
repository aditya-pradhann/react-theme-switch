import { useEffect, useState } from 'react';
import { DarkModeToggle } from './components/DarkModeToggle';

function App() {

  const [theme, setTheme] = useState("dark");

  const onUpdateTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if(savedTheme) {
      setTheme(savedTheme);
    }
  }, [])

  return (
    <div className="layout" data-theme={theme === 'dark' ? 'dark' : 'light'}>
      <DarkModeToggle onUpdateTheme={onUpdateTheme} theme={theme} />
    </div>
  );
}

export default App;
