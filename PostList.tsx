import React, { useMemo, useState } from 'react'
import { usePosts } from '../context/PostContext'
import PostCard from './PostCard'


const PostList: React.FC = () => {
const { posts } = usePosts()
const [q, setQ] = useState('')


const filtered = useMemo(() => {
const qLower = q.trim().toLowerCase()
if (!qLower) return posts
return posts.filter(p => p.title.toLowerCase().includes(qLower))
}, [posts, q])


return (
<div className="page">
<header className="page-header">
<h1>Danh sách bài viết</h1>
<div>Tổng số: <strong>{posts.length}</strong></div>
</header>


<div className="controls">
<input placeholder="Tìm theo tiêu đề..." value={q} onChange={e => setQ(e.target.value)} />
</div>


<section className="grid">
{filtered.map(p => (
<PostCard key={p.id} post={p} />
))}
{filtered.length === 0 && <p>Không tìm thấy bài viết nào.</p>}
</section>
</div>
)
}


export default PostList
