package edu.miu.waa.propertymanagementservice.security;

import com.auth0.jwt.JWT;
import edu.miu.waa.propertymanagementservice.domain.KeyCloakUserDetailsAdapter;
import edu.miu.waa.propertymanagementservice.entity.User;
import edu.miu.waa.propertymanagementservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            var token = authorizationHeader.substring(7);
            //boolean isValidToken = jwtHelper.validateToken(token);
            saveUser(token);
            if(SecurityContextHolder.getContext().getAuthentication() == null) {
                System.out.println(token);
                var userDetails = new KeyCloakUserDetailsAdapter(token);

                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
        filterChain.doFilter(request, response);
    }


    private void saveUser(String token) {
        var decodedJWT = JWT.decode(token);
        String username = decodedJWT.getClaims().get("email").asString();
        User user = userRepository.findByEmail(username);

        if(user == null) {
            user = new User();
            user.setEmail(username);
            userRepository.save(user);
        }
    }
}