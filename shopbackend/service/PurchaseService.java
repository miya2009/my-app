package org.mysite.shopbackend.service;

import org.mysite.shopbackend.model.Purchase;
import org.mysite.shopbackend.repository.projection.PurchaseItem;

import java.util.List;

public interface PurchaseService {
    Purchase savePurchase(Purchase purchase);

    List<PurchaseItem> findPurchaseItemsOfUser(Long userId);
}
