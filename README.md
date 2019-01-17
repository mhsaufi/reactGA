<H2>Google Analytics with React Native</H2>

To start an integration to the Google Analytics platform is a really easy. There are two requirements before it can be done : <br>
<ul>
  <li>An existing react native apps or create new one</li>
  <li>Google Analytics account property with view for your react native mobile apps</li>
</ul>
That are all the requirement needed. When you have the GA account property, 
go to the Property Setting if you are admin and get the <b>tracking code</b>.
<br>
<br><hr/>

<h2>Get Started</h2>

1. Add the Google Analytics Bridge module into your node module package : 
<ul>
  <li><em><b>yarn add react-native-google-analytics-bridge</b></em></li>
  <li>or via npm , <em><b>npm install --save react-native-google-analytics-bridge</b></em></li>
</ul>
<br>
2. Link the added module to your react native app : 
<ul>
  <li><em><b>react-native link react-native-google-analytics-bridge</b></em></li>
</ul>
<br>
3. Within your screen file code, let say my screen is App.js, the first and main screen code, add this import : 
<ul>
  <li><em><b>
import {GoogleAnalyticsSettings, GoogleAnalyticsTracker} from 'react-native-google-analytics-bridge';</b></em></li>
</ul>
<br>
3. Now construct your GA Bridge object, depends on how you want to use it, in my case, <br>outside the class as i will be using it in multiple screen : 
<ul>
  <li><em><b>const my_tracker = new GoogleAnalyticsTracker('YOUR_GA_TRACKING_CODE');</b></em></li>
</ul>
<br>
4. As there are 2 basic hits to use, i will use pageView hit and event hit. To use them : 
<ul>
  <li><em><b>my_tracker.trackScreenView("YOUR_SCREEN_NAME");</b></em></li>
  <li><em><b>my_tracker.trackEvent("YOUR_EVENT_NAME","EVENT_TYPE");</b></em></li>
</ul>
<small><em>YOUR_SCREEN_NAME and YOUR_EVENT_NAME is the name that will be appearing on google analytics. <br>
it has nothing to do with your internal react native apps. But it is a good practise to make everything organized</em></small>
<br>
<hr/>
<h2>Done!</h2>
Thats it! You are on your way to develop on your own pace! 
