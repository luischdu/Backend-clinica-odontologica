package com.luischdu.backendprojectfinal;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackEndProjectFinalApplication {


    static Logger logger = Logger.getLogger(BackEndProjectFinalApplication.class);
    public static void main(String[] args) {

        SpringApplication.run(BackEndProjectFinalApplication.class, args);

        //PropertiesConfigurator is used to configure logger from properties file
        PropertyConfigurator.configure("log4j.properties");

        //Log in console in and log file
        logger.debug("Log4j appender configuration is successful !!");
    }

}
