package com.SelfAppraisal.project.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SelfAppraisal.project.entity.EntityClass;
import com.SelfAppraisal.project.repository.RepositoryClass;

@Service
public class ServiceClass {
	
	@Autowired
	private RepositoryClass repositoryClass;
	
	public EntityClass saveData(EntityClass entityClass) {
		return repositoryClass.save(entityClass);
	}
	
	public List<EntityClass> getAllData(){
		return (List<EntityClass>) repositoryClass.findAll();
	}
	
	public EntityClass getDataById(long id) {
		return repositoryClass.findById(id).orElse(null);
	}
}
