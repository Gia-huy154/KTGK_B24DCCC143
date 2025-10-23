import React, { useEffect, useState } from 'react'
content: p.content,
category: p.category,
})
}
}, [mode, params.id])


const validate = () => {
const e: Record<string, string> = {}
if (!form.title || form.title.trim().length < 10) e.title = 'Tiêu đề bắt buộc, ít nhất 10 ký tự.'
if (!form.author || form.author.trim().length < 3) e.author = 'Tác giả bắt buộc, ít nhất 3 ký tự.'
if (!form.content || form.content.trim().length < 50) e.content = 'Nội dung bắt buộc, ít nhất 50 ký tự.'
setErrors(e)
return Object.keys(e).length === 0
}


const onSubmit = (e: React.FormEvent) => {
e.preventDefault()
if (!validate()) return


if (mode === 'create') {
createPost({ ...form })
alert('Đăng bài thành công!')
navigate('/')
} else if (mode === 'edit' && params.id) {
updatePost(params.id, { ...form })
alert('Cập nhật thành công!')
navigate(`/posts/${params.id}`)
}
}


return (
<div className="page">
<h2>{mode === 'create' ? 'Tạo bài viết mới' : 'Chỉnh sửa bài viết'}</h2>
<form className="post-form" onSubmit={onSubmit}>
<label>
Tiêu đề
<input value={form.title} onChange={e => setForm(s => ({ ...s, title: e.target.value }))} />
{errors.title && <small className="err">{errors.title}</small>}
</label>


<label>
Tác giả
<input value={form.author} onChange={e => setForm(s => ({ ...s, author: e.target.value }))} />
{errors.author && <small className="err">{errors.author}</small>}
</label>


<label>
URL ảnh thumbnail
<input value={form.thumbnail} onChange={e => setForm(s => ({ ...s, thumbnail: e.target.value }))} />
</label>


<label>
Thể loại
<select value={form.category} onChange={e => setForm(s => ({ ...s, category: e.target.value as Category }))}>
{categories.map(c => <option key={c} value={c}>{c}</option>)}
</select>
</label>


<label>
Nội dung
<textarea rows={12} value={form.content} onChange={e => setForm(s => ({ ...s, content: e.target.value }))} />
{errors.content && <small className="err">{errors.content}</small>}
</label>


<div className="form-actions">
<button type="submit">{mode === 'create' ? 'Đăng bài' : 'Cập nhật'}</button>
<button type="button" onClick={() => mode === 'create' ? navigate('/') : navigate(`/posts/${params.id}`)}>Hủy</button>
</div>
</form>
</div>
)
}


export default PostForm
