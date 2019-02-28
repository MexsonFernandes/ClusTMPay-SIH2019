package com.allandroidprojects.clustmpay.firebase;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import java.util.Date;

public class NotificationDismissedReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        /* Your code to handle the event here */
        if(intent!=null ){
            long recievingTime= intent.getLongExtra("recievingTime",-1);
            if(recievingTime!=-1){
                long clickedTime=new Date().getTime();
                //get time diff between clicked and recievedtime
                String status ="dismissed";
                Long timDiff = clickedTime-recievingTime;
                boolean wasPhoneLocked= intent.getBooleanExtra("wasPhoneLocked",true);
                Log.e("Htag","timDiff = "+timDiff+"wasPhoneLocked = "+wasPhoneLocked+"status = "+status);
            }

        }
    }
}
