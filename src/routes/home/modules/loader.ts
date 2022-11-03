import { queryClient } from '../../../modules/queryClient';
import { postsQueryOptions, PostsQueryResult } from './api';

export const loader = async () => {
  return (
    (queryClient.getQueryData(
      postsQueryOptions.queryKey
    ) as PostsQueryResult) ?? (await queryClient.fetchQuery(postsQueryOptions))
  );
};
