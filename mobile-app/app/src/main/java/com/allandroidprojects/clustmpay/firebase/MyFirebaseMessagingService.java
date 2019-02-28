package com.allandroidprojects.clustmpay.firebase;

import android.app.KeyguardManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;

import android.text.TextUtils;
import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Date;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    private static final String TAG = MyFirebaseMessagingService.class.getSimpleName();

    private NotificationUtils notificationUtils;

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Log.e(TAG, "From: " + remoteMessage.getFrom());

        if (remoteMessage == null)
            return;

        // Check if message contains a notification payload.
        if (remoteMessage.getNotification() != null) {
            Log.e(TAG, "Notification Body: " + remoteMessage.getNotification().getBody());
            handleNotification(remoteMessage.getNotification().getBody());
        }

        // Check if message contains a data payload.
        if (remoteMessage.getData().size() > 0) {
            Log.e(TAG, "Data Payload: " + remoteMessage.getData().toString());

            try {
                JSONObject json = new JSONObject(remoteMessage.getData().toString());
                handleDataMessage(json);
            } catch (Exception e) {
                Log.e(TAG, "Exception: " + e.getMessage());
            }
        }
    }

    private void handleNotification(String message) {
        /*if (!NotificationUtils.isAppIsInBackground(getApplicationContext())) {
            // app is in foreground, broadcast the push message
            Intent pushNotification = new Intent(Config.PUSH_NOTIFICATION);
            pushNotification.putExtra("message", message);
            LocalBroadcastManager.getInstance(this).sendBroadcast(pushNotification);

            // play notification sound
            NotificationUtils notificationUtils = new NotificationUtils(getApplicationContext());
            notificationUtils.playNotificationSound();
        }else{
            // If the app is in background, firebase itself handles the notification
        }*/
        PendingIntent contentPendingIntent = getContentPendingIntent( message);
        PendingIntent cancelPendingIntent=getOnDismissedIntent(message);
           notificationUtils = new NotificationUtils(getApplicationContext());
        notificationUtils.showNotificationMessage( message, contentPendingIntent,cancelPendingIntent);

    }



    private PendingIntent getContentPendingIntent(String message) {
        Intent resultIntent = new Intent(getApplicationContext(), Firmain.class);
        resultIntent.putExtra("message", message);
        resultIntent.putExtra("isFromNotification", true);
        resultIntent.putExtra("recievingTime",getCurrentTimeStamp());
        resultIntent.putExtra("wasPhoneLocked",getPhoneState());

        final PendingIntent resultPendingIntent =
          PendingIntent.getActivity(
            getApplicationContext(),
            0,
            resultIntent,
            PendingIntent.FLAG_CANCEL_CURRENT
          );
     return  resultPendingIntent;
    }

    private PendingIntent getOnDismissedIntent(String message) {
        Intent intent = new Intent(getApplicationContext(), NotificationDismissedReceiver.class);
        intent.putExtra("message", message);
        intent.putExtra("isFromNotification", true);
        intent.putExtra("recievingTime",getCurrentTimeStamp());
        intent.putExtra("wasPhoneLocked",getPhoneState());

        PendingIntent pendingIntent =
          PendingIntent.getBroadcast(getApplicationContext(),
            (int) getCurrentTimeStamp(), intent, 0);
        return pendingIntent;
    }

    private boolean getPhoneState() {
        KeyguardManager myKM = (KeyguardManager) getApplicationContext().getSystemService(Context.KEYGUARD_SERVICE);
        return myKM.inKeyguardRestrictedInputMode();
            //it is locked

    }

    private long getCurrentTimeStamp() {
        return new Date().getTime();
    }

    private void handleDataMessage(JSONObject json) {
        Log.e(TAG, "push json: " + json.toString());

        try {
            JSONObject data = json.getJSONObject("data");

            String title = data.getString("title");
            String message = data.getString("message");
            boolean isBackground = data.getBoolean("is_background");
            String imageUrl = data.getString("image");
            String timestamp = data.getString("timestamp");
            JSONObject payload = data.getJSONObject("payload");

            Log.e(TAG, "title: " + title);
            Log.e(TAG, "message: " + message);
            Log.e(TAG, "isBackground: " + isBackground);
            Log.e(TAG, "payload: " + payload.toString());
            Log.e(TAG, "imageUrl: " + imageUrl);
            Log.e(TAG, "timestamp: " + timestamp);



            PendingIntent contentPendingIntent = getContentPendingIntent( message);
            PendingIntent cancelPendingIntent=getOnDismissedIntent(message);


            // check for image attachment
                if (TextUtils.isEmpty(imageUrl)) {
                    showNotificationMessage(getApplicationContext(), title, message, timestamp, contentPendingIntent,cancelPendingIntent);
                } else {
                    // image is present, show notification with image
                    showNotificationMessageWithBigImage(getApplicationContext(), title, message, timestamp, contentPendingIntent ,cancelPendingIntent, imageUrl);
                }

        } catch (JSONException e) {
            Log.e(TAG, "Json Exception: " + e.getMessage());
        } catch (Exception e) {
            Log.e(TAG, "Exception: " + e.getMessage());
        }
    }

    /**
     * Showing notification with text only
     */
    private void showNotificationMessage(Context context, String title, String message, String timeStamp, PendingIntent contentPendingIntent,PendingIntent cancelPendingIntent) {
        notificationUtils = new NotificationUtils(context);
        notificationUtils.showNotificationMessage(title, message, timeStamp, contentPendingIntent,cancelPendingIntent);
    }

    /**
     * Showing notification with text and image
     */
    private void showNotificationMessageWithBigImage(Context context, String title, String message, String timeStamp, PendingIntent contentPendingIntent,PendingIntent cancelPendingIntent, String imageUrl) {
        notificationUtils = new NotificationUtils(context);
        notificationUtils.showNotificationMessage(title, message, timeStamp, contentPendingIntent,cancelPendingIntent, imageUrl);
    }
}
