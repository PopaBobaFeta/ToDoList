package com.csse.restapi.restapireact.services.impl;

import com.csse.restapi.restapireact.entities.Cards;
import com.csse.restapi.restapireact.repositories.CardsRepository;
import com.csse.restapi.restapireact.services.CardsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardsServiceImpl implements CardsService {
    @Autowired
    private CardsRepository cardsRepository;

    @Override
    public List<Cards> getAllCards() {
        return cardsRepository.findAll();
    }

    @Override
    public Cards addCard(Cards c) {
        return cardsRepository.save(c);
    }

    @Override
    public Cards findAllById(int id) {
        return cardsRepository.findAllById(id);
    }

    @Override
    public Cards deleteById(int id) {
        return cardsRepository.deleteById(id);
    }

    @Override
    public List<Cards> getAllByPriority(String priority) {
        return cardsRepository.findAllByPriority(priority);
    }
}
