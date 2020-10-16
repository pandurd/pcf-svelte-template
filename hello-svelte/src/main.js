import App from './App.svelte';

const app = new App({
	target: document.getElementsByTagName('app-pcf-component')[0],
	props: {
		name: document.getElementsByTagName('app-pcf-component')[0].getAttribute('test')
	}
});

export default app;