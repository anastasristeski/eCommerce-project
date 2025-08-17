package com.example.eCommerceBackend.Controller;

import com.example.eCommerceBackend.Models.Order;
import com.example.eCommerceBackend.Models.OrderItem;
import com.example.eCommerceBackend.Records.OrderItemDto;
import com.example.eCommerceBackend.Repositories.OrderRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/place-order")
public class OrderController {
    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @PostMapping
    public ResponseEntity<?> placeOrder(@RequestBody List<OrderItemDto> itemsDto){
      List<OrderItem> items = itemsDto.stream()
              .map(dto-> new OrderItem(dto.getName(), dto.getPrice(), dto.getQuantity(),dto.getValues()))
              .toList();
      double totalPrice = items.stream()
              .mapToDouble(i->i.getPrice() * i.getQuantity()).sum();
      Order order = new Order(totalPrice, items);
      orderRepository.save(order);
        return ResponseEntity.ok(order);
    }

}
