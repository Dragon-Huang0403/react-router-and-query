import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { postsQueryOptions } from '../modules/api';
import { useLoaderData, useSearchParams, useFetcher } from 'react-router-dom';
import { PostsQueryResult } from '../modules/api';

import Search from './Search';

function Home() {
  const postsData = useLoaderData() as PostsQueryResult;
  const postsQuery = useQuery({ ...postsQueryOptions, initialData: postsData });

  const fetcher = useFetcher();

  const [searchParams] = useSearchParams();
  const title = searchParams.get('title');
  const shownPosts = title
    ? postsQuery.data.filter((post) => post.title.includes(title))
    : postsQuery.data;

  return (
    <div>
      <Search initialValue={title ?? ''} />
      <div
        style={{ color: '#666', backgroundColor: '#eee', marginTop: '20px' }}
      >
        {shownPosts.map((post) => (
          <fetcher.Form
            method="post"
            action="/"
            key={post.id}
            style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}
          >
            <input name="id" value={post.id} onChange={() => {}} />
            <button type="submit">X</button>
            <span>{post.title}</span>
          </fetcher.Form>
        ))}
      </div>
    </div>
  );
}

export default Home;
