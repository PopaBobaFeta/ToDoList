package com.csse.restapi.restapireact.services;


import com.csse.restapi.restapireact.entities.Cards;

import java.util.List;

public interface CardsService{
    List<Cards> getAllCards();
    Cards addCard(Cards c);
    Cards findAllById(int id);
    Cards deleteById(int id);
    List<Cards> getAllByPriority(String priority);
}
