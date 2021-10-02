package com.luischdu.backendprojectfinal.util;

import java.util.Date;
import java.sql.Timestamp;

public class Util {
    public static Timestamp deteToTimestamp(Date date){
        Timestamp timestamp = new Timestamp(date.getTime());
        return timestamp;
    }
}
