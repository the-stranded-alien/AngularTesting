import {initialState, postsReducer} from "./reducers";
import * as PostActions from './actions';

describe('PostsReducers', () => {
  it('returns a default state', () => {
    const action = {type: 'Unknown'};
    const state = postsReducer(initialState, action);
    const newState = {
      error: null,
      isLoading: false,
      posts: [],
    };
    expect(state).toEqual(newState);
  });

  it('getPosts', () => {
    const action = PostActions.getPosts();
    const state = postsReducer(initialState, action);
    const newState = {
      error: null,
      isLoading: true,
      posts: [],
    };
    expect(state).toEqual(newState);
  });

  it('getPostsSuccess', () => {
    const action = PostActions.getPostsSuccess({
      posts: [{ id: '1', title: 'foo' }],
    });
    const state = postsReducer(initialState, action);
    const newState = {
      error: null,
      isLoading: false,
      posts: [{ id: '1', title: 'foo' }],
    };
    expect(state).toEqual(newState);
  });

  it('getPostsFailure', () => {
    const action = PostActions.getPostsFailure({
      error: 'Server error',
    });
    const state = postsReducer(initialState, action);
    const newState = {
      error: 'Server error',
      isLoading: false,
      posts: [],
    };
    expect(state).toEqual(newState);
  });
});
