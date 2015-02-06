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
![Macros](https://lh3.googleusercontent.com/dgHurg2qN7zYxV8Gd7CIJw_KtD1ThipT456wbDEPabMQM11Sh_2jwig-7V_dxUyaYbiurnXv6A=w1896-h813)

###2. Create rule
![Rule](https://lh6.googleusercontent.com/L0CHsW9lf-T31DH3z01_hZfSWWRPdAugGl9MoZj2-G2upueiA48b5UanfERe1NJdIIBKwK8HZA=w1896-h813)

###3. Create tag and associate rule and macro
![Tags](https://lh6.googleusercontent.com/PEBC7oYzx6SP-D70mhtZfUBxKSgx-rFOjKfGyCqnRY5Df7XBh6nEJ05V8UCqr4udE8MzhuI-eQ=w1896-h813)
