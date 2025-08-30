function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">MyApp</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-gray-200">Home</a></li>
        <li><a href="#" className="hover:text-gray-200">About</a></li>
        <li><a href="#" className="hover:text-gray-200">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;