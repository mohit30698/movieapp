package com.moviebookingapp.repository;

import com.moviebookingapp.model.Movie;

import java.util.List;


import com.moviebookingapp.model.Ticket;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepo extends JpaRepository<Movie,Long> {

	List<Movie> findAllByMovieNameIgnoreCaseContaining(String name);
}
