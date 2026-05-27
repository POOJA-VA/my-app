import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h2>Dashboard</h2>
      </div>

      <div className="header-right">
        <button className="header-btn">More Menus</button>

        <button className="header-btn">Menu</button>

        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
