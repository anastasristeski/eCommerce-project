package com.example.eCommerceBackend.Repositories;

import com.example.eCommerceBackend.Models.Currency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyRepository extends JpaRepository<Currency, Long> {

}
