import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import PostForm from './components/PostForm'


const App: React.FC = () => {
return (
<div className="app-root">
<Navbar />
<main className="container">
<Routes>
<Route path="/" element={<PostList />} />
<Route path="/posts" element={<Navigate to="/" replace />} />
<Route path="/create" element={<PostForm mode="create" />} />
<Route path="/posts/create" element={<PostForm mode="create" />} />
<Route path="/posts/:id" element={<PostDetail />} />
<Route path="/posts/edit/:id" element={<PostForm mode="edit" />} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</main>
</div>
)
}


export default App
