import "./singlePost.css"

export const SinglePost = () => {
  return (
    <div className="singlePost"> 
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://c4.wallpaperflare.com/wallpaper/852/706/531/england-london-big-ben-travel-wallpaper-thumb.jpg" alt="" />
            <h1 className="singlePostTitle">
                blavla
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author : <b>Aakanksha</b></span>
                <span className="singlePostDate"> Date : 1 hour ago</span>
            </div>
            <p className="singlePostDesc">Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques</p>
        </div>
        </div>
  )
}
