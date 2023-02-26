package com.SelfAppraisal.project.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.SelfAppraisal.project.entity.EntityClass;

@Repository
public interface RepositoryClass extends CrudRepository <EntityClass, Long>{
	
}
