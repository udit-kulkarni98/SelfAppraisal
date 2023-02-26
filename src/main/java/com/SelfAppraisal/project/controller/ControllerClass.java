package com.SelfAppraisal.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SelfAppraisal.project.entity.EntityClass;
import com.SelfAppraisal.project.repository.RepositoryClass;
import com.SelfAppraisal.project.service.ServiceClass;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value="/api")
public class ControllerClass {
	
	@Autowired
	private ServiceClass serviceClass;

	  @PostMapping("/insert")
	  public EntityClass add(@RequestBody EntityClass entityClass) {
		 return serviceClass.saveData(entityClass);
	  }
	  
	  @GetMapping("/get")
	  public List<EntityClass> get(){
		  return serviceClass.getAllData();
	  }
	  
	  @GetMapping("/getbyid/{id}")
	  public EntityClass getDataById(@PathVariable long id) {
		  return serviceClass.getDataById(id);
	  }
}
