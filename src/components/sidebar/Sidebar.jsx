import "./sidebar.css"

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle"> ABOUT ME</span>
        <img src="" alt="" />
        <p> Hey there! This is Aakanksha. I am a 2nd year B.Tech CSE student. I like coding and I'm always looking forward to learning more about it.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Books</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Style</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div>
  )
}
