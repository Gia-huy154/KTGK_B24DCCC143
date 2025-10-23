import { Post } from '../types'


export const initialPosts: Post[] = [
{
id: '1',
title: 'Hướng dẫn React Hook cơ bản',
author: 'Nguyễn A',
thumbnail: 'https://picsum.photos/seed/react/600/400',
content:
`React Hooks là API cho phép bạn sử dụng state và các tính năng khác của React trong function components.\n\nNội dung dài mẫu...`.repeat(6),
category: 'Công nghệ',
createdAt: new Date().toISOString(),
},
{
id: '2',
title: 'Du lịch Hà Nội 3 ngày 2 đêm',
author: 'Trần B',
thumbnail: 'https://picsum.photos/seed/hanoi/600/400',
content: `Lịch trình chi tiết, địa điểm ăn uống và trải nghiệm...`.repeat(8),
category: 'Du lịch',
createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
},
{
id: '3',
title: 'Món phở đúng điệu tại nhà',
author: 'Phạm C',
thumbnail: 'https://picsum.photos/seed/food/600/400',
content: `Cách nấu nước dùng, chọn gia vị và trang trí...`.repeat(8),
category: 'Ẩm thực',
createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20).toISOString(),
},
{
id: '4',
title: 'Sống tối giản và lợi ích',
author: 'Lê D',
thumbnail: 'https://picsum.photos/seed/life/600/400',
content: `Minimalism giúp giảm stress và tăng hiệu suất...`.repeat(6),
category: 'Đời sống',
createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 40).toISOString(),
},
{
id: '5',
title: 'Những công cụ dev nên biết 2025',
author: 'Hoàng E',
thumbnail: 'https://picsum.photos/seed/dev/600/400',
content: `Các công cụ mới, tips và workflow...`.repeat(6),
category: 'Công nghệ',
createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 70).toISOString(),
},
]
