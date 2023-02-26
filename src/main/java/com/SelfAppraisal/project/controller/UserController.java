package com.SelfAppraisal.project.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SelfAppraisal.project.entity.Role;
import com.SelfAppraisal.project.entity.User;
import com.SelfAppraisal.project.entity.UserRole;
import com.SelfAppraisal.project.repository.UserRepository;
import com.SelfAppraisal.project.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value="/api")
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepository;

	  @PostMapping("/createUser")
	  User registerUser(@RequestBody User user) throws Exception {
		  
		  Set<UserRole> roles=new HashSet<>();
		  Role role=new Role();
		  role.setRoleId(3L);
		  role.setRoleName("USER");
		  
		  UserRole userRole=new UserRole();
		  userRole.setUser(user);
		  userRole.setRole(role);
		  roles.add(userRole);
		  
		return this.userService.createUser(user, roles);		  
	  }
	  
	  @PostMapping("/createPrincipal")
	  User registerPrincipal(@RequestBody User user) throws Exception {
		  
		  Set<UserRole> roles=new HashSet<>();
		  Role role=new Role();
		  role.setRoleId(2L);
		  role.setRoleName("PRINCIPAL");
		  
		  UserRole userRole=new UserRole();
		  userRole.setUser(user);
		  userRole.setRole(role);
		  roles.add(userRole);
		  
		return this.userService.createUser(user, roles);		  
	  }
	  
	  @PostMapping("/createHodExtc")
	  User createHodExtc(@RequestBody User user) throws Exception {
			  
			Set<UserRole> roles=new HashSet<>();
			Role role=new Role();
			role.setRoleId(4L);
			role.setRoleName("HOD_EXTC");
			  
			UserRole userRole=new UserRole();
			userRole.setUser(user);
			userRole.setRole(role);
			roles.add(userRole);
		  
		return this.userService.createUser(user, roles);		  
	  }
	  
	  @PostMapping("/createHodCe")
	  User createHodCe(@RequestBody User user) throws Exception {
			  
			Set<UserRole> roles=new HashSet<>();
			Role role=new Role();
			role.setRoleId(5L);
			role.setRoleName("HOD_CE");
			  
			UserRole userRole=new UserRole();
			userRole.setUser(user);
			userRole.setRole(role);
			roles.add(userRole);
		  
		return this.userService.createUser(user, roles);		  
	  }
	  
	  @PostMapping("/createHodCse")
	  User createHodCse(@RequestBody User user) throws Exception {
			  
			Set<UserRole> roles=new HashSet<>();
			Role role=new Role();
			role.setRoleId(6L);
			role.setRoleName("HOD_CSE");
			  
			UserRole userRole=new UserRole();
			userRole.setUser(user);
			userRole.setRole(role);
			roles.add(userRole);
		  
		return this.userService.createUser(user, roles);		  
	  }
	  
	  @PostMapping("/createHodAsh")
	  User createHodAsh(@RequestBody User user) throws Exception {
			  
			Set<UserRole> roles=new HashSet<>();
			Role role=new Role();
			role.setRoleId(7L);
			role.setRoleName("HOD_ASH");
			  
			UserRole userRole=new UserRole();
			userRole.setUser(user);
			userRole.setRole(role);
			roles.add(userRole);
		  
		return this.userService.createUser(user, roles);		  
	  }
	  
	  @PostMapping("/createHodEe")
	  User createHodEe(@RequestBody User user) throws Exception {
			  
			Set<UserRole> roles=new HashSet<>();
			Role role=new Role();
			role.setRoleId(8L);
			role.setRoleName("HOD_EE");
			  
			UserRole userRole=new UserRole();
			userRole.setUser(user);
			userRole.setRole(role);
			roles.add(userRole);
		  
		return this.userService.createUser(user, roles);		  
	  }
	  
	  @PostMapping("/createHodIt")
	  User createHodIt(@RequestBody User user) throws Exception {
			  
			Set<UserRole> roles=new HashSet<>();
			Role role=new Role();
			role.setRoleId(9L);
			role.setRoleName("HOD_IT");
			  
			UserRole userRole=new UserRole();
			userRole.setUser(user);
			userRole.setRole(role);
			roles.add(userRole);
		  
		return this.userService.createUser(user, roles);		  
	  } 
//	  @GetMapping("/login/{username}/{password}")
//	  public int userLogin(@PathVariable("username") String username, @PathVariable("password") String password) {
//
//		  int flag=userService.loginValidation(username, password);
//		  if(flag==0) {
//			  return 0;
//		  } else {
//			  return flag;
//		  }
//		  
//		  
//	  }
	  
	  @GetMapping("/hello")
	  public ResponseEntity<String> sayHello(){
		  return ResponseEntity.ok("Hello from our API");
	  }
	  
	  @GetMapping("/bye")
	  public ResponseEntity<String> sayBye(){
		  return ResponseEntity.ok("Bye");
	  }
}
