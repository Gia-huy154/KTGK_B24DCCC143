import React from 'react'
import type { Post } from "../types";
import { useNavigate } from 'react-router-dom'
import { usePosts } from '../context/PostContext'


const PostCard: React.FC<{ post: Post }> = ({ post }) => {
const navigate = useNavigate()
const { deletePost } = usePosts()


const onDelete = () => {
if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
if (deletePost(post.id)) alert('Xóa thành công!')
}
}


return (
<article className="card">
<img src={post.thumbnail} alt={post.title} className="thumb" />
<div className="card-body">
<h3>{post.title}</h3>
<p className="meta">{post.author} • {new Date(post.createdAt).toLocaleDateString()}</p>
<p>{post.content.slice(0, 100)}{post.content.length > 100 ? '...' : ''}</p>
<div className="actions">
<button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
<button onClick={() => navigate(`/posts/edit/${post.id}`)}>Sửa</button>
<button onClick={onDelete}>Xóa</button>
</div>
</div>
</article>
)
}
