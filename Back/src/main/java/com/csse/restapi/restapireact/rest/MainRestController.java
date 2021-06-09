package com.csse.restapi.restapireact.rest;

import com.csse.restapi.restapireact.entities.Cards;
import com.csse.restapi.restapireact.services.CardsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping(value = "/api")
public class MainRestController {


    @Autowired
    private CardsService cardsService;


    @GetMapping(value = "/getAllCards")
    public ResponseEntity<?> getAllItems(){
        List<Cards> cards = cardsService.getAllCards();
        System.out.println(cards.size());
        if(cards.size() != 0) {
            return new ResponseEntity<>(cards, HttpStatus.OK);
        }else {
            return ResponseEntity.ok("NULL");
        }
    }

    @GetMapping(value = "getAllCardsByPriority")
    public ResponseEntity<?> getAllCardsByPriority(@RequestParam("priority")String priority){
        List<Cards> cards = cardsService.getAllByPriority(priority);
        if(cards.size() != 0) {
            return ResponseEntity.ok(cards);
        }else {
            return ResponseEntity.ok("NOT FOUND");
        }
    }

    @PostMapping(value = "/addCard")
    public ResponseEntity<?> addItem(@RequestParam("name")String name, @RequestParam("desc")String description, @RequestParam("services")String services){


        Cards c = new Cards();

        // Добавление данных из request parameters
        c.setName(name);
        c.setDescription(description);
        c.setPriority(services);
        // Добавление даты
        c.setAddedDate(Date.valueOf(LocalDate.now()));
        // Установка дефолтного значения поля done
        c.setDone(false);

        // Добавление в базу данных
        cardsService.addCard(c);

        return ResponseEntity.ok("ok");
    }



    @PostMapping(value = "/deleteCard/{id}")
    public ResponseEntity<?> deleteCard(@PathVariable(name = "id")int id){
        cardsService.deleteById(id);
        return null;
    }

//    @GetMapping(value = "/details/{id}")
//    public ResponseEntity<?> getCardTasks(@PathVariable(name = "id")int id){
//        List<CardsTasks> cardsTasks = cardsTasksService.getAllByCard(cardsService.findAllById(id));
//        return ResponseEntity.ok(cardsTasks);
//    }

    @GetMapping(value = "/getCard/{id}")
    public ResponseEntity<?> getCard(@PathVariable(name = "id")int id){
        Cards cards = cardsService.findAllById(id);
        return ResponseEntity.ok(cards);
    }

}
