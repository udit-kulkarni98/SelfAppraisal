package com.SelfAppraisal.project;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.SelfAppraisal.project.entity.Role;
import com.SelfAppraisal.project.entity.User;
import com.SelfAppraisal.project.entity.UserRole;
import com.SelfAppraisal.project.repository.UserRepository;
import com.SelfAppraisal.project.service.UserService;

@SpringBootApplication
@EnableConfigurationProperties
@EntityScan(basePackages = {"com.SelfAppraisal.project.entity"})
//public class SelfAppraisalApplication{
	public class SelfAppraisalApplication implements CommandLineRunner{
	
//	@Autowired    
//	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(SelfAppraisalApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		System.out.println(this.passwordEncoder.encode("xyz"));
		
	
		User user=new User();
		if(this.userRepository.findByUsername("admin")==null){
			user.setFirstname("Admin");
			user.setLastname("");
			user.setUsername("admin");
			user.setPassword("admin");
			
			Role role=new Role();
			role.setRoleId(1L);
			role.setRoleName("ADMIN");
			
			Set<UserRole> userRoleSet=new HashSet<>();
			UserRole userRole=new UserRole();	
			userRole.setRole(role);
			userRole.setUser(user);
			userRoleSet.add(userRole);
			userService.createUser(user, userRoleSet);
		}
		System.out.println("Starting code");
	}	
}
