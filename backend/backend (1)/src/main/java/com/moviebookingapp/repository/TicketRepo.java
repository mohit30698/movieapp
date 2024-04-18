package com.moviebookingapp.repository;


import com.moviebookingapp.model.Ticket;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TicketRepo extends JpaRepository<Ticket,Long> {



	List<Ticket> findAllByOrderByTransactionIdDesc();


}
