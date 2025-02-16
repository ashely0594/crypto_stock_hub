import { useState } from "react";
import "./Sidebar.css"; // Adjust the path if necessary
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


// Menu items for the carousel and navigation
const menuItems = [
  { name: "Home", icon: "home" },
  { name: "Apps", icon: "dashboard" },
  { name: "Create", icon: "add_box" },
  { name: "Favourites", icon: "favorite" },
];

// Icon component to render material icons
export const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

// Carousel component displaying the menu items
const MyCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      swipeable={true}
      emulateTouch={true}
    >
      {menuItems.map((item, index) => (
        <div key={index}>
          <Icon icon={item.icon} />
          <span>{item.name}</span>
        </div>
      ))}
    </Carousel>
  );
};

// Navigation tabs component
const tabs = ["menu", "lock", "settings"];

const Nav = ({ activeTab, onTabClicked }) => (
  <header className="tabs">
    {tabs.map((tab, index) => (
      <button
        key={tab}
        type="button"
        onClick={() => onTabClicked(index)}
        className={`${activeTab === index ? "active" : ""}`}
      >
        <Icon icon={tab} />
      </button>
    ))}
    <div
      className="underline"
      style={{
        translate: `${activeTab * 100}% 0`,
      }}
    />
  </header>
);

const NavButton = ({ name, icon }) => (
  <button type="button">
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
  </button>
);

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const handleTabClicked = (index) => setActiveTab(index);

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <aside className={`sidebar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div>
        <Nav activeTab={activeTab} onTabClicked={handleTabClicked} />
        
        {/* Carousel displaying menu items */}
        <MyCarousel />

        {/* Content for the sidebar */}
        <div className="sidebar-content">
          <div>
            <form>
              <div className="textbox">
                <span className="material-symbols-outlined">account_circle</span>
                <input placeholder="Name" type="text" required />
              </div>
              <div className="textbox">
                <span className="material-symbols-outlined">lock</span>
                <input placeholder="Password" type="password" required />
              </div>
              <div className="textbox">
                <span className="material-symbols-outlined">email</span>
                <input placeholder="Email" type="text" required />
              </div>
            </form>
          </div>

          {/* Settings and mode toggles */}
          <div>
            <form>
              <div className="row">
                <div className="switch-label">Dark Mode</div>
                <span className="switch">
                  <input
                    id="switch-round"
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleTheme} // Toggle theme on checkbox change
                  />
                  <label htmlFor="switch-round"></label>
                </span>
              </div>
              <div className="row">
                <div className="switch-label">Accessibility Mode</div>
                <span className="switch">
                  <input id="switch-round" type="checkbox" />
                  <label htmlFor="switch-round"></label>
                </span>
              </div>
              <div className="row">
                <div className="switch-label">Quirks Mode</div>
                <span className="switch">
                  <input id="switch-round" type="checkbox" />
                  <label htmlFor="switch-round"></label>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;



     
  