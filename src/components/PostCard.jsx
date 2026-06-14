const PostCard = ({ post, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(post)}>
      <div className="card-content">
        <h3>{post.title}</h3>
        <p>👤 User ID: {post.userId}</p>
        <p>💬 {post.body.substring(0, 100)}...</p>
        <p>
          👍 {post.reactions?.likes || 0} likes | 👎{" "}
          {post.reactions?.dislikes || 0} dislikes
        </p>
        <p>🏷️ Tags: {post.tags?.slice(0, 3).join(", ")}</p>
      </div>
    </div>
  );
};
export default PostCard;
