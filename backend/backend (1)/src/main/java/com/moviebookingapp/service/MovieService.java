package com.moviebookingapp.service;

import java.util.List;

import com.moviebookingapp.model.Movie;


public interface MovieService {

    Movie updateMovie(Long  id,Movie movie);
    Movie addMovie(Movie movie);
List<Movie> getAllMovies();

    Movie deleteMovie(Long id);

Movie searchMovieById(Long id);
List<Movie> searchMovieByName(String name);

}
