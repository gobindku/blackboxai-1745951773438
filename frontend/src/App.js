import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage('Failed to connect to backend'));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-sans">
      <header className="text-5xl font-bold text-blue-600 mb-4">evr</header>
      <p className="text-lg text-gray-700 mb-6">{message}</p>
      <footer className="text-sm text-gray-500">
        Powered by React, Express, and MongoDB
      </footer>
    </div>
  );
}

export default App;
