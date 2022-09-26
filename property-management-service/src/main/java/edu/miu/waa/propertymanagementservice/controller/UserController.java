package edu.miu.waa.propertymanagementservice.controller;

import edu.miu.waa.propertymanagementservice.dto.PropertyDto;
import edu.miu.waa.propertymanagementservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {


    private final UserService userService;




    @GetMapping("/{email}/favourites")
    public Set<PropertyDto> favouritePropertyByEmail(@PathVariable("email") String customerEmail){
        System.out.println("this id favorite");
        return userService.favouritePropertyByEmail(customerEmail);
    }
}
