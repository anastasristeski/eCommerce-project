package com.example.eCommerceBackend.Repositories;

import com.example.eCommerceBackend.Models.Attributes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttributesRepository extends JpaRepository<Attributes, Long> {
}
