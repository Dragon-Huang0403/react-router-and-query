import { Post } from '../../../models/post';

export const queryKeys = {
  Posts: 'Posts',
};

const baseUrl = 'https://jsonplaceholder.typicode.com';

async function getPosts(): Promise<Post[]> {
  console.log('fetch data');
  return fetch(`${baseUrl}/posts`).then((res) => res.json());
}

export function deletePost(id: string) {
  fetch(`${baseUrl}/posts/${id}`, { method: 'DELETE' });
}

export type PostsQueryResult = Post[];

export const postsQueryOptions = {
  queryKey: [queryKeys.Posts],
  queryFn: getPosts,
};
