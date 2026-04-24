import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Movielist, MovieDetails, Search, PageNotFound} from '../pages'

export default function AllRouters() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Movielist apiPath="movie/now_playing" title="Home" />} />
            <Route path="/movies/popular" element={<Movielist apiPath="movie/popular" title="Popular" />} />
            <Route path="/movies/top-rated" element={<Movielist apiPath="movie/top_rated" title="Top Rated" />} />
            <Route path="/movies/upcoming" element={<Movielist apiPath="movie/upcoming" title="Upcoming" />} />
            <Route path="/search" element={<Search apiPath="search/movie" />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path='/*' element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
