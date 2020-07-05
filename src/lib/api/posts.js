import api from './index'

export const listPosts = () => api.get('/api/board/movie/list/1')
export const readPost = (number) => api.get(`/api/board/movie/view/${number}`)
export const readEpisode = (movie) =>
  api.get(`/api/board/episode/episode/${movie}`)
