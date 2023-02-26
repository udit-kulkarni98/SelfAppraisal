package com.SelfAppraisal.project.service;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SelfAppraisal.project.entity.User;
import com.SelfAppraisal.project.entity.UserRole;
import com.SelfAppraisal.project.repository.RoleRepository;
import com.SelfAppraisal.project.repository.UserRepository;

@Service
public class UserService{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
//	Connection connection;
	
	public User createUser(User user, Set<UserRole> userRoles) throws Exception{
		User local = this.userRepository.findByUsername(user.getUsername());
		if(local!=null) {
			System.out.println("User already exists");
			throw new Exception("User already exists");
		} else {
			for(UserRole ur:userRoles) {
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local=this.userRepository.save(user);
		}
		
		return local;
	}
	
	
	
//	public UserService() throws SQLException{
//		connection=DBUtil.getConnection();
//	}
	
	
	
//	public int loginValidation(String username, String password) {
//			int flag=0;
//			try {
//			PreparedStatement statement=connection.prepareStatement("SELECT * FROM users WHERE username='"+username+"'");
//			ResultSet rs= statement.executeQuery();
//			while(rs.next()) {
////				System.out.println(rs.getString(4));
////				System.out.println(rs.getString(3));
//				if(rs.getString(4).equals(username) && rs.getString(3).equals(password)) {
//					System.out.println("Login Successful");
//					flag=1;
//				} else {
//					System.out.println("Invalid Username/Password");
//					flag=0;
//				}
//			}
//		} catch (SQLException e) {
//			e.printStackTrace();
//		}
//
//		return flag;
//	}	
}
