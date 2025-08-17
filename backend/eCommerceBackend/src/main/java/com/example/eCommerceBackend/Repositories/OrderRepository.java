package com.example.eCommerceBackend.Repositories;

import com.example.eCommerceBackend.Models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository  extends JpaRepository<Order,Long> {

}
