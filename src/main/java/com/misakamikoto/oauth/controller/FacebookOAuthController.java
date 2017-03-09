package com.misakamikoto.oauth.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.misakamikoto.oauth.service.FacebookOAuthService;

/**
 * Created by Misaka on 2016-04-18.
 */

@RestController
@RequestMapping("/facebookOAuth")
public class FacebookOAuthController {
    @Autowired
    public FacebookOAuthService facebookOAuthService;

    @RequestMapping(method = RequestMethod.GET)
    public String load() {
        return "oauth/facebook/index";
    }

    @RequestMapping(value = "/receive/code", method = RequestMethod.GET)
    public @ResponseBody JSONObject receiveFacebookCode() {
        System.out.print("aa");
        return null;
    }

    @RequestMapping(value = "/receive/token", method = RequestMethod.POST)
    public @ResponseBody JSONObject receiveToken(@RequestParam String appId, @RequestParam String secret) {
        FacebookOAuthService facebookOAuthService = FacebookOAuthService.getInstance();
        return facebookOAuthService.getAccessToken(appId, secret);
    }
}
