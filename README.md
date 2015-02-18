# Trackapp
A Single Page Application to test tracking using Google Tag Manager

## Tracking virtual pages
We have used state change event handler to get notified about state url and which pushes GTM events.
[index.js](https://github.com/nikhilwalvekar/trackapp/blob/master/src/app/index.js)

```
$rootScope.$on('$stateChangeStart', 
		function(event, toState) {
			if (dataLayer) {
				dataLayer.push({
				  'event':'pageview',
				  'virtualUrl':toState.url 
				});
				console.log(dataLayer);
			}
		}
	);
```
## GTM configuration
###1. Create macro
![Macros](https://raw.githubusercontent.com/nikhilwalvekar/trackapp/master/docs/images/GTM_macro.png)

###2. Create rule
![Rule](https://raw.githubusercontent.com/nikhilwalvekar/trackapp/master/docs/images/GTM_rules.png)

###3. Create tag and associate rule and macro
![Tags](https://raw.githubusercontent.com/nikhilwalvekar/trackapp/master/docs/images/GTM_tags.png)
