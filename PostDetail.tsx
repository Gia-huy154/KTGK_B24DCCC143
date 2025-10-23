import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usePosts } from '../context/PostContext'


const PostDetail: React.FC = () => {
const { id } = useParams()
const { getPost, deletePost } = usePosts()
const navigate = useNavigate()


if (!id) return null
const post = getPost(id)
if (!post) return <div className="page"><p>Bài viết không tìm thấy.</p></div>


const onDelete = () => {
if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
deletePost(post.id)
alert('Xóa thành công!')
navigate('/')
}
}


return (
<div className="page detail">
<button onClick={() => navigate('/')}>Quay lại</button>
<h1>{post.title}</h1>
<p className="meta">{post.author} • {new Date(post.createdAt).toLocaleString()} • {post.category}</p>
<img src={post.thumbnail} alt={post.title} className="detail-thumb" />
<div className="content">
{post.content.split('\n').map((line, i) => <p key={i}>{line}</p>)}
</div>


<div className="detail-actions">
<button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
<button onClick={onDelete}>Xóa bài viết</button>
</div>
</div>
)
}


export default PostDetail
