const Navbar = () => {
  return (
    <nav className="w-screen flex items-center font-merrieather py-6 absolute z-50 justify-around">
            <div className="logo-brand flex items-center">
                <img src="/logo.png" className="m-2 mr-5"/>
                <p className="font-bold m-auto">Holadok</p>
            </div>
            <div className="nav-menu flex justify-evenly">
                <div className="nav-items m-auto">
                    <a href="#" className="mr-10 font-semibold">Home</a>
                    <a href="#" className="mr-10">Features</a>
                    <a href="#" className="mr-10">Blog</a>
                    <a href="#" className="mr-10">About Us</a>
                </div>
            </div>
            <div className="flex items-center">
                <div className="item-login">
                    <a href="#" className="font-semibold mr-10">Login</a>
                </div>
                <div className="book-now border-black border pt-1 pb-1 pr-4 pl-4 rounded-sm">
                    <a href="">Book Now</a>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
