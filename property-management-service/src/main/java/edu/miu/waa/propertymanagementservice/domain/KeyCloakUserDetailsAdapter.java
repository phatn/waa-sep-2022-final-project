package edu.miu.waa.propertymanagementservice.domain;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Data
public class KeyCloakUserDetailsAdapter implements UserDetails {

    private String username;

    private String role;

    private String token;

    public KeyCloakUserDetailsAdapter(String token) {
        this.token = token;
        DecodedJWT decodedJWT = JWT.decode(token);
        username = decodedJWT.getClaims().get("email").asString();
        List<String> roles =  new ArrayList<>();
        if(decodedJWT.getClaims().get("roles") != null) {
            roles = decodedJWT.getClaims().get("roles").asList(String.class);
        } else if (decodedJWT.getClaim("realm_access").asMap().get("roles") != null) {
           roles = (List<String>) decodedJWT.getClaim("realm_access").asMap().get("roles");
        }

        if(roles.contains("CUSTOMER")) {
            role = "CUSTOMER";
        } else if(roles.contains("ADMIN")) {
            role = "ADMIN";
        } else if(roles.contains("OWNER")) {
            role = "OWNER";
        } else {
            role = "";
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        var simpleGrantedAuthorities = new HashSet<GrantedAuthority>();
        simpleGrantedAuthorities.add( new SimpleGrantedAuthority("ROLE_" + role));
        return simpleGrantedAuthorities;
    }

    @Override
    public String getPassword() {
        return "";
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}