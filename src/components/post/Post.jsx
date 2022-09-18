import "./post.css"

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src="https://c4.wallpaperflare.com/wallpaper/852/706/531/england-london-big-ben-travel-wallpaper-thumb.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Paris</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            'City of Light'
        </p>
    </div>
  )
}

export default Post
