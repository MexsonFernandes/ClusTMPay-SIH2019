package com.allandroidprojects.clustmpay.firebase;

import android.app.KeyguardManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.media.AudioManager;
import android.os.Bundle;
import android.support.v4.content.LocalBroadcastManager;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.util.Log;
import android.widget.TextView;
import android.widget.Toast;

import com.allandroidprojects.clustmpay.R;
import com.allandroidprojects.clustmpay.login.Login;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.database.DatabaseReference;

import java.util.Date;

public class Firmain extends AppCompatActivity {

    private static final String TAG = Firmain.class.getSimpleName();
    private BroadcastReceiver mRegistrationBroadcastReceiver;
    private TextView txtRegId, txtMessage;
    public  String regId;

    private DatabaseReference mDatabase;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_firmain);

        txtRegId = (TextView) findViewById(R.id.txt_reg_id);
        txtMessage = (TextView) findViewById(R.id.txt_push_message);

        if(getIntent()!=null && getIntent().getBooleanExtra("isFromNotification",false)){
           long recievingTime= getIntent().getLongExtra("recievingTime",-1);
           if(recievingTime!=-1){
               long clickedTime=new Date().getTime();
               //get time diff between clicked and recievedtime
               String status ="clicked";
               Long timDiff = clickedTime-recievingTime;
               boolean wasPhoneLocked= getIntent().getBooleanExtra("wasPhoneLocked",true);
               Log.e("Htag","timDiff = "+timDiff+"wasPhoneLocked = "+wasPhoneLocked+"status = "+status);

           }

        }
// ...
        mDatabase = FirebaseDatabase.getInstance().getReference();

        mRegistrationBroadcastReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {

                KeyguardManager myKM = (KeyguardManager) getSystemService(Context.KEYGUARD_SERVICE);
                if( myKM.inKeyguardRestrictedInputMode() ) {
                    mDatabase.child("sent_notification_activity").child(Login.email).child("phoneLocked").setValue("True");

                //locked
                } else {
                    mDatabase.child("sent_notification_activity").child(Login.email).child("phoneLocked").setValue("False");
                //not locked
                }

                AudioManager am = (AudioManager)getSystemService(Context.AUDIO_SERVICE);

                switch (am.getRingerMode()) {
                    case AudioManager.RINGER_MODE_SILENT:
                        mDatabase.child("sent_notification_activity").child(Login.email).child("ringerMode").setValue("Silent");
                        Log.v("tag","ringermode");
                        break;
                    case AudioManager.RINGER_MODE_VIBRATE:
                        mDatabase.child("sent_notification_activity").child(Login.email).child("ringerMode").setValue("Vibrate");
                        Log.v("tag","vibrate");
                        break;
                    case AudioManager.RINGER_MODE_NORMAL:
                        mDatabase.child("sent_notification_activity").child(Login.email).child("ringerMode").setValue("Normal");
                        Log.v("tag","normal");
                        break;
                }

                // checking for type intent filter
                if (intent.getAction().equals(Config.REGISTRATION_COMPLETE)) {
                    // gcm successfully registered
                    // now subscribe to `global` topic to receive app wide notifications
                    FirebaseMessaging.getInstance().subscribeToTopic(Config.TOPIC_GLOBAL);

                    displayFirebaseRegId();


                } else if (intent.getAction().equals(Config.PUSH_NOTIFICATION)) {
                    // new push notification is received

                    String message = intent.getStringExtra("message");

                    Toast.makeText(getApplicationContext(), "Push notification: " + message, Toast.LENGTH_LONG).show();

                    txtMessage.setText(message);
                }
            }
        };

        displayFirebaseRegId();
    }

    // Fetches reg id from shared preferences
    // and displays on the screen
    private void displayFirebaseRegId() {
        SharedPreferences pref = getApplicationContext().getSharedPreferences(Config.SHARED_PREF, 0);
        this.regId = pref.getString("regId", null);

        Log.e(TAG, "Firebase reg id: " + regId);

        if (!TextUtils.isEmpty(this.regId))
            txtRegId.setText("Firebase Reg Id: " + this.regId);
        else
            txtRegId.setText("Firebase Reg Id is not received yet!");
    }

    @Override
    protected void onResume() {
        super.onResume();

        // register GCM registration complete receiver
        LocalBroadcastManager.getInstance(this).registerReceiver(mRegistrationBroadcastReceiver,
                new IntentFilter(Config.REGISTRATION_COMPLETE));

        // register new push message receiver
        // by doing this, the activity will be notified each time a new message arrives
        LocalBroadcastManager.getInstance(this).registerReceiver(mRegistrationBroadcastReceiver,
                new IntentFilter(Config.PUSH_NOTIFICATION));

        // clear the notification area when the app is opened
        NotificationUtils.clearNotifications(getApplicationContext());
    }

    @Override
    protected void onPause() {
        LocalBroadcastManager.getInstance(this).unregisterReceiver(mRegistrationBroadcastReceiver);
        super.onPause();
    }
}


