package org.mysite.shopbackend.service;

import lombok.RequiredArgsConstructor;
import org.mysite.shopbackend.model.Purchase;
import org.mysite.shopbackend.repository.PurchaseRepository;
import org.mysite.shopbackend.repository.projection.PurchaseItem;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PurchaseServiceImpl implements PurchaseService{

    private final PurchaseRepository purchaseRepository;

    @Override
    public Purchase savePurchase(Purchase purchase){
        purchase.setPurchaseTime(LocalDateTime.now());
        return purchaseRepository.save(purchase);
    }

    @Override
    public List<PurchaseItem> findPurchaseItemsOfUser(Long userId){
        return purchaseRepository.findAllPurchasesOfUser(userId);
    }
}
