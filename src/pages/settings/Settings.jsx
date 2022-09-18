import { Sidebar } from "../../components/sidebar/Sidebar"
import "./settings.css"

export const Settings = () => {
  return (
    <div className="settings">
        <div className="settingsWrapper"></div>
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your Account</span>
          </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://c4.wallpaperflare.com/wallpaper/852/706/531/england-london-big-ben-travel-wallpaper-thumb.jpg" alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Aakanksha" />
          <label>Email</label>
          <input type="text" placeholder="aakankshapal1@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
        <Sidebar/>
        </div>
  )
}
