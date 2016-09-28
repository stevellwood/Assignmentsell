package com.ssa.controller;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
@ComponentScan(basePackages="com.ssa")
@Controller
public class WebSiteController {
Map<Integer, String> helptexts = new HashMap<Integer, String>();
    
    public void loadHelpTexts() {
        helptexts.put(1, "Restart");
        helptexts.put(2, "Restart again");
        helptexts.put(3, "Reintall");
        helptexts.put(4, "Call tech support");
        helptexts.put(5, "ET Call home");
        
       
    }
    
    @RequestMapping("/") //go to home page localhost:8080/
    //if don't put anything in after home page (8080) add / and do bleow
    public ModelAndView home(HttpServletRequest request, ModelAndView mv) {
        if(request.getParameter("name") != null){
            mv.addObject("name", request.getParameter("name"));
        }
        mv.setViewName("home");
        return mv;
    }
    @RequestMapping("/about")
    //if don't put anything in after home page (8080) add / and do bleow
    public ModelAndView about(HttpServletRequest request, ModelAndView mv) {
//        if(request.getParameter("name") != null){   //looks for parameter on the command or html line
//            mv.addObject("name", request.getParameter("name"));
//        }
        mv.setViewName("about");
        return mv;
    }
    @RequestMapping("/help")
    //if don't put anything in after home page (8080) add / and do bleow
    public ModelAndView help(HttpServletRequest request, ModelAndView mv) {
        if(request.getParameter("id") != null){   //looks for parameter on the command or html line
            //mv.addObject("id", request.getParameter("id"));
            int hid = (int) Integer.parseInt(request.getParameter("id"));
            String message = helptexts.get(hid);
            //Id is [1], text is [The text for message 1]
            mv.addObject("id", hid);
            mv.addObject("desc", helptexts.get(hid));
            System.out.println("Id = " + hid + " gives this note " + message);
        }
        mv.setViewName("help");
        return mv;
    }


}
