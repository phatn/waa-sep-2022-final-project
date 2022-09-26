package edu.miu.waa.propertymanagementservice.scheduler;

import lombok.RequiredArgsConstructor;
import org.springframework.cache.CacheManager;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.Objects;


@RequiredArgsConstructor
public class CacheScheduler {

	private final CacheManager cacheManager;

	@Scheduled(fixedRate = 12 * 60 * 60 * 1000)
	public void evictAllCaches() {
		cacheManager.getCacheNames().forEach(cacheName -> Objects.requireNonNull(cacheManager.getCache(cacheName)).clear());
	}
}
