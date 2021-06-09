package com.csse.restapi.restapireact.repositories;

import com.csse.restapi.restapireact.entities.Cards;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardsRepository extends JpaRepository<Cards,Integer> {
    Cards findAllById(int id);
    Cards deleteById(int id);
    List<Cards> findAllByPriority(String priority);
}
